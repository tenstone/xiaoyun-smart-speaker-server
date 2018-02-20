import Vue from 'vue'

export default {

  setLoading: function (state, bool) {
    state.isLoading = bool
  },
  setResource: function (state, value) {
    state.resource = value
  },
  setDeviceConversationLog: function (state, value) {
    state.deviceConversationLogs = value
  },
  appendChatItem: function (state, value) {
    let date = new Date()
    if (state.chatItems.length > 400) {
      state.chatItems.shift()
    }
    state.chatItems.push({text: value.content, time: date.getHours() + ':' + date.getMinutes(), speaker: value.speaker})
  },
  setDeviceStat: function (state, value) {
    state.deviceStat = value
  },
  setChatPollingOpen: function (state, value) {
    state.chatPollingOpen = value
  },
  setStatPollingOpen: function (state, value) {
    state.statPollingOpen = value
  },
  setLastConversationAt: function (state, value) {
    state.lastConversationAt = value
  }
}
