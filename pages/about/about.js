Page({
  data: {
    elements: [
      {
        id: "0",
        iconPath: "/icons/icon_instruction.png",
        text: "使用说明",
        tap: "navigate",
        aboutType: "instruction"
      },
      {
        id: "1",
        iconPath: "/icons/icon_kefu.png",
        text: "在线客服",
        tap: "kefu"
      },
      {
        id: "2",
        iconPath: "/icons/icon_link.png",
        text: "关联此小程序到公众号",
        tap: "navigate",
        aboutType: "link"
      },
      {
        id: "3",
        iconPath: "/icons/icon_otherPro.png",
        text: "更多实用小程序",
        tap: "navigate",
        aboutType: "otherPro"
      }
    ]
  },

  onLoad: function (options) {
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