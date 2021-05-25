import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const resourceHost = 'http://localhost:4000'

// const enhanceAccessToeken = () => {
//   const { accessToken } = localStorage
//   if (!accessToken) return
//   axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
// }
// enhanceAccessToeken()

export default new Vuex.Store({
  state: {
    isLogined: false,
    accessToken: null
  },
  getters: {
    isAuthenticated (state) {
      // state.accessToken = state.accessToken || localStorage.accessToken
      // return state.accessToken
      return state.accessToken
    }
  },
  mutations: {
    LOGIN (state, { data }) {
      state.isLogined = true
      state.accessToken = data.token
      console.log(state)
    // LOGIN (state, { accessToken }) {
    //   state.accessToken = accessToken
    //   localStorage.accessToken = accessToken
    },
    LOGOUT (state) {
      // state.accessToken = null
      // delete localStorage.accessToken
    }
  },
  actions: {
    LOGIN ({ commit }, { email, password }) {
      return axios.post(`${resourceHost}/login`, { email, password })
        .then((res) => {
          console.log(res.data.token)
          commit('LOGIN', res.data)
          this.$cookie.set('x_auth', res.data.token, 1)
          axios.defaults.headers.common.x_auth = res.data.token
          // axios.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`
        })
    },
    LOGOUT ({ commit }) {
      axios.defaults.headers.common.x_auth = undefined
      // axios.defaults.headers.common.Authorization = undefined
      commit('LOGOUT')
    }
  }
})
