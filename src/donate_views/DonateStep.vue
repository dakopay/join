<template>
	<section class="px-2 pt-32 bg-white md:px-0">
		<div class="flex flex-wrap mx-auto container py-40 px-10">
			<div class="m-auto my-10">
				<h1 class="relative mb-4 text-2xl md:text-5xl font-black text-gray-700 uppercase">Donating To</h1>
				<p class="w-full mx-auto text-base text-left text-gray-500">{{ validAccount }}</p>
			</div>
			<div class="m-auto my-10">
				<div class="w-full flex sm:flex-row flex-col sm:justify-center lg:justify-start font-medium sm:space-x-5 space-y-4 sm:space-y-0 uppercase">
					<router-link
						:to="{ name: 'network', params: { validAccount } }"
						class="px-7 py-4 bg-gray-900 text-white border-2 border-gray-900 hover:bg-white hover:text-gray-900 transition-all ease-out duration-150 rounded-xl flex items-center justify-center text-lg"
					>
						Looks Correct </router-link
					><a
						href="https://repa.gg"
						class="px-7 flex items-center py-4 bg-gray-100 border-2 border-gray-100 hover:border-gray-900 justify-center hover:bg-white transition-all ease-out duration-150 text-gray-900 rounded-xl text-lg"
						><span>NOPE !</span></a
					>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { checkAddress } from 'repa-sdk';

	export default {
		props: ['account'],
		data() {
			return {
				validAccount: '',
			};
		},

		async mounted() {
			this.validAccount = await checkAddress(this.account);
		},
	};
</script>
