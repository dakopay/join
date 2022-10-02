<template>
	<div class="m-auto max-w-6xl p-5">
		<div v-if="chain !== network">
			<section class="bg-black">
				<div class="relative px-16 pt-20 pb-32 mx-auto max-w-7xl xl:px-16">
					<svg class="relative z-10 w-16 mb-12 text-yellow-300 transform opacity-100 fill-current sm:w-20 -rotate-0 rotate rotate-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 46">
						<defs></defs>
						<g fill-rule="nonzero">
							<path
								d="M46.651 2.666c1.892-.812 1.06-1.401-1.337-1.81A4.827 4.827 0 0044.323 0a3.914 3.914 0 00-.614.64C34.376-.395 11.639.36 8.676 1.976 6.99 1.437 1.364 9.542.344 13.552c-.436.1-.436.632-.12 1.487a.84.84 0 00.1.28v-.05a2.8 2.8 0 00.247.668h.06c2.814 5.749 14.356 19.796 15 20.673l-.149-.158c2.418 2.587 3.963 5.547 6.291 8.17 2.626 2.213 3.478 1.437 3.399-.065 2.784-1.171 3.289-3.73 4.775-5.655 5.608-7.904 14.742-14.651 19.498-22.763a2.347 2.347 0 00-.09-.575c1.725-2.429-.296-9.018-2.704-12.898zM38.25 24.093c-4.38 5.863-12.355 11.432-13.693 18.15-.33-.903-.903-1.75-1.684-2.493C15.987 31.616 10.4 22.828 3.088 14.931c3.101-1.997 3.636-6.021 5.469-8.615l-.09.187.199-.41-.06.13.08-.151c.31-1.051.463-2.123.455-3.198.876.312 1.796.553 2.745.719 10.333-.633 20.805-.144 31.129-.417.198 1.71 1.387 3.514 1.982 5.094 0-.057 0-.122-.08-.18 1.11 2.243.803 4.937 2.616 6.92-2.953 1.337-8.342 8.048-9.283 9.083zM7.5 14.505v-.01.01z"
							></path>
							<path
								d="M9.567 12.925c-.022.243.175.468.486.556 0 .065.05.13.08.094l.139-.05h.069c-1.015.233-1.858.754-2.341 1.445.908.243 1.84.436 2.787.578.208.5.484.985.824 1.445v.094-.036c.387.607.763 1.214 1.16 1.814v-.072c.516.816.992 1.64 1.548 2.457.555.817 1.13 1.9 1.736 2.782a.241.241 0 01-.05-.08c1.587 2.169 2.599 4.59 4.444 6.635 3.482 2.002-.536-3.874-1.2-4.777-1.101-1.662-2.232-3.324-3.294-5-.892-1.446-1.845-2.892-2.787-4.337-.149-.354-.298-.65-.446-.925 2.975-.152 5.951-.455 8.927-.513 3.849-.145 7.737 0 11.606 0-.466 1.604-.526 4.025-.992 4.85-.387 3.403-3.968 7.096-2.46 10.37.605-.477 1.029-1.06 1.23-1.692 1.21-4.43 3.918-8.99 3.75-13.535 2.579.03 5.159-.045 7.727-.224 3.65-.853 3.134-2.32-.546-2.349h.218c-2.55.05-5.098.058-7.648.05a27.367 27.367 0 00-3.095-5.181.511.511 0 01-.089-.13c-1.408 1.257.308 3.714 1.597 5.304-4.85 0-9.7 0-14.551.217h.218c-2.113.333-5.168.116-7.53.564.165-.11.255-.265.249-.427a.376.376 0 000-.151c2.48-2.212 7.241-8.166 3.115-6.367l-4.88 6.59zm3.68 3.526a.19.19 0 010 .065.285.285 0 010-.08v.015zM11.5 17.505v-.01z"
							></path>
							<path
								d="M14.499 21.55v-.1a.54.54 0 010 .1zM41.874 10c.462-1.423-.366-2.884-2.197-3.876A.87.87 0 0139.522 6c-1.373.757.287 2.644 1.266 3.49.303.209.671.382 1.086.51zM40.5 9.505v-.01z"
							></path>
						</g>
					</svg>

					<div class="relative z-20">
						<h3 class="text-5xl font-bold leading-tight text-left text-white md:text-6xl lg:text-7xl xl:text-7xl xl:leading-tight">WRONG NETWORK</h3>
						<div class="flex flex-col mt-14 sm:flex-row sm:items-center">
							<p class="text-3xl font-normal text-left text-yellow-300">Switch To {{ chainname[network] }}</p>
							<div class="flex mt-5 space-x-1 sm:mt-1 sm:ml-3">
								<div class="w-10 h-2 bg-yellow-300 rounded-full opacity-100"></div>
								<div class="w-8 h-2 bg-yellow-300 rounded-full opacity-75"></div>
								<div class="w-4 h-2 bg-yellow-300 rounded-full opacity-50"></div>
								<div class="w-3 h-2 bg-yellow-300 rounded-full opacity-25"></div>
								<div class="w-2 h-2 bg-yellow-300 rounded-full opacity-10"></div>
								<div class="w-2 h-2 bg-yellow-300 rounded-full opacity-5"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>

		<div v-if="txninprocess" class="py-40 uppercase">
			<h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
				<span class="">WAITING FOR </span>
				<span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline" data-primary="green-400">Transaction Confirmation</span>
				<span class=""> 🚀</span>
			</h1>
		</div>

		<div class="py-20" v-if="chain == network && !txninprocess">
			<div class="mb-10">
				<h3 class="font-semibold text-2xl text-gray-800">YOU ARE</h3>
				<h3 class="font-bold text-xl text-gray-400 py-2">{{ account }}</h3>
			</div>

			<div class="flex items-center justify-center space-x-2 my-5">
				<span class="h-px w-16 bg-gray-200"></span>
				<span class="h-px w-16 bg-gray-200"></span>
			</div>

			<div class="mb-10">
				<h3 class="font-semibold text-2xl text-gray-800 uppercase">subscribing TO</h3>
				<h3 class="font-bold text-xl text-gray-400 py-2">{{ obj.boss }}</h3>
			</div>

			<div class="flex items-center justify-center space-x-2 my-5">
				<span class="h-px w-16 bg-gray-200"></span>
				<span class="h-px w-16 bg-gray-200"></span>
			</div>

			<div class="mb-10">
				<h3 class="font-semibold text-2xl text-gray-800">USING TOKEN ({{ tokendata.symbol }})</h3>
				<h3 class="font-bold text-xl text-gray-400 py-2">{{ obj.token }}</h3>
			</div>

			<div class="flex items-center justify-center space-x-2 my-5">
				<span class="h-px w-16 bg-gray-200"></span>
				<span class="h-px w-16 bg-gray-200"></span>
			</div>
			<div class="mb-10">
				<h3 class="font-semibold text-2xl text-gray-800">FOR</h3>
				<h3 class="font-bold text-xl text-gray-400 py-2">{{ obj.cost }} {{ tokendata.symbol }} / DAY</h3>
			</div>

			<div class="flex items-center justify-center space-x-2 my-5">
				<span class="h-px w-16 bg-gray-200"></span>
				<span class="h-px w-16 bg-gray-200"></span>
			</div>

			<div class="mb-10" v-if="obj.initdays > 0">
				<h3 class="font-semibold text-2xl text-gray-800">SETUP CHARGE</h3>
				<h3 class="font-bold text-xl text-gray-400 py-2">{{ obj.initdays * obj.cost }} {{ tokendata.symbol }}</h3>
			</div>

			<div class="uppercase max-w-2xl cursor-pointer" v-if="fullLoaded">
				<h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight" v-if="alreadyJoin">
					<span class="">YOU 🐼 ARE </span>
					<span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline" data-primary="green-400">Subscribed</span>
				</h1>

				<a
					v-if="!alreadyJoin && format_allowance < obj.cost * 100"
					@click="approve"
					class="px-7 py-4 bg-gray-900 text-white border-2 border-gray-900 hover:bg-white hover:text-gray-900 transition-all ease-out duration-150 rounded-xl flex items-center justify-center text-lg"
					>Approve {{ tokendata.symbol }}</a
				>

				<a
					v-if="!alreadyJoin && format_allowance > obj.cost * 100"
					@click="callC"
					class="px-7 py-4 bg-gray-900 text-white border-2 border-gray-900 hover:bg-white hover:text-gray-900 transition-all ease-out duration-150 rounded-xl flex items-center justify-center text-lg"
					>Subscribe</a
				>
			</div>

			<div v-if="!fullLoaded">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
					/>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
	const TOKENABI = ['function approve(address spender, uint256 amount) external returns (bool)', 'function decimals() external view returns (uint8)'];

	import { ethers } from 'ethers';

	import detectEthereumProvider from '@metamask/detect-provider';

	import { setChain, ABI, decodeSubscription, tokenDetails, getUserTokenData, hashing, subscriptions } from '@moneymafia/repa-sdk';

	export default {
		data() {
			return {
				fullLoaded: false,
				obj: '',
				connected: false,
				chain: 1,
				network: 0,
				account: 'Account',
				allowance: '',
				balance: '',
				format_balance: '',
				format_allowance: '',
				format_cost: '',
				tokendata: [],
				txninprocess: false,
				alreadyJoin: false,
				chainname: {
					5: 'Groli',
					56: 'BSC',
					137: 'POLYGON',
				},
			};
		},
		methods: {
			async callC() {
				try {
					await window.ethereum.enable();

					const newProvider = new ethers.providers.Web3Provider(window.ethereum);

					const signer = newProvider.getSigner();

					const controllerActionContract = new ethers.Contract('0x7a58b40A593f849560Fd7198b2910D6a3B250e6D', ABI, signer);

					const contr_token = new ethers.Contract(this.obj.token, TOKENABI, signer);

					const tokenDecimals = await contr_token.decimals();

					const amount_x = ethers.utils.parseUnits(this.obj.cost.toString(), tokenDecimals);

					const txn = await controllerActionContract.subscriptionCreate(this.obj.token, this.obj.boss, amount_x, this.obj.initdays || 0, { gasLimit: 300000 });

					this.txninprocess = true;

					await txn.wait();

					location.reload();

					this.txninprocess = false;
				} catch (err) {
					console.log(err);
				}
			},
			async approve() {
				try {
					await window.ethereum.enable();

					const newProvider = new ethers.providers.Web3Provider(window.ethereum);

					const signer = newProvider.getSigner();

					const contr_token = new ethers.Contract(this.obj.token, TOKENABI, signer);

					const tokenDecimals = await contr_token.decimals();

					const amount_x = ethers.utils.parseUnits((this.obj.cost * 365 * 10).toString(), tokenDecimals);

					const txn = await contr_token.approve('0x7a58b40A593f849560Fd7198b2910D6a3B250e6D', amount_x);

					this.txninprocess = true;

					await txn.wait();

					location.reload();

					this.txninprocess = false;
				} catch (err) {
					console.log(err);
				}
			},
		},
		async mounted() {
			const provider = await detectEthereumProvider();

			const urlParams = new URLSearchParams(window.location.search);

			this.obj = await decodeSubscription(urlParams.get('hash') || null);

			this.network = parseInt(this.obj.network);

			if (!provider) {
				alert('No Wallet Found !!');
			}

			if (!urlParams.get('hash')) {
				alert('Invalid Link !!');
			}

			setChain(this.network);

			if (provider) {
				await provider.enable();

				const accounts = await provider.request({
					method: 'eth_requestAccounts',
				});

				const chainId = await provider.request({
					method: 'eth_chainId',
				});

				this.account = accounts[0];

				this.chain = parseInt(chainId);

				this.connected = true;

				this.tokendata = await tokenDetails(this.obj.token);

				const data = await getUserTokenData(this.obj.token, this.account);

				this.allowance = data.allowance;

				this.balance = data.balance;

				this.format_balance = await ethers.utils.formatEther(this.balance, this.tokendata.decimal);

				this.format_balance = parseInt(this.format_balance);

				this.format_allowance = await ethers.utils.formatEther(this.allowance, this.tokendata.decimal);

				this.format_allowance = parseInt(this.format_allowance);

				console.log('Balance : ' + this.format_balance);

				console.log('Allowance : ' + this.format_allowance);

				this.format_cost = await ethers.utils.parseEther(this.obj.cost.toString(), this.tokendata.decimal);

				const subhash = await hashing(this.obj.token, this.account, this.obj.boss, this.format_cost.toString());

				const subdata = await subscriptions(subhash.sub);

				console.log('Sub');

				console.log(subhash);

				console.log(subdata);

				this.alreadyJoin = subdata.active;

				this.fullLoaded = true;
			} else {
				this.connected = false;
			}
		},
	};
</script>
