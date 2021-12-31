import {GetLogin, GetRegister,GetSms} from '../../api/login'
import {setToken,setUserName,getToken,getUserName} from '../../utils/app'

const  state = {
  token: getToken() ||'',
  userName: getUserName() || ''

};
const  getters = {
};
const mutations = {
  SET_TOKEN(state,value){
    state.token = value
  },
  SET_USERNAME(state,value){
    state.userName = value
  }
};
const actions = {
  login({commit},UserData){
    return new Promise((resolve, reject)=>{
      GetLogin(UserData).then((res) =>{
        let data = res.data.data;
        commit('SET_TOKEN',data.token);
        setToken(data.token);
        commit('SET_USERNAME',data.username);
        setUserName(data.username);
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
  },
  getCode(content,requestData){
    return new Promise((resolve,reject) => {
      GetSms(requestData).then(res =>{
        resolve(res);
      }).catch(err=>{
        reject(err);
      })
    })
  }
};

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
};
