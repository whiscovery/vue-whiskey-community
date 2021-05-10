import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    whiskeys: datas
  },
  mutations: {
    FETCH_WHISKEY_POST (state, payload) {
      state.whiskeys = payload
    }
  },
  actions: {
    fetchWhiskeyPost ({ commit }) {
      return commit('FETCH_WHISKEY_POST', datas)
    }
  },
  modules: {
  }
})
