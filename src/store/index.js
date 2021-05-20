import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const resourceHost = 'http://localhost:4000'

const enhanceAccessToeken = () => {
  const { accessToken } = localStorage
  if (!accessToken) return
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
  // axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}
enhanceAccessToeken()

export default new Vuex.Store({
  state: {
    accessToken: null
  },
  getters: {},
  mutations: {
    LOGIN (state, { accessToken }) {
      state.accessToken = accessToken
      localStorage.accessToken = accessToken
    },
    LOGOUT (state) {
      state.accessToken = null
    }
  },
  actions: {
    LOGIN ({ commit }, { email, password }) {
      return axios.post(`${resourceHost}/login`, { email, password })
        .then(({ data }) => {
          commit('LOGIN', data)
          axios.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`
          // axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`
        })
    },
    LOGOUT ({ commit }) {
      // axios.defaults.headers.common['Authorization'] = undefined
      axios.defaults.headers.common.Authorization = undefined
      commit('LOGOUT')
    }
  }
})
