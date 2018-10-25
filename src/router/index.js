import Vue from 'vue'
import Router from 'vue-router'
import admin from '../admin'
import pafe1 from '../components/page/pafe1'
import pafe2 from '../components/page/pafe2'
import tou1 from '../components/page/tou1'
import tou2 from '../components/page/tou2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'admin',
      component: admin,
      children:[
      	{
      		path:'pafe1',
      		name:'pafe1',
      		component:pafe1,
      		alias:'我是pafe1页面'
      	},
      	{
      		path:'pafe2',
      		name:'pafe2',
      		component:pafe2,
      		alias:'我是pafe2页面',
      		children:[
      			{
      				path:'tou1',
      				name:'tou1',
      				component:tou1,
      				alias:'我是大头'
      			},
      			{
      				path:'tou2',
      				name:'tou2',
      				component:tou2,
      				alias:'我是小头'
      			}
      		]
      	}
      ]
    }
  ]
})
