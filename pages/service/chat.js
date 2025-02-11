Page({
  data: {
    messages: [
      { content: "您好，请问有什么可以帮您？", isUser: false, time: Date.now() }
    ],
    inputMsg: ""
  },

  onInput(e) {
    this.setData({ inputMsg: e.detail.value })
  },

  sendMessage() {
    const msg = this.data.inputMsg.trim()
    if (!msg) return

    const newMsg = { content: msg, isUser: true, time: Date.now() }
    this.setData({
      messages: [...this.data.messages, newMsg],
      inputMsg: ""
    })
  }
})