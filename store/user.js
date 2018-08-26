export const state = () => ({
  id: null,
  email: null
})

export const mutations = {
  setUser: (state, { id, email }) => {
    state.id = id
    state.email = email
  }
}

export const getters = {
  isAuthenticated: (state) => {
    return !!state.id
  }
}

export const actions = {
  authenticate: async ({ commit }, { email, password }) => {
    const data = { id: 'daiosjd34oo8dai', email }
    commit('setUser', data)
  },
  logout: async ({ commit }) => {
    commit('setUser', {})
  }
}
