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
    async login({commit}, {username, password}) {
      let user = await login(username, password)
      sessionStorage.setItem("user", JSON.stringify(user))
      commit('SET_USER', user)
      return user
    },
    async logout({commit}) {
      await logout()
      sessionStorage.removeItem("user")
      commit('SET_USER', null)
    },
    getLoginUser({commit, state}) {
      let user = state.user
      if (user == null) {
        let data = sessionStorage.getItem("user")
        if (data) {
          user = JSON.parse(data)
          if (user) {
            commit('SET_USER', user) // restore
          }
        }
      }
      return user
    }
  }
})
