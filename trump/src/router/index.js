import Vue from 'vue'
import VueRouter from 'vue-router'
import SellerPage from '@/views/SellerPage'
import HomePage from '@/views/HomePage'
import CalendarPage from '@/views/CalendarPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sellerpage',
    component: SellerPage
  },
  {
    path: '/homepage',
    component: HomePage
  },
  {
    path: '/calendarpage',
    component: CalendarPage
  }
]

const router = new VueRouter({
  routes
})

export default router
