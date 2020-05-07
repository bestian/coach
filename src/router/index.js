import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/coachmap',
    name: 'Coachmap',
    component: () => import('../views/CoachMap.vue')
  },
  {
    path: '/dojomap',
    name: 'Dojomap',
    component: () => import('../views/DojoMap.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
