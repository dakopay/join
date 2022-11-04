<template>
	<section class="min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400" @click="runtoweb()"></section>
</template>

<script>
	export default {
		methods: {
			runtoweb() {
				window.location.href = 'https://repa.gg/#/create';
			},
		},
	};
</script>
