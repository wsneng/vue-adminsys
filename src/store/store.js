/*
import { createStore } from 'vuex'
// import Cookie from 'cookie_js'
import {GetLogin, GetRegister} from '../api/login'
export default createStore({
  state: {
    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
    // isCollapse: JSON.parse( Cookie.get('isCollapse')) || false,
  },
  getters: {
    isCollapse: state => state.isCollapse
  },
  mutations: {
    SET_Collapse(state){
      state.isCollapse = !state.isCollapse;
      // html5本地存储
      sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
      // Cookie.set('isCollapse',JSON.stringify(state.isCollapse));
    },
  },
  actions: {
    login(content,UserData){
      return new Promise((resolve, reject)=>{
        GetLogin(UserData).then((res) =>{
          resolve(res)
        }).catch(err=>{
          reject(err)
        })
      })
    },
    register(content,UserData){
      return new Promise((resolve,reject)=>{
        GetRegister(UserData).then(res=>{
          resolve(res);
        }).catch(err=>{
          reject(err);
        })
      })
    }

  },
  modules: {
  }
})
*/
