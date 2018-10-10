export default {
  namespaced: true,
  state: {
    userData: sessionStorage.userData ? JSON.parse(sessionStorage.userData) : {}
  },
  mutations: {
    setUserData(state, payload) {
      sessionStorage.userData = JSON.stringify(payload)
      state.userData = { ...state.userData, ...payload }
    },
    cleanUserData(state) {
      sessionStorage.clear()
      state.userData = {}
    }
  }
}
