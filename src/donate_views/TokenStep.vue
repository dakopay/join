<template>
	<section class="px-2 pt-32 bg-white md:px-0">
		<div class="m-auto my-10 max-w-2xl">
			<h1 class="relative mb-4 text-2xl md:text-5xl font-black text-gray-700 uppercase">SELECT TOKEN</h1>
			<p class="w-full mx-auto text-base text-left text-gray-500">Select the token you want to pay from !</p>
		</div>

		<div class="m-auto my-10 max-w-4xl">
			<form class="mt-10 m-auto" @change="searchToken()" @input="searchToken()">
				<div class="relative">
					<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
						</svg>
					</div>
					<input
						v-model="search_text"
						type="search"
						class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search Tokens"
						required
					/>
					<button
						type="submit"
						class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Search
					</button>
				</div>
			</form>

			<div class="py-10 flex justify-center text-yellow-300">
				<svg width="204" height="14" xmlns="http://www.w3.org/2000/svg">
					<g fill="currentColor" fill-rule="evenodd">
						<path
							d="M.835 7.23c-.264-.864-.033-1.753.708-2.42.91-.758 2.285-.742 3.1.09l.112.124a9.767 9.767 0 006.37 3.34c2.362.24 4.745-.389 6.631-1.785l.254-.195c.186-.132.367-.283.548-.442l.557-.494c.096-.083.194-.166.295-.247l.58-.527c.702-.632 1.495-1.31 2.412-1.835 2.201-1.24 4.914-1.629 7.719-1.101 2.083.433 4.232 1.286 6.575 2.773 1.087.674 1.395 2.09.702 3.12-.674 1.088-2.09 1.395-3.12.703-1.932-1.172-3.533-1.878-5.068-2.164-1.743-.348-3.385-.161-4.603.589-.565.314-1.09.758-1.63 1.242l-.546.493-1.635 1.444c-2.854 2.194-6.555 3.263-10.183 2.925-3.57-.356-7.01-2.137-9.36-4.88a1.922 1.922 0 01-.418-.753zM93.541 4.686c.38.828.24 1.815-.424 2.521-.843.95-2.348.97-3.297.127-1.86-1.76-4.35-2.698-6.806-2.702a9.87 9.87 0 00-6.533 2.539l-.238.223a6.299 6.299 0 00-.628.648l-.418.49c-.073.085-.148.171-.226.258l-.82.908c-.566.62-1.183 1.257-1.933 1.822-2.056 1.51-4.796 2.221-7.703 1.977-2.204-.207-4.415-.853-7.01-2.136-1.185-.582-1.665-1.946-1.083-3.13.502-1.12 1.829-1.623 2.93-1.135l.143.069c2.069 1.004 3.807 1.542 5.364 1.695 1.806.14 3.452-.237 4.635-1.102.66-.517 1.326-1.223 1.973-1.988l.732-.822c.253-.281.512-.565.776-.834C75.59 1.552 79.225.063 82.92.003 86.633 0 90.273 1.405 92.95 3.986c.3.16.503.412.591.7z"
						></path>
						<g>
							<path
								d="M112.835 7.23c-.264-.864-.033-1.753.708-2.42.91-.758 2.285-.742 3.1.09l.112.124a9.767 9.767 0 006.37 3.34c2.362.24 4.745-.389 6.631-1.785l.254-.195c.186-.132.367-.283.548-.442l.557-.494c.096-.083.194-.166.295-.247l.58-.527c.702-.632 1.495-1.31 2.412-1.835 2.201-1.24 4.914-1.629 7.719-1.101 2.083.433 4.232 1.286 6.575 2.773 1.087.674 1.395 2.09.702 3.12-.674 1.088-2.09 1.395-3.12.703-1.932-1.172-3.533-1.878-5.068-2.164-1.743-.348-3.385-.161-4.603.589-.565.314-1.09.758-1.63 1.242l-.546.493-1.635 1.444c-2.854 2.194-6.555 3.263-10.183 2.925-3.57-.356-7.01-2.137-9.36-4.88a1.922 1.922 0 01-.418-.753zM203.541 4.686c.38.828.24 1.815-.424 2.521-.843.95-2.348.97-3.297.127-1.86-1.76-4.35-2.698-6.806-2.702a9.87 9.87 0 00-6.533 2.539l-.238.223a6.299 6.299 0 00-.628.648l-.418.49c-.073.085-.148.171-.226.258l-.82.908c-.566.62-1.183 1.257-1.933 1.822-2.056 1.51-4.796 2.221-7.703 1.977-2.204-.207-4.415-.853-7.01-2.136-1.185-.582-1.665-1.946-1.083-3.13.502-1.12 1.829-1.623 2.93-1.135l.143.069c2.069 1.004 3.807 1.542 5.364 1.695 1.806.14 3.452-.237 4.635-1.102.66-.517 1.326-1.223 1.973-1.988l.732-.822c.253-.281.512-.565.776-.834 2.615-2.562 6.25-4.051 9.946-4.111 3.712-.002 7.352 1.402 10.029 3.983.3.16.503.412.591.7z"
							></path>
						</g>
					</g>
				</svg>
			</div>
			<router-link
				:to="{ name: 'sub', params: { network: network, account: account, token: item.address, coinid: item.id } }"
				class="m-2 btn btn-outline btn-secondary"
				v-for="item in tokensFilter"
				:key="item.address"
				>{{ item.symbol }}</router-link
			>
		</div>
	</section>
</template>
<script>
	import axios from 'axios';

	export default {
		props: ['account', 'network'],
		data() {
			return { indx: null, tokens: [], chainName: { 137: 'polygon-pos', 56: 'binance-smart-chain' }, tokensFilter: [], search_text: null };
		},
		methods: {
			searchToken() {
				this.tokensFilter = this.tokens.filter((item) => {
					return item.symbol.toLowerCase().includes(this.search_text.toLowerCase());
				});
			},
		},
		async mounted() {
			try {
				var data = await axios.get('https://api.coingecko.com/api/v3/coins/list?include_platform=true');

				var loopdata = data.data;

				loopdata.forEach((element) => {
					if (element.platforms) {
						if (element.platforms[this.chainName[this.network]]) {
							this.tokens.push({ id: element.id, symbol: element.symbol, address: element.platforms[this.chainName[this.network]] });
						}
					}
				});
			} catch (error) {
				// reload page in 10 seconds
				setTimeout(() => {
					location.reload();
				}, 10000);
			}
		},
	};
</script>
