import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Layout from '@/layout/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',

    children: [{
      name: 'Home',
      path: 'home',
      component: Home,
      meta: {
        icon: '',
        name: '首页'
      }
    }]
  }

]
const files = require.context('./module', false, /\.js$/)
files.keys().forEach((key) => {
  routes.push(files(key).default)
})
console.log(routes)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
