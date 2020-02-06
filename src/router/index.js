import Vue from 'vue'
import Router from 'vue-router'
import Peopleinfo from '@/components/peopleinfo'
import Peopledetail from '@/components/peopledetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/peopleinfo',
      name: 'Peopleinfo',
      component: Peopleinfo
    },
    {
      path: '/peopledetail/:id',
      name: 'Peopledetail',
      component: Peopledetail
    }
  ]
})
