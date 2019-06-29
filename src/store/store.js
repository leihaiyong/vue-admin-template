import Vue from 'vue'
import Vuex from 'vuex'
import { login, logout } from '@/api/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    }
  },
  actions: {
    async login({commit}, id, pwd) {
      let user = await login(id, pwd)
      commit('SET_USER', user)
      return user
    },
    logout({commit}) {
      logout()
      commit('SET_USER', null)
    }
  }
})
