import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Layout from '@/layout/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirecrt: 'home',
    children: [{
      name: 'Home',
      path: 'home',
      component: Home
    }]
  }

]
const files = require.context('./module', false, /\.js$/)
files.keys().forEach((key) => {
  routes[0].children.concat(files(key).default)
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
