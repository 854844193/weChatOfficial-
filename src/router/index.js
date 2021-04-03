import Vue from 'vue'
import Router from 'vue-router'
import Regist from '@/components/Regist'
import Query from '@/components/Query'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Regist',
			component: Regist
		}, {
			path: '/Query',
			name: 'Query',
			component: Query
		},

	],
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
})
