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
import MoneyDetail from '@/pages/MoneyDetail'
import VIPPage from '@/pages/VIPPage'
import ExamplePage from '@/pages/ExamplePage'
import AboutPage from '@/pages/AboutPage'
import NewsPage from '@/pages/NewsPage'
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
      name: '结果页',
      component: ResultPage
    }, 
    {
      path: '/partner',
      name: '合伙人市场',
      component: PartnerPage
    }, 
    {
      path: '/integral',
      name: '积分',
      component: IntegralPage
    }, 
    {
      path: '/moneyDetail',
      name: '提现明细',
      component: MoneyDetail
    },
    {
      path: '/vip',
      name: 'vip推广',
      component: VIPPage
    },
    {
      path: '/example',
      name: '合作案例',
      component: ExamplePage
    },
    {
      path: '/about',
      name: '关于我们',
      component: AboutPage
    },
    {
      path: '/news',
      name: '新闻动态',
      component: NewsPage
    },
  ]
})
