<template>
	<section class="bg-white md:py-24 mx-auto max-w-6xl px-10 py-16">
		<p class="mb-2 text-base font-bold text-black uppercase" v-if="mobiledevice">Mobile Device Detected</p>
		<h1 class="text-4xl font-extrabold tracking-tight text-gray-900"><span class="block xl:inline">CHOOSE</span> <span class="block text-pink-500 xl:inline">WALLET</span></h1>
		<h1 v-if="!web3connected" class="text-4xl font-extrabold tracking-tight text-gray-900">INSTALL METAMASK / WEB3 WALLET</h1>
		<div class="py-10"></div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-4 text-3xl">
			<div class="mt-5" v-if="!mobiledevice">
				<a :href="desktop_url" class="px-5 py-2 font-bold leading-tight text-black bg-white border-4 border-gray-900 rounded-lg hover:bg-blue-400 hover:text-white">WEB3 WALLET</a>
			</div>
			<div class="mt-5">
				<a :href="metamask_url" class="px-5 py-2 font-bold leading-tight text-black bg-white border-4 border-gray-900 rounded-lg hover:bg-blue-400 hover:text-white">METAMASK</a>
			</div>
			<div class="mt-5">
				<a :href="trustwallet_url" class="px-5 py-2 font-bold leading-tight text-black bg-white border-4 border-gray-900 rounded-lg hover:bg-blue-400 hover:text-white">TRUSTWALLET</a>
			</div>
		</div>
	</section>
</template>

<script>
	import { isMobile } from 'mobile-device-detect';

	export default {
		props: ['hash'],

		data() {
			return {
				web3connected: true,
				mobiledevice: false,
				desktop_url: '',
				trustwallet_url: '',
				metamask_url: '',
			};
		},

		async mounted() {
			this.mobiledevice = isMobile;

			this.desktop_url = `https://join.dakopay.com/#/join/${this.hash}`;

			this.trustwallet_url = `https://link.trustwallet.com/open_url?url=https://join.dakopay.com/#/join/${this.hash}`;

			this.metamask_url = `https://metamask.app.link/dapp/join.dakopay.com/#/join/${this.hash}`;

			if (window.ethereum) {
				window.location.href = this.desktop_url;
			} else {
				if (!isMobile) {
					this.web3connected = false;
				}
			}
		},
	};
</script>
