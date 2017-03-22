import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import font from 'common/js/font'
import index from 'components/index'
import goods from 'components/goods'
import comment from 'components/comment'
import shop from 'components/shop'


Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:"/goods",
      children:[
      	{
      		path:"/goods",
      		name:'goods',
      		component:goods
      	},
      	{
      		path:"/comment",
      		name:'comment',
      		component:comment
      	},
      	{
      		path:"/shop",
      		name:'shop',
      		component:shop
      	},
      ]
    }
  ]
})
