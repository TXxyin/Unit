var elements = require('../../data/elements.js');

Page({
  data: {
    
  },

  onLoad: function (options) {
    this.setData({
      elements: elements.elements
    })

    // wx.getUserInfo({
    //   success: function (res) {
    //     var userInfo = res.userInfo
    //     var nickName = userInfo.nickName
    //     var avatarUrl = userInfo.avatarUrl
    //     var gender = userInfo.gender //性别 0：未知、1：男、2：女
    //     var province = userInfo.province
    //     var city = userInfo.city
    //     var country = userInfo.country
    //   }
    // })
    // this.setData({
    //   userInfo: userInfo,
    // })
  },
  
  onShareAppMessage: function () {

  },

  handleContact(e) {
    // console.log(e)
    // console.log(e.path)
    // console.log(e.query)
  },

  bindElement: function(e){
    var aboutType = e.currentTarget.dataset.aboutType;
    var pageTitle = e.currentTarget.dataset.pageTitle;
    wx.navigateTo({
      url: "instruction/instruction?aboutType=" + aboutType + "&pageTitle=" + pageTitle,
    })
  }
})