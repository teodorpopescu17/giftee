import { createStore } from 'vuex'
const state = {
  isLoggedIn: false,
}

const mutations = {
  login() {
    state.isLoggedIn=true;
  }, 
  logout() {
    state.isLoggedIn=false;
  }
}

export default createStore({
  state,
  mutations 
})
