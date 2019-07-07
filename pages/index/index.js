Page({
  data: {
    inputValue: "您没有输入内容",
    unitArr: [
      {
        id: 0,
        name: "克(g)",
        placeholderValue: 0,
        value: "",
        isDisabled: false
      },
      {
        id: 1,
        name: "千克 公斤(kg)",
        placeholderValue: 0,
        value: "",
        isDisabled: false
      },
      {
        id: 2,
        name: "斤",
        placeholderValue: 0,
        value: "",
        isDisabled: false
      },
      {
        id: 3,
        name: "两",
        placeholderValue: 0,
        value: "",
        isDisabled: false
      },
      {
        id: 4,
        name: "元/斤",
        placeholderValue: 0,
        value: "",
        isDisabled: false
      },
      {
        id: 5,
        name: "元",
        placeholderValue: 0,
        value: "",
        isDisabled: false
      },
    ]
  },
  
  onLoad: function () {
    
  },

  onShareAppMessage: function () {

  },

  bindKeyInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var id = e.target.dataset.id

    if (value == ""){
      this.setData({
        inputValue: "您没有输入内容"
      })
    }else if (value == ".") {
      this.setData({
        inputValue: 0
      })
    } else {
      this.setData({
        inputValue: parseFloat(value)
      })
    }

    switch (id) {
      case 0:
        // if ((value / 5 - parseInt(value / 50) * 10) >= 5) {
        //   var isJinWei = 1;
        // } else {
        //   var isJinWei = 0;
        // }

        this.setData({
          'unitArr[0].value': value,
          'unitArr[1].value': parseFloat((value / 1000).toFixed(5)),
          'unitArr[1].isDisabled': true,
          'unitArr[2].value': parseInt((value / 500).toFixed(2)),
          'unitArr[2].isDisabled': true,
          'unitArr[3].value': parseFloat(((value / 50) - parseInt((value / 500).toFixed(2)) * 10).toFixed(0)),
          'unitArr[3].isDisabled': true,
        })
        if (value == "") {
          this.setData({
            'unitArr[1].value': "",
            'unitArr[1].isDisabled': false,
            'unitArr[2].value': "",
            'unitArr[2].isDisabled': false,
            'unitArr[3].value': "",
            'unitArr[3].isDisabled': false,
          })
        }
        if (this.data.unitArr[4].value != "" && (this.data.unitArr[5].value == "" || this.data.unitArr[5].isDisabled == true)){
          this.setData({
            'unitArr[5].value': parseFloat((this.data.unitArr[1].value * 2 * this.data.unitArr[4].value).toFixed(2)),
            'unitArr[5].isDisabled': true
          })
          if (value == "") {
            this.setData({
              'unitArr[5].value': "",
              'unitArr[5].isDisabled': false,
            })
          }
        } else if (this.data.unitArr[5].value != "" && (this.data.unitArr[4].value == "" || this.data.unitArr[4].isDisabled == true)) {
          this.setData({
            'unitArr[4].value': parseFloat((this.data.unitArr[5].value / (this.data.unitArr[1].value * 2)).toFixed(2)),
            'unitArr[4].isDisabled': true
          })
          if (value == "") {
            this.setData({
              'unitArr[4].value': "",
              'unitArr[4].isDisabled': false,
            })
          }
        }
        break;
      case 1:
        // if ((value * 200 - parseInt(value * 20) * 10) >= 5) {
        //   var isJinWei = 1;
        // } else {
        //   var isJinWei = 0;
        // }

        this.setData({
          'unitArr[1].value': value,
          'unitArr[0].value': parseFloat((value * 1000).toFixed(2)),
          'unitArr[0].isDisabled': true,
          'unitArr[2].value': parseInt((value * 2).toFixed(2)),
          'unitArr[2].isDisabled': true,
          'unitArr[3].value': parseFloat(((value * 20) - parseInt((value * 2).toFixed(2)) * 10).toFixed(0)),
          'unitArr[3].isDisabled': true,
        })
        if (value == "") {
          this.setData({
            'unitArr[0].value': "",
            'unitArr[0].isDisabled': false,
            'unitArr[2].value': "",
            'unitArr[2].isDisabled': false,
            'unitArr[3].value': "",
            'unitArr[3].isDisabled': false,
          })
        }
        if (this.data.unitArr[4].value != "" && (this.data.unitArr[5].value == "" || this.data.unitArr[5].isDisabled == true)) {
          this.setData({
            'unitArr[5].value': parseFloat((this.data.unitArr[1].value * 2 * this.data.unitArr[4].value).toFixed(2)),
            'unitArr[5].isDisabled': true
          })
          if (value == "") {
            this.setData({
              'unitArr[5].value': "",
              'unitArr[5].isDisabled': false,
            })
          }
        } else if (this.data.unitArr[5].value != "" && (this.data.unitArr[4].value == "" || this.data.unitArr[4].isDisabled == true)) {
          this.setData({
            'unitArr[4].value': parseFloat((this.data.unitArr[5].value / (this.data.unitArr[1].value * 2)).toFixed(2)),
            'unitArr[4].isDisabled': true
          })
          if (value == "") {
            this.setData({
              'unitArr[4].value': "",
              'unitArr[4].isDisabled': false,
            })
          }
        }
        break;
      case 2:
        this.setData({
          'unitArr[2].value': value,
          'unitArr[0].value': parseFloat((value * 500 + this.data.unitArr[3].value * 50).toFixed(2)),
          'unitArr[0].isDisabled': true,
          'unitArr[1].value': parseFloat((value / 2 + this.data.unitArr[3].value / 20).toFixed(5)),
          'unitArr[1].isDisabled': true,
        })
        if (value == "" && this.data.unitArr[3].value == "") {
          this.setData({
            'unitArr[0].value': "",
            'unitArr[0].isDisabled': false,
            'unitArr[1].value': "",
            'unitArr[1].isDisabled': false,
          })
        }
        if (this.data.unitArr[4].value != "" && (this.data.unitArr[5].value == "" || this.data.unitArr[5].isDisabled == true)) {
          this.setData({
            'unitArr[5].value': parseFloat((this.data.unitArr[1].value * 2 * this.data.unitArr[4].value).toFixed(2)),
            'unitArr[5].isDisabled': true
          })
          if (value == "" && this.data.unitArr[3].value == "") {
            this.setData({
              'unitArr[5].value': "",
              'unitArr[5].isDisabled': false,
            })
          }
        } else if (this.data.unitArr[5].value != "" && (this.data.unitArr[4].value == "" || this.data.unitArr[4].isDisabled == true)) {
          this.setData({
            'unitArr[4].value': parseFloat((this.data.unitArr[5].value / (this.data.unitArr[1].value * 2)).toFixed(2)),
            'unitArr[4].isDisabled': true
          })
          if (value == "" && this.data.unitArr[3].value == "") {
            this.setData({
              'unitArr[4].value': "",
              'unitArr[4].isDisabled': false,
            })
          }
        }
        break;
      case 3:
        this.setData({
          'unitArr[3].value': value,
          'unitArr[0].value': parseFloat((value * 50 + this.data.unitArr[2].value * 500).toFixed(2)),
          'unitArr[0].isDisabled': true,
          'unitArr[1].value': parseFloat((value / 20 + this.data.unitArr[2].value / 2).toFixed(5)),
          'unitArr[1].isDisabled': true,
        })
        if (value == "" && this.data.unitArr[2].value == "") {
          this.setData({
            'unitArr[0].value': "",
            'unitArr[0].isDisabled': false,
            'unitArr[1].value': "",
            'unitArr[1].isDisabled': false,
          })
        }
        if (this.data.unitArr[4].value != "" && (this.data.unitArr[5].value == "" || this.data.unitArr[5].isDisabled == true)) {
          this.setData({
            'unitArr[5].value': parseFloat((this.data.unitArr[1].value * 2 * this.data.unitArr[4].value).toFixed(2)),
            'unitArr[5].isDisabled': true
          })
          if (value == "" && this.data.unitArr[2].value == "") {
            this.setData({
              'unitArr[5].value': "",
              'unitArr[5].isDisabled': false,
            })
          }
        } else if (this.data.unitArr[5].value != "" && (this.data.unitArr[4].value == "" || this.data.unitArr[4].isDisabled == true)) {
          this.setData({
            'unitArr[4].value': parseFloat((this.data.unitArr[5].value / (this.data.unitArr[1].value * 2)).toFixed(2)),
            'unitArr[4].isDisabled': true
          })
          if (value == "" && this.data.unitArr[2].value == "") {
            this.setData({
              'unitArr[4].value': "",
              'unitArr[4].isDisabled': false,
            })
          }
        }
        break;
      case 4:
        this.setData({
          'unitArr[4].value': value,
        })
        if (this.data.unitArr[1].value != "" && (this.data.unitArr[5].value == "" || this.data.unitArr[5].isDisabled == true)) {
          this.setData({
            'unitArr[5].value': parseFloat((this.data.unitArr[1].value * 2 * (this.data.unitArr[4].value)).toFixed(2)),
            'unitArr[5].isDisabled': true
          })
          if (value == "") {
            this.setData({
              'unitArr[5].value': "",
              'unitArr[5].isDisabled': false,
            })
          }
        } else if (this.data.unitArr[5].value != "" && (this.data.unitArr[1].value == "" || this.data.unitArr[0].isDisabled == true || this.data.unitArr[1].isDisabled == true || this.data.unitArr[2].isDisabled == true)) {
          // if ((this.data.unitArr[5].value / this.data.unitArr[4].value * 100 - parseInt(this.data.unitArr[5].value / this.data.unitArr[4].value * 10) * 10) >= 5) {
          //   var isJinWei = 1;
          // } else {
          //   var isJinWei = 0;
          // }

          this.setData({
            'unitArr[1].value': parseFloat((this.data.unitArr[5].value / this.data.unitArr[4].value / 2).toFixed(5)),
            'unitArr[1].isDisabled': true,
            'unitArr[0].value': parseFloat((this.data.unitArr[5].value / this.data.unitArr[4].value * 500).toFixed(2)),
            'unitArr[0].isDisabled': true,
            'unitArr[2].value': parseInt((this.data.unitArr[5].value / this.data.unitArr[4].value).toFixed(2)),
            'unitArr[2].isDisabled': true,
            'unitArr[3].value': parseFloat(((this.data.unitArr[5].value / this.data.unitArr[4].value * 10) - parseInt((this.data.unitArr[5].value / this.data.unitArr[4].value).toFixed(2)) * 10).toFixed(0)),
            'unitArr[3].isDisabled': true,
          })
          if (value == "") {
            this.setData({
              'unitArr[0].value': "",
              'unitArr[0].isDisabled': false,
              'unitArr[1].value': "",
              'unitArr[1].isDisabled': false,
              'unitArr[2].value': "",
              'unitArr[2].isDisabled': false,
              'unitArr[3].value': "",
              'unitArr[3].isDisabled': false,
            })
          }
        }
        break;
      case 5:
        this.setData({
          'unitArr[5].value': value,
        })
        if (this.data.unitArr[1].value != "" && (this.data.unitArr[4].value == "") || (this.data.unitArr[4].isDisabled == true)) {
          this.setData({
            'unitArr[4].value': parseFloat((this.data.unitArr[5].value / (this.data.unitArr[1].value * 2)).toFixed(2)),
            'unitArr[4].isDisabled': true
          })
          if (value == "") {
            this.setData({
              'unitArr[4].value': "",
              'unitArr[4].isDisabled': false,
            })
          }
        } else if (this.data.unitArr[4].value != "" && (this.data.unitArr[1].value == "" || this.data.unitArr[0].isDisabled == true || this.data.unitArr[1].isDisabled == true || this.data.unitArr[2].isDisabled == true)) {
          // if ((this.data.unitArr[5].value / this.data.unitArr[4].value * 100 - parseInt(this.data.unitArr[5].value / this.data.unitArr[4].value * 10) * 10) >= 5) {
          //   var isJinWei = 1;
          // } else {
          //   var isJinWei = 0;
          // }

          this.setData({
            'unitArr[1].value': parseFloat((this.data.unitArr[5].value / this.data.unitArr[4].value / 2).toFixed(5)),
            'unitArr[1].isDisabled': true,
            'unitArr[0].value': parseFloat((this.data.unitArr[5].value / this.data.unitArr[4].value * 500).toFixed(2)),
            'unitArr[0].isDisabled': true,
            'unitArr[2].value': parseInt((this.data.unitArr[5].value / this.data.unitArr[4].value).toFixed(2)),
            'unitArr[2].isDisabled': true,
            'unitArr[3].value': parseFloat(((this.data.unitArr[5].value / this.data.unitArr[4].value * 10) - parseInt((this.data.unitArr[5].value / this.data.unitArr[4].value).toFixed(2)) * 10).toFixed(0)),
            'unitArr[3].isDisabled': true,
          })
          if (value == "") {
            this.setData({
              'unitArr[0].value': "",
              'unitArr[0].isDisabled': false,
              'unitArr[1].value': "",
              'unitArr[1].isDisabled': false,
              'unitArr[2].value': "",
              'unitArr[2].isDisabled': false,
              'unitArr[3].value': "",
              'unitArr[3].isDisabled': false,
            })
          }
        }
        break;
    }

    // split()  分隔函数。以“.”为分隔符，将value字符串分成n份，count也就是n-1即为“.”出现的次数
    var count = value.split('.').length - 1;

    if (count >= 2) {
      // value = ""
      // pos = value.length
      this.setData({
        inputValue: "输入有误，请重新输入",
        isWarning: true
      })
    }else{
      this.setData({
        isWarning: false
      })
    }

    return {
      value: value,
      cursor: pos
    }
  },

  bindReset: function () {
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
      inputValue: "您没有输入内容"
    })
  }
})
