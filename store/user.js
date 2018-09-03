import { BASE_URL } from './index'

export const state = () => ({
  id: null,
  email: null,
  accessToken: '',
  refreshToken: ''
})

export const mutations = {
  setUser: (state, { id, email, access, refresh }) => {
    state.id = id
    state.email = email
    state.accessToken = access
    state.refreshToken = refresh
  }
}

export const getters = {
  isAuthenticated: (state) => {
    return !!state.id
  }
}

export const actions = {
  async authenticate ({ commit }, { email, password }) {
    const data = await this.$axios.$post(BASE_URL + 'token/', {
      username: email,
      password: password
    })
    if (data) {
      let tokenData = JSON.parse(atob(data.refresh.split('.')[1]))
      data.email = email
      data.id = tokenData.user_id
      commit('setUser', data)
      return true
    }
    return false
  },
  async refresh ({ state, commit }) {
    const data = await this.$axios.$post(BASE_URL + 'token/', {
      refresh: state.refreshToken
    })
    if (data) {
      data.email = state.email
      data.id = state.id
      commit('setUser', data)
      return true
    }
    return false
  },
  logout ({ commit }) {
    commit('setUser', {})
  }
}
