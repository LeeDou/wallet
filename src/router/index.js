import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Finacing from '@/components/Finacing'
import Secure from '@/components/Secure'
import Myself from '@/components/Myself'
import Bill from '@/components/template/Bill'
import Movie from '@/components/template/Movie'
import Payphone from '@/components/template/Payphone'
import put from '@/components/template/put'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Payphone',
      component: Payphone,
    },
    {
      path: '/Movie',
      component: Movie,
    },
    {
      path: '/Bill',
      name: 'Bill',
      component: Bill,
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
    },
    {
      path: '/put',
      name: 'put',
      component: put
    }
  ]
})
