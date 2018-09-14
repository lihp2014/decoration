import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import MsgPage from '@/pages/MsgPage'
import MoneyPage from '@/pages/MoneyPage'
import MyPage from '@/pages/MyPage'
import LoanPage from '@/pages/LoanPage'
import ResultPage from '@/pages/ResultPage'
import PartnerPage from '@/pages/PartnerPage'
import IntegralPage from '@/pages/IntegralPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
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
    {
      path: '/result',
      name: '贷款申请',
      component: ResultPage
    }, 
    {
      path: '/partner',
      name: '合伙人市场',
      component: PartnerPage
    }, 
    {
      path: '/integral',
      name: '合伙人市场',
      component: IntegralPage
    }, 
    
  ]
})
