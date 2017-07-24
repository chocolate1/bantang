import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import find from '@/views/find'
import message from '@/views/message'
import my from '@/views/my'
import see from '@/views/see'
import makeup from '@/views/makeup'
import realsearch from '@/views/realsearch'
import watching from '@/views/watching'
import lunbo from '@/components/lunbo'
import search from '@/components/search'
import phone from '@/components/phone'
import findlunbo from '@/components/findlunbo'
import barBottom from '@/components/barBottom'
import findscroll from '@/components/findscroll'
import findmenu from '@/components/findmenu'
import findhot from '@/components/findhot'
import headnav from '@/components/headnav'
import makeupcomment from '@/components/makeupcomment'
import messagescroll from '@/components/messagescroll'
import myhead from '@/components/myhead'
import mymenu from '@/components/mymenu'
import leftwatching from '@/components/leftwatching'
import watchmakeup from'@/components/watchmakeup'
import loading from '@/views/loading'
import article from '@/views/article'
import pre_see from '@/views/pre_see'
import asuccess from '@/views/asuccess'
import seesuccess from '@/views/seesuccess'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/pre_see',
      name: 'pre_see',
      component: pre_see
    },
    {
      path: '/watching/see',
      name: 'see',
      component: see
    },
    {
      path: '/home/makeup',
      name: 'makeup',
      component: makeup
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading
    },
    {
      path: '/realsearch',
      name: 'realsearch',
      component: realsearch
    },
    {
      path: '/watching',
      name: 'watching',
      component: watching
    },
    {
      path: '/watching/watchmakeup',
      name: 'watchmakeup',
      component: watchmakeup
    },
    {
      path: '/watching/phone',
      name: 'phone',
      component: phone
    },
    {
      path: '/asuccess',
      name: 'asuccess',
      component: asuccess
    },
    {
      path:'/seesuccess',
      name:seesuccess,
      component:seesuccess
    }
  ]
})
