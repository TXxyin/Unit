var instructionArr = require('../../../data/instructionArr.js');

Page({

  data: {
    
  },

  onLoad: function (options) {
    this.setData({
      instructionArr: instructionArr.instructionArr,
      linkArr: instructionArr.linkArr,
      otherProArr: instructionArr.otherProArr,
    })

    var aboutType = options.aboutType;
    var pageTitle = options.pageTitle;
    this.setData({
      aboutType: aboutType,
      pageTitle: pageTitle,
    })
    wx.setNavigationBarTitle({
      title: this.data.pageTitle
    })
  },

  navOtherPro: function (options) {
    var appId = options.currentTarget.dataset.appId;
    wx.navigateToMiniProgram({
      appId: appId,
      success(res) {
        
      }
    })
  },

  copyWords: function (options) {
    var copyContent = options.currentTarget.dataset.copyContent;
    wx.setClipboardData({
      data: copyContent,
      success(res) {
        // wx.getClipboardData({
        //   success(res) {
        //     console.log(res.data) // data
        //   }
        // })
        wx.showToast({
          title: '已复制',
          icon: 'success',
          duration: 2000
        })
      }
    })
  }
})