App({
  onLaunch: function (e) {
    var that = this;
    wx.getSystemInfo({
      success(res) {
        // console.log(res)
        that.globalData = {
          statusBarHeight: res.statusBarHeight,
          windowHeight: res.windowHeight,
        }
      }
    })
  },

  globalData: {
    
  }
})