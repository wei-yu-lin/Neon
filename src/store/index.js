import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wannalogin: true,
    user: {
      user_id: '',
      password: '',
      username:'',
      token:''
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
