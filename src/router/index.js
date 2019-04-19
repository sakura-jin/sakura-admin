import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import BaseTable from '@/components/BaseTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {path:'',name:'Home',component:Dashboard},
        {path:'BaseTable',name:'BaseTable',component:BaseTable}
      ]
    }
  ]
})
