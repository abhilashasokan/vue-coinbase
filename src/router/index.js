import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import NotFound from '@/components/NotFound'
import CurrentMarket from '@/components/CurrentMarket'
import UserProfile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/notfound'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/notfound',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/profile',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/currentmarket',
      name: 'CurrentMarket',
      component: CurrentMarket
    },
  ]
})
