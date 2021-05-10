import Vue from 'vue'
import Vuex from 'vuex'
import datas from '@/assets/data.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    whiskeys: []
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
