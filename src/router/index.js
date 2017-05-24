import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Finacing from '@/components/Finacing'
import Secure from '@/components/Secure'
import Myself from '@/components/Myself'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Finacing',
      name: 'Finacing',
      component: Finacing
    },
    {
      path: '/Secure',
      name: 'Secure',
      component: Secure
    },
    {
      path: '/Myself',
      name: 'Myself',
      component: Myself,
      child: {

      }
    }
  ]
})
