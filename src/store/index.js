import Vue from 'vue'
import Vuex from 'vuex'
import Auth from '../Warehouse/Auth'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth
  },
  state: {
    whiskeys: [],
    myrecords: []
  },
  getters: {
  },
  mutations: {
    FETCH_WHISKEYS: (state, payload) => {
      state.whiskeys = payload
    },
    FETCH_MYRECORDS: (state, payload) => {
      state.myrecords = payload
    }
  },
  actions: {
    fetchWhiskeys ({ commit }) {
      axios.get('http://whiscovery.xyz/whiskey')
      .then((res) => {
        commit('FETCH_WHISKEYS', res.data)
      })
    },
    fetchMyrecords ({ commit }, payload) {
      axios.get('http://whiscovery.xyz/comment/search/' + this.email)
      .then((res) => {
        commit('FETCH_WHISKEYS', res.data)
      })
    }
  }
})
