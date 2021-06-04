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
      state.whiskeyslist.sort((a, b) => {
        return a.제품명 > b.제품명 ? 1 : a.제품명 < b.제품명 ? -1 : 0
      })
    },
    FETCH_WHISKEY (state, payload) {
      state.whiskey = payload
    },
    FETCH_MYRECORDS (state, payload) {
      state.myrecords = payload
      state.myrecords.sort((a, b) => {
        return a.일시 > b.일시 ? -1 : a.일시 < b.일시 ? 1 : 0
      })
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
      axios.get(baseurl + '/whiskeylist')
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
      console.log(payload.id)
      axios.delete(baseurl + `/comment/delete/${payload.id}`, { data: { 패스워드: `${payload.패스워드}` } })
      .then(res => {
        commit('DELETE_COMMENT', payload.id)
      })
    }
  }
})
