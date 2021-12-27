import { createStore } from 'vuex'

export default createStore({
  state: {
    isCollapse:false,
    count: 10
  },
  getters: {
    count: (state) =>  state.count + 10,
    // count: function (state){
    //   return state.count + 10
    // }

  },
  mutations: {
    SET_Collapse(state){
      state.isCollapse = !state.isCollapse;
      console.log(this.state.isCollapse);
    },
    SET_COUNT(state,value){
      state.count = value;
      console.log(value);
    }
  },
  actions: {

  },
  modules: {
  }
})
