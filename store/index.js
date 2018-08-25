export const state = () => ({
  sidebar: true,
  miniVariant: false
})

export const mutations = {
  setSidebar: (state, value) => {
    state.sidebar = value
  },
  setminiVariant: (state, value) => {
    state.miniVariant = value
  }
}
