export default {
  namespaced: true,
  state: {
    eventTips: ''
  },
  mutations: {
    setEventTips(state, payload) {
      state.eventTips = payload
    }
  }
}
