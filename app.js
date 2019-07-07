App({
  onLaunch: function (e) {
    var that = this;
    wx.getSystemInfo({
      success(res) {
        that.globalData = {
          statusBarHeight: res.statusBarHeight,
        }
      }
    })
  },

  globalData: {

  }
})