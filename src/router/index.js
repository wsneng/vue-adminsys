import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/Layout/index'
const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/About.vue')
  // }
  {
    path:'/',
    redirect:'login',
    meta:{
      name:"主页"
    }
  },
  {
    path:'/login',
    name:'login',
    meta:{
      name:"登录"
    },
    component:()=> import('../views/login/index')
  },
  {
    path:'/console',   // 不区分大写
    name:'Console',
    props: true,
    redirect: 'index',
    hidden: true,
    meta:{
      name:"控制台",
      icon:"Console"
    },
    component:Layout,
    children: [
      {
        hidden: true,
        path: '/index',
        name: 'Index',
        meta:{
          name:"首页",
          icon:"Home"
        },
        component:()=>import('../views/Console/index')
      }
    ]
  },
  /**
   * 信息管理
   */
  {
    path:'/info',   // 不区分大写
    name:'Info',
    props: true,
    hidden: true,
    meta:{
      name:"信息管理",
      icon:"InfoManage"
    },
    component:Layout,
    children: [
      {
        hidden: true,
        path: '/infoindex',
        name: 'InfoIndex',
        meta:{
          name:"信息列表",
          icon: "InfoList"
        },
        component:()=>import('../views/Info/index')
      },
      {
        hidden: true,
        path: '/infoCategory',
        name: 'InfoCategory',
        meta:{
          name: "信息分类",
          icon: "InfoCategory"
        },
        component:()=>import('../views/Info/Category')
      }
    ]
  },
  /**
   * 用户管理
   */
  {
    path:'/user',   // 不区分大写
    name:'User',
    props: true,
    hidden: true,
    meta:{
      name:"用户管理",
      icon:"UserManage"
    },
    component:Layout,
    children: [
      {
        hidden: true,
        path: '/userindex',
        name: 'UserIndex',
        meta:{
          name:"用户列表",
          icon:"UserIndex"
        },
        component:()=>import('../views/User/index')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
