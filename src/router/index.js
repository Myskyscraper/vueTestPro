import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Test1 from '@/components/Test1.vue'

import Test2 from '@/components/Test2.vue'

import Test3 from '@/components/Test3.vue'

import Test21 from '@/components/Test21.vue'



Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Test1',
			component: Test1
		}, {
			path: '/user/02',
			name: "Test2",
			component: Test2
		}, {
			path: '/user/03',
			name: "Test3",
			component: Test3
		}


	]
})