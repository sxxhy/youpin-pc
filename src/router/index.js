import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/category/:firstId/:secondId',
      name: 'category',
      component: () => import(/* webpackChunkName: "category" */ '../views/goodsList/index.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import(/* webpackChunkName: "detail" */ '../views/detail/index.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import(/* webpackChunkName: "cart" */ '../views/cart/index.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import(/* webpackChunkName: "order" */ '../views/cart/order.vue')
    }
  ]
})
