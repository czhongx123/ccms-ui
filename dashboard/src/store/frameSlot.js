export default {
  namespaced: true,
  state: {
    global: []
  },
  mutations: {
    add(state, payload) {
      state[payload.target].push(payload.component)
    }
  }
}
