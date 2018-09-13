import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/pages/HomePage'
import MsgPage from '@/pages/MsgPage'
import MoneyPage from '@/pages/MoneyPage'
import MyPage from '@/pages/MyPage'
import LoanPage from '@/pages/LoanPage'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/msg',
      name: 'MsgPage',
      component: MsgPage
    },
    {
      path: '/money',
      name: 'MoneyPage',
      component: MoneyPage
    },
    {
      path: '/my',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/loan',
      name: '贷款申请',
      component: LoanPage
    },    
  ]
})
