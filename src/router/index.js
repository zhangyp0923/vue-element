import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout'

/* login */
const Login = _import('login/index')

const Register = _import('login/demo')

/* dashboard */
const dashboard = _import('dashboard/index')

/* error page */
const Err404 = _import('404')

/* demo page */
const Form = _import('page/form')
const Table = _import('table/index')

/* 负荷聚合商注册 */
const ShopRegister = _import('register/shopRegister')
/* 普通用户注册 */
const UserRegister = _import('register/userRegister')

/* 自身负荷特性分析 */
const LoadCharacteristics = _import('userLoadAnalysis/loadCharacteristics')
/* 需求响应潜力评估 */
const PotentialAssessment = _import('userLoadAnalysis/potentialAssessment')

/* 需求响应项目选择 */
const ProjectSelection = _import('projectSelection/projectSelection')
/* 需求项目合同申请 */
const AplyContract = _import('projectSelection/aplyContract')

/* 用户基本信息 */
const UserInfo = _import('information/userInfo')
/* 日用电负荷 */
const DailyElec = _import('information/dailyElec')
/* 历史响应情况 */
const OldResponseStatus = _import('information/oldResponseStatus')
/* 历史负荷信息 */
const OldLoadInfo = _import('information/oldLoadInfo')
/* 历史需求响应结算信息 */
const OldResponseInfo = _import('information/oldResponseInfo')
Vue.use(Router)

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will not redirct in the levelbar
 * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
 * meta : `{ role: ['admin'] }`  will control the page role
 **/
export const constantRouterMap = [
  { path: '/login', component: Login, hidden: true },
  { path: '/404', component: Err404, hidden: true },
  { path: '/register', component: Register, hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Home',
    hidden: true,
    children: [{path: 'dashboard', component: dashboard}]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: 'Example',
    icon: 'zujian',
    children: [
      {path: 'index', component: Form, name: 'Form', icon: 'zonghe'}
    ]
  },
  {
    path: '/register',
    component: Layout,
    redirect: 'noredirect',
    name: '用户注册',
    icon: 'zujian',
    children: [
      {path: 'shopRegister', component: ShopRegister, name: '负荷聚合商注册', icon: 'zonghe'},
      {path: 'userRegister', component: UserRegister, name: '普通用户注册', icon: 'zonghe'}
    ]
  },
  {
    path: '/userLoadAnalysis',
    component: Layout,
    redirect: 'noredirect',
    name: '用户负荷分析',
    icon: 'zujian',
    children: [
      {path: 'loadCharacteristics', component: LoadCharacteristics, name: '自身负荷特性分析', icon: 'zonghe'},
      {path: 'potentialAssessment', component: PotentialAssessment, name: '需求响应潜力评估', icon: 'zonghe'}
    ]
  },
  {
    path: '/projectSelection',
    component: Layout,
    redirect: 'noredirect',
    name: '需求响应项目选择',
    icon: 'zujian',
    children: [
      {path: 'projectSelection', component: ProjectSelection, name: '需求响应项目选择', icon: 'zonghe'},
      {path: 'aplyContract', component: AplyContract, name: '需求项目合同申请', icon: 'zonghe'}
    ]
  },
  {
    path: '/information',
    component: Layout,
    redirect: 'noredirect',
    name: '信息查询',
    icon: 'zujian',
    children: [
      {path: 'userInfo', component: UserInfo, name: '用户基本信息', icon: 'zonghe'},
      {path: 'dailyElec', component: DailyElec, name: '日用电负荷', icon: 'zonghe'},
      {path: 'oldResponseStatus', component: OldResponseStatus, name: '历史响应情况', icon: 'zonghe'},
      {path: 'oldLoadInfo', component: OldLoadInfo, name: '历史负荷信息', icon: 'zonghe'},
      {path: 'oldResponseInfo', component: OldResponseInfo, name: '历史需求响应结算信息', icon: 'zonghe'}
    ]
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/table/index',
    icon: 'tubiao',
    noDropdown: true,
    children: [{path: 'index', component: Table, name: 'Table', meta: {role: ['admin']}}]
  },
  // {
  //   path: '/register',
  //   component: Layout,
  //   redirect: '/register/ShopRegister',
  //   icon: 'tubiao',
  //   noDropdown: true,
  //   children: [{path: 'ShopRegister', component: Table, name: 'Table', meta: {role: ['admin']}}]
  // },
  {path: '*', redirect: '/404', hidden: true}
]
