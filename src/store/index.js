import Vue from 'vue'
import Vuex from 'vuex'
import Auth from '../Warehouse/Auth'
import axios from 'axios'
import { baseurl } from '@/config/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth
  },
  state: {
    whiskeyslist: [],
    whiskey: null,
    myrecords: [],
    comments: []
  },
  getters: {
  },
  mutations: {
    FETCH_WHISKEYS_LIST (state, payload) {
      state.whiskeyslist = payload
    },
    FETCH_WHISKEY (state, payload) {
      state.whiskey = payload
    },
    FETCH_MYRECORDS (state, payload) {
      state.myrecords = payload
    },
    FETCH_COMMENT (state, payload) {
      state.comments = payload
    },
    WRITE_COMMENT (state, payload) {
      state.comments.push(payload)
    },
    DELETE_COMMENT (state, commentID) {
      const targetIndex = state.comments.findIndex(comment => comment.id === commentID)
      state.comments.splice(targetIndex, 1)
    }
  },
  actions: {
    fetchWhiskeysList ({ commit }) {
      axios.get(baseurl + '/whiskey')
      .then((res) => {
        commit('FETCH_WHISKEYS_LIST', res.data)
      })
    },
    fetchWhiskey ({ commit }, payload) {
      axios.get(baseurl + '/whiskey/' + payload)
      .then((res) => {
        commit('FETCH_WHISKEY', res.data)
      })
    },
    fetchMyRecords ({ commit }, payload) {
      axios.get(baseurl + '/comment/search/' + payload)
      .then((res) => {
        commit('FETCH_MYRECORDS', res.data)
      })
    },
    fetchComment ({ commit }, payload) {
      axios.get(baseurl + '/comment/' + payload)
      .then((res) => {
        commit('FETCH_COMMENT', res.data)
      })
    },
    writeComment ({ commit }, payload) {
      axios.post(baseurl + '/writecomment', payload)
      .then(res => {
        commit('WRITE_COMMENT', res.data)
      })
    },
    deleteComment ({ commit }, payload) {
      axios.delete(baseurl + `/comment/delete/${payload}`)
      .then(res => {
        commit('DELETE_COMMENT', payload)
      })
    }
  }
})
