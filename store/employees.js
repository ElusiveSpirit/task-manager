export const state = () => ({
  list: [
    {
      id: 1,
      name: 'Jason Oner',
      email: 'jason.oner@mail.com',
      role: 'Разработчик',
      avatar: ''
    },
    {
      id: 2,
      name: 'Ranee Carlson',
      email: 'ranee.carlson@mail.com',
      role: 'Стажер',
      avatar: ''
    },
    {
      id: 3,
      name: 'Cindy Baker',
      email: 'cindy.baker@mail.com',
      role: 'Стажер',
      avatar: ''
    },
    {
      id: 4,
      name: 'Ali Connors',
      email: 'ali.connors@mail.com',
      role: 'Разработчик',
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
