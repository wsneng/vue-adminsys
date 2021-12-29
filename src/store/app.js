import {GetLogin, GetRegister} from '../api/login'
const app = {
  state: {
    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
    // isCollapse: JSON.parse( Cookie.get('isCollapse')) || false,
  },
  getters: {
    Collapse: state => state.isCollapse
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
}

export default app;
