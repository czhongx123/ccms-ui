export default {
  namespaced: true,
  state: {
    sideMenusData: []
  },
  mutations: {
    addSideMenusData(state, payload) {
      state.sideMenusData = [...state.sideMenusData, ...payload]
    }
  }
}
