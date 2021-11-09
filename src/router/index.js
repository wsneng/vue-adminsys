import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

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
    redirect:'login'
  },
  {
    path:'/login',
    name:'login',
    component:()=> import('../views/login/index')
  },
  {
    path:'/console',   // 不区分大写
    name:'Console',
    redirect: 'Index',
    component:()=> import('../views/Layout/index'),
    children: [
      {
        path: '/index',
        name: 'Index',
        component:()=>import('../views/Console/index')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
