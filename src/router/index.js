import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'index',
		component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue'),
	},
	{
		path: '/check/:hash',
		name: 'check',
		component: () => import(/* webpackChunkName: "about" */ '../sub_views/Check.vue'),
		props: true,
	},
	{
		path: '/join/:hash',
		name: 'join',
		component: () => import(/* webpackChunkName: "about" */ '../sub_views/Join.vue'),
		props: true,
	},
	{
		path: '/donate/:account',
		name: 'donate',
		component: () => import('../donate_views/DonateStep.vue'),
		props: true,
	},
	{
		path: '/network/:account',
		name: 'network',
		component: () => import('../donate_views/NetworkStep.vue'),
		props: true,
	},
	{
		path: '/token/:network/:account',
		name: 'token',
		component: () => import('../donate_views/TokenStep.vue'),
		props: true,
	},
	{
		path: '/sub/:network/:account/:token/:coinid',
		name: 'sub',
		component: () => import('../donate_views/SubStep.vue'),
		props: true,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
