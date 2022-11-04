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
		component: () => import(/* webpackChunkName: "about" */ '../views/Check.vue'),
		props: true,
	},
	{
		path: '/join/:hash',
		name: 'join',
		component: () => import(/* webpackChunkName: "about" */ '../views/Join.vue'),
		props: true,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
