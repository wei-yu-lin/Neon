import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'vue-cookies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wannalogin: true,
    user: {}
  },
  mutations: {
    SET_STATUS(state, wannalogin) {
      state.wannalogin = wannalogin;
    },
    SET_USER(state , user) {
      state.user = user;
    }
  },
  actions: {
    readUser({commit}){
      const user = Cookies.get('login')
      commit('SET_STATUS', false);
      commit('SET_USER', user)
    },
    setUser({ commit}, payload){
      const { wannalogin, user} = payload;
      commit('SET_STATUS', wannalogin);
      commit('SET_USER', user);
    }
  },
  modules: {
  }
})
