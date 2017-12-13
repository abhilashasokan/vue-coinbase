import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import NotFound from '@/components/NotFound'
import CurrentMarket from '@/components/CurrentMarket'


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
      path: '/hello',
      name: 'Hello',
      component: Hello,
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
