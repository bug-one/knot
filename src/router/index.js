import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'
import Home from '../views/Home.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect:'/home',
    children: [
      {
        path: 'home',
        component:Home
      },
    ]
  },
  {
    path: '/user',
    component: Layout,
    children: [
      {
        path: '',
        component:User
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
