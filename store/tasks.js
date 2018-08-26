export const TYPE_FINANCE = 'finance'
export const TYPE_CLIENTS = 'clients'
export const TYPE_PROCESS = 'process'
export const TYPE_TEAM = 'team'

export const TASK_STATUS_ICON = {
  good: {
    icon: 'check',
    color: 'success'
  },
  ok: {
    icon: 'info',
    color: 'warning'
  },
  bad: {
    icon: 'warning',
    color: 'error'
  },
  [undefined]: {}
}

export const state = () => ({
  list: [
    {
      id: '6',
      name: 'Задача 1',
      type: TYPE_FINANCE,
      metric: '',
      dateStart: new Date(),
      dateEnd: new Date(),
      plan: 12,
      status: 'ok',
      assigned: {
        name: 'Иван Петров'
      }
    },
    {
      id: '2',
      name: 'Задача 2',
      type: TYPE_FINANCE,
      metric: '',
      dateStart: new Date(),
      dateEnd: new Date(),
      plan: 2,
      status: 'good',
      assigned: {
        name: 'Петр Петров'
      }
    },
    {
      id: '3',
      name: 'Задача 1',
      type: TYPE_CLIENTS,
      metric: '',
      dateStart: new Date(),
      dateEnd: new Date(),
      plan: 12,
      status: 'bad',
      assigned: {
        name: 'Иван Петров'
      }
    }
  ]
})

export const getters = {
  financeTasks: (state) => {
    return (state.list || []).filter(task => task.type === TYPE_FINANCE)
  },
  clientsTasks: (state) => {
    return (state.list || []).filter(task => task.type === TYPE_CLIENTS)
  },
  processTasks: (state) => {
    return (state.list || []).filter(task => task.type === TYPE_PROCESS)
  },
  teamTasks: (state) => {
    return (state.list || []).filter(task => task.type === TYPE_TEAM)
  }
}

export const mutations = {
  setTasks: (state, tasks) => {
    state.list = tasks
  },
  addTask: (state, task) => {
    task.assigned = task.assigned || {}
    state.list.push(task)
  }
}

export const actions = {
  addTask: async ({ commit }, task) => {
    commit('addTask', task)
  },
  fetchAll: async ({ commit, store }) => {
    // const data = []
    // commit('setTasks', data)
  }
}
