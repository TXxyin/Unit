const app = getApp();
var unitArr = require('../../data/unitArr.js');
var calc = require('../../utils/calc/calc.js');

Page({
  data: {
    windowHeight: app.globalData.windowHeight,
    swiperHeight: app.globalData.windowHeight - 51,
    scrollHeight: app.globalData.windowHeight - 140,
    currentTab: 0,
    inputValue0: "您没有输入内容",
    inputValue1: "您没有输入内容",
  },
  
  onLoad: function () {
    this.setData({
      unitArr: unitArr.unitArr,
    })
    // wx.openBluetoothAdapter({
    //   success(res) {
    //     console.log(res.errMsg)

    //   },
    //   fail(res){
    //     console.log(res.errMsg)
    //   }
    // })
  },

  onShareAppMessage: function () {

  },

  switchNav: function (e) {
    var current = e.currentTarget.dataset.current;
    this.setData({
      currentTab: current,
    })
  },

  changeSwiper: function (e) {
    var current = e.detail.current;
    this.setData({
      currentTab: current,
    })
  },

  bindKeyInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var id = e.target.dataset.id

    if (value == ""){
      if (this.data.currentTab == 0) {
        this.setData({
          inputValue0: "您没有输入内容"
        })
      }
      else if (this.data.currentTab == 1) {
        this.setData({
          inputValue1: "您没有输入内容"
        })
      }
    }else if (value == ".") {
      if (this.data.currentTab == 0) {
        this.setData({
          inputValue0: 0
        })
      }
      else if (this.data.currentTab == 1) {
        this.setData({
          inputValue1: 0
        })
      }
    } else {
      if (this.data.currentTab == 0){
        this.setData({
          inputValue0: parseFloat(value)
        })
      }
      else if (this.data.currentTab == 1){
        this.setData({
          inputValue1: parseFloat(value)
        })
      }
    }

    switch (id) {
      // 称量-克
      case 0:
        calc.case0(this, value);
        break;

      // 称量-千克
      case 1:
        calc.case1(this, value);
        break;

      // 称量-斤
      case 2:
        calc.case2(this, value);
        break;

      // 称量-两
      case 3:
        calc.case3(this, value);
        break;

      // 称量-元/斤
      case 4:
        calc.case4(this, value);
        break;

      // 称量-元
      case 5:
        calc.case5(this, value);
        break;
      
      // 车主专区-元（充值/花费）
      case 6:
        calc.case6(this, value);
        break;

      // 车主专区-元/升（油价）
      case 7:
        calc.case7(this, value);
        break;

      // 车主专区-升（油量/油耗）
      case 8:
        calc.case8(this, value);
        break;

      // 车主专区-升（百公里油耗）
      case 9:
        calc.case9(this, value);
        break;

      // 车主专区-公里（行驶里程）
      case 10:
        calc.case10(this, value);
        break;

      // 车主专区-公里（日均行驶）
      case 11:
        calc.case11(this, value);
        break;

      // 车主专区-天（行驶天数）
      case 12:
        calc.case12(this, value);
        break;

      // 车主专区-升（日均油耗）
      case 13:
        calc.case13(this, value);
        break;
    }

    // calc.caseAll(this, value);

    // split()  分隔函数。以“.”为分隔符，将value字符串分成n份，count也就是n-1即为“.”出现的次数
    var count = value.split('.').length - 1;

    if (count >= 2) {
      // value = ""
      // pos = value.length
      if(this.data.currentTab == 0){
        this.setData({
          inputValue0: "输入有误，请重新输入",
          isWarning0: true
        })
      }
      else if (this.data.currentTab == 1) {
        this.setData({
          inputValue1: "输入有误，请重新输入",
          isWarning1: true
        })
      }
    }else{
      if (this.data.currentTab == 0) {
        this.setData({
          isWarning0: false
        })
      }
      else if (this.data.currentTab == 1) {
        this.setData({
          isWarning1: false
        })
      }
    }

    return {
      value: value,
      cursor: pos
    }
  },

  bindReset: function (e) {
    var formId = e.detail.formId;
    // wx.request({
    //   method: "POST",
    //   url: 'http://www.txxystudio.cn/',
    //   data: {
    //     formId: formId,
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     console.log(res.data)
    //   }
    // })

    if (this.data.currentTab == 0) {
      this.setData({
        'unitArr[0].value': "",
        'unitArr[0].isDisabled': false,
        'unitArr[1].value': "",
        'unitArr[1].isDisabled': false,
        'unitArr[2].value': "",
        'unitArr[2].isDisabled': false,
        'unitArr[3].value': "",
        'unitArr[3].isDisabled': false,
        'unitArr[4].value': "",
        'unitArr[4].isDisabled': false,
        'unitArr[5].value': "",
        'unitArr[5].isDisabled': false,
        inputValue0: "您没有输入内容",
        isWarning0: false,
      })
    }
    else if (this.data.currentTab == 1) {
      this.setData({
        'unitArr[6].value': "",
        'unitArr[6].isDisabled': false,
        'unitArr[7].value': "",
        'unitArr[7].isDisabled': false,
        'unitArr[8].value': "",
        'unitArr[8].isDisabled': false,
        'unitArr[9].value': "",
        'unitArr[9].isDisabled': false,
        'unitArr[10].value': "",
        'unitArr[10].isDisabled': false,
        'unitArr[11].value': "",
        'unitArr[11].isDisabled': false,
        'unitArr[12].value': "",
        'unitArr[12].isDisabled': false,
        'unitArr[13].value': "",
        'unitArr[13].isDisabled': false,
        inputValue1: "您没有输入内容",
        isWarning1: false,
      })
    }
  },

  // bindsubmit: function (e) {
  //   console.log(e)
  // }
})
