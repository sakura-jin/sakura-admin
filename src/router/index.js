import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import BaseTable from '@/components/BaseTable'
import BaseForm from '@/components/BaseForm'
import DragList from '@/components/DragList'
import BaseChart from '@/components/BaseChart'
import Upload from '@/components/Upload'
import ErrorPage from '@/components/ErrorPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {path:'',name:'Dashboard',component:Dashboard},
        {path:'BaseTable',name:'BaseTable',component:BaseTable},
        {path:'BaseForm',name:'BaseForm',component:BaseForm},
        {path:'DragList',name:'DragList',component:DragList},
        {path:'BaseChart',name:'BaseChart',component:BaseChart},
        {path:'Upload',name:'Upload',component:Upload},
        {path:'ErrorPage',name:'ErrorPage',component:ErrorPage}
      ]
    },
    { path: '*',redirect:'ErrorPage'}
  ]
})
