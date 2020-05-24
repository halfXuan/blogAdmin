import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    defaultActive: '/Home/Board'
  },
  mutations: {
    setStore(state,arr){
      state[arr[0]] = arr[1]
    }
  },
  actions: {
  },
  modules: {
  }
})
