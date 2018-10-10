import store from '@/store/'
import sysSound from '@/plugins/sys-sound'
let msgList = {}
export default {
  emit(msgName, payload) {
    if (typeof msgList[msgName] === 'function') {
      msgList[msgName](payload)
      store.commit('footer/setEventTips', `触发事件${msgName}`)
    } else {
      sysSound.play('failed')
      store.commit('footer/setEventTips', `事件${msgName}暂无人订阅。`)
    }
  },
  on(msgName, cb) {
    msgList[msgName] = cb
  },
  off(msgName) {
    msgList[msgName] = null
  }
}
