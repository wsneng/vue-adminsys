import router from "./index";
import store from '../store/index'
import {getToken,removeToken,removeUserName} from "../utils/app";
// const whiteRouter = ['/login'];   // indexOf方法，判断数组中是否存在指定的某个对象 如果不存在，则返回-1

router.beforeEach((to,from,next) => {
   /*if(getToken()){
     // 路由动态添加，分配菜单，每个角色分配不同的菜单
     console.log("存在");
     next();
   }else{
     if(whiteRouter.indexOf(to.path) !== -1){
       next();
     }else{
       next('/login');
     }
     /!**
      * 1.直接进入index的时候，参数to被改变成了"/index"，如果路由指向，就会出发beforeEach
      * 2.进入白名单判断，next指向'/login',再次发生路由指向，再跑beforeEach,参数的to则改编成'/login'
      * 3.白名单判断存在，则直接执行next，没有参数，则不会再跑beforeEach
      *!/
   }*/
  if (to.name !== 'login' && !getToken()) {
    next({ name: 'login' })
  }else if(to.path === '/login'){
    store.commit('login/SET_TOKEN','');
    store.commit('login/SET_USERNAME','');
    removeUserName()
    removeToken()
    next()
  }else{
    next()
  }
})

