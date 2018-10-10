export default {
  namespaced: true,
  state: {
    alertTip: '',
    alertShow: false
  },
  mutations: {
    changeAlertTip(state, payload) {
      state.alertTip = payload
    },
    changeAlertShow(state, payload) {
      state.alertShow = payload
    }
  }
}
