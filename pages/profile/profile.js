Page({
  data: {
    isLogin: false,
    userInfo: {}
  },

  handleLogin() {
    // 调用微信登录接口
    wx.getUserProfile({
      desc: '用于完善会员信息',
      success: res => {
        this.setData({
          isLogin: true,
          userInfo: res.userInfo
        })
      }
    })
  },

  handleRegister() {
    wx.navigateTo({
      url: '/pages/auth/register'
    })
  },

  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: '137-6259-6022'
    })
  }
})