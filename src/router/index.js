import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import services from '../components/services.vue'
import ContactUsView from '../views/ContactUsView.vue'
import readMore from '../components/readMore.vue'
import readThird from '../components/readThird.vue'
import readAudit from '../components/readAudit.vue'
import readSupport from '../components/readSupport.vue'
import readCloud from '../components/readCloud.vue'
import readCyber from '../components/readCyber.vue'
import readRisk from '../components/readRisk.vue'
import readSox from '../components/readSox.vue'
import readPolicy from '../components/readPolicy.vue'
import career from '../views/career.vue'
import MenuItem from '../components/MenuItem.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contactus',
  name: 'contactus',
  component: () => import('../views/ContactUsView.vue')
  },
  {
   path: '/services',
  name: 'services',
  component: services
  },
  {
   path: '/readMore',
  name: 'readMore',
  component: readMore
  },
  {
   path: '/readThird',
  name: 'readThird',
  component: readThird
  },
  {
   path: '/readAudit',
  name: 'readAudit',
  component: readAudit
  },
  {
   path: '/readSupport',
  name: 'readSupport',
  component: readSupport
  },
  {
   path: '/readCloud',
  name: 'readCloud',
  component: readCloud
  },
  {
   path: '/readCyber',
  name: 'readCyber',
  component: readCyber
  },
  {
   path: '/readRisk',
  name: 'readRisk',
  component: readRisk
  },
  {
   path: '/readSox',
  name: 'readSox',
  component: readSox
  },
  {
   path: '/readPolicy',
  name: 'readPolicy',
  component: readPolicy
  },
  {
   path: '/career',
  name: 'career',
  component: career
  },
  {
   path: '/MenuItem',
  name: '/MenuItem',
  component: MenuItem
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes, scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
