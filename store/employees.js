export const state = () => ({
  list: [
    {
      id: 1,
      name: 'Jason Oner',
      avatar: ''
    },
    {
      id: 2,
      name: 'Ranee Carlson',
      avatar: ''
    },
    {
      id: 3,
      name: 'Cindy Baker',
      avatar: ''
    },
    {
      id: 4,
      name: 'Ali Connors',
      avatar: ''
    }
  ]
})

export const getters = {
  byId: (state) => (id) => {
    return state.list.find(employee => employee.id === +id)
  }
}

export const mutations = {
  addEmployee: (state, employee) => {
    state.list.push(employee)
  }
}

export const actions = {
  addEmployee: async ({ state, commit }, employee) => {
    employee.id = state.list.length + 1
    commit('addEmployee', employee)
  },
  fetchEmployee: async ({ getters }, { id }) => {
    return getters.byId(id)
  }
}
