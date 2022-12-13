import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/History.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home,
  },
  /////////////////
  // History
  {
    path: '/history',
    name: 'history',
    component: History
  },
  //////////////////
  // Techcombank
  {
    path: '/done/techcombank',
    name: 'techcombank',
    component: () => import(/* webpackChunkName: "techcombank" */ '../views/Done/techcombank.vue')
  },
  //////////////////
  // MB
  {
    path: '/done/mb',
    name: 'mb',
    component: () => import(/* webpackChunkName: "mb" */ '../views/Done/mb.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
