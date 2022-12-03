<template>
	<div class="py-40 px-5 m-auto max-w-6xl bg-white">
		<div class="grid grid-cols-1 md:grid-cols-2">
			<div class="m-auto">
				<p class="text-3xl font-mono uppercase my-5">TOKEN :</p>
				<p class="text-sm md:text-2xl">{{ coin_data.name }} ({{ coin_data.symbol }})</p>
				<p class="text-3xl font-mono uppercase my-5">PRICE</p>
				<p class="text-sm md:text-2xl">{{ coin_data.price }}</p>

				<p class="text-3xl font-mono uppercase my-5 hidden md:block">description</p>
				<p class="text-sm md:text-2xl hidden md:block">{{ coin_data.description }}</p>

				<p class="text-3xl font-mono uppercase my-5">website</p>
				<p class="text-sm md:text-2xl">
					<a v-bind:href="coin_data.homepage"> {{ coin_data.homepage }} </a>
				</p>
			</div>
			<div class="m-auto" @input="genLink()">
				<div class="form-control w-full max-w-4xl">
					<label class="label">
						<span class="label-text text-2xl">TOKEN</span>
						<span class="label-text-alt text-xl">/ per day</span>
					</label>
					<input v-model="cost" type="text" placeholder="Type here" class="input input-lg input-bordered w-full max-w-xs" />
				</div>

				<div class="form-control w-full py-5" v-if="link">
					<a
						v-bind:href="link"
						class="w-full px-7 py-4 bg-gray-900 text-white border-2 border-gray-900 hover:bg-white hover:text-gray-900 transition-all ease-out duration-150 rounded-xl flex items-center justify-center text-lg"
					>
						SUBSCRIBE
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { checkAddress, encodeSubscription } from 'dakopay-sdk';
	import axios from 'axios';

	export default {
		props: ['network', 'account', 'token', 'coinid'],
		data() {
			return { cost: 0, link: null, coin_data: '' };
		},
		methods: {
			async genLink() {
				var mec = await checkAddress(this.account);
				var tok = await checkAddress(this.token);
				var subhash = await encodeSubscription(this.network, mec, tok, this.cost, 0);
				this.link = subhash.link;
			},
		},
		async mounted() {
			var data = await axios.get('https://api.coingecko.com/api/v3/coins/' + this.coinid);
			var coin_data = data.data;

			this.coin_data = {
				name: coin_data.name,
				symbol: coin_data.symbol,
				price: parseFloat(coin_data.market_data.current_price.usd).toFixed(8),
				image: coin_data.image.large,
				description: coin_data.description.en.substring(0, 60),
				homepage: coin_data.links.homepage[0],
				coingecko: coin_data.links.coingecko,
				contract: coin_data.contract_address,
			};
		},
	};
</script>
