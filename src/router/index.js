import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import More from '../views/More.vue'
import Soup from '../views/Soup.vue'
import Steak from '../views/Steak.vue'
import Tofu from '../views/Tofu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/more',
    name: 'More',
    component: More
  },
  {
    path:'/soup',
    name: 'Soup',
    component: Soup
  },
  {
    path:'/steak',
    name: 'Steak',
    component: Steak
  },
  {
    path:'/tofu',
    name: 'Tofu',
    component: Tofu
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
