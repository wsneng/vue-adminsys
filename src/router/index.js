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
      // icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\" data-v-394d1fd8=\"\"><path fill=\"currentColor\" d=\"M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z\"></path></svg>"
    },
    component:Layout,
    children: [
      {
        hidden: true,
        path: '/index',
        name: 'Index',
        meta:{
          name:"首页",
          icon:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\" data-v-394d1fd8=\"\"><path fill=\"currentColor\" d=\"M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z\"></path></svg>"
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
      icon:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\" data-v-394d1fd8=\"\"><path fill=\"currentColor\" d=\"M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z\"></path></svg>"
    },
    component:Layout,
    children: [
      {
        hidden: true,
        path: '/infoindex',
        name: 'InfoIndex',
        meta:{
          name:"信息列表",
          icon:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\" data-v-394d1fd8=\"\"><path fill=\"currentColor\" d=\"M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z\"></path></svg>"
        },
        component:()=>import('../views/Info/index')
      },
      {
        hidden: true,
        path: '/infoCategory',
        name: 'InfoCategory',
        meta:{
          name:"信息分类",
          icon:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\" data-v-394d1fd8=\"\"><path fill=\"currentColor\" d=\"M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z\"></path></svg>"
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
      // icon:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\" data-v-394d1fd8=\"\"><path fill=\"currentColor\" d=\"M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z\"></path></svg>"

    },
    component:Layout,
    children: [
      {
        hidden: true,
        path: '/userindex',
        name: 'UserIndex',
        meta:{
          name:"用户列表",
          icon:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\" data-v-394d1fd8=\"\"><path fill=\"currentColor\" d=\"M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z\"></path></svg>"
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
