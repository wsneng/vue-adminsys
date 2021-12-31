const state= {
  isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
};
const getters = {
  Collapse: state => state.isCollapse
};
const mutations = {
  SET_Collapse(state){
    state.isCollapse = !state.isCollapse;
    // html5本地存储
    sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
    // Cookie.set('isCollapse',JSON.stringify(state.isCollapse));
  },
};
const actions = {
}

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
};
