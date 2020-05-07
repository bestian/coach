import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Coachmap from '../views/CoachMap.vue'
import Dojomap from '../views/DojoMap.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '找教練',
    component: Home
  },
  {
    path: '/about',
    name: '關於',
    component: () => import('../views/About.vue')
  },
  {
    path: '/coachmap',
    name: '教練地圖',
    component: Coachmap
  },
  {
    path: '/dojomap',
    name: '道館地圖',
    component: Dojomap
  }
]

const router = new VueRouter({
  routes
})

export default router
