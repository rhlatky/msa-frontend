import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () =>  import('../../components/HelloWorld.vue')
	},
	{
		path: '/value',
		name: 'value',
		component: () =>  import('../../components/Value.vue')
	}
]

export default createRouter({
	history: createWebHistory(),
	routes
})
