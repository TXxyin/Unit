function case0(self, value) {
  // if ((value / 5 - parseInt(value / 50) * 10) >= 5) {
  //   var isJinWei = 1;
  // } else {
  //   var isJinWei = 0;
  // }

  if (value == "") {
    self.setData({
      'unitArr[1].value': "",
      'unitArr[1].isDisabled': false,
      'unitArr[2].value': "",
      'unitArr[2].isDisabled': false,
      'unitArr[3].value': "",
      'unitArr[3].isDisabled': false,
    })
  }
  else {
    self.setData({
      'unitArr[0].value': value,
      'unitArr[1].value': parseFloat((value / 1000).toFixed(5)),
      'unitArr[1].isDisabled': true,
      'unitArr[2].value': parseInt((value / 500).toFixed(2)),
      'unitArr[2].isDisabled': true,
      'unitArr[3].value': parseFloat(((value / 50) - parseInt((value / 500).toFixed(2)) * 10).toFixed(0)),
      'unitArr[3].isDisabled': true,
    })
  }
  if (self.data.unitArr[4].value != "" && (self.data.unitArr[5].value == "" || self.data.unitArr[5].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[5].value': "",
        'unitArr[5].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[5].value': parseFloat((self.data.unitArr[1].value * 2 * self.data.unitArr[4].value).toFixed(2)),
        'unitArr[5].isDisabled': true
      })
    }
  } else if (self.data.unitArr[5].value != "" && (self.data.unitArr[4].value == "" || self.data.unitArr[4].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[4].value': "",
        'unitArr[4].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[4].value': parseFloat((self.data.unitArr[5].value / (self.data.unitArr[1].value * 2)).toFixed(2)),
        'unitArr[4].isDisabled': true
      })
    }
  }
}

function case1(self, value) {
  // if ((value * 200 - parseInt(value * 20) * 10) >= 5) {
  //   var isJinWei = 1;
  // } else {
  //   var isJinWei = 0;
  // }

  if (value == "") {
    self.setData({
      'unitArr[0].value': "",
      'unitArr[0].isDisabled': false,
      'unitArr[2].value': "",
      'unitArr[2].isDisabled': false,
      'unitArr[3].value': "",
      'unitArr[3].isDisabled': false,
    })
  }
  else {
    self.setData({
      'unitArr[1].value': value,
      'unitArr[0].value': parseFloat((value * 1000).toFixed(2)),
      'unitArr[0].isDisabled': true,
      'unitArr[2].value': parseInt((value * 2).toFixed(2)),
      'unitArr[2].isDisabled': true,
      'unitArr[3].value': parseFloat(((value * 20) - parseInt((value * 2).toFixed(2)) * 10).toFixed(0)),
      'unitArr[3].isDisabled': true,
    })
  }
  if (self.data.unitArr[4].value != "" && (self.data.unitArr[5].value == "" || self.data.unitArr[5].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[5].value': "",
        'unitArr[5].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[5].value': parseFloat((self.data.unitArr[1].value * 2 * self.data.unitArr[4].value).toFixed(2)),
        'unitArr[5].isDisabled': true
      })
    }
  } else if (self.data.unitArr[5].value != "" && (self.data.unitArr[4].value == "" || self.data.unitArr[4].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[4].value': "",
        'unitArr[4].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[4].value': parseFloat((self.data.unitArr[5].value / (self.data.unitArr[1].value * 2)).toFixed(2)),
        'unitArr[4].isDisabled': true
      })
    }
  }
}

function case2(self, value) {
  if (value == "" && self.data.unitArr[3].value == "") {
    self.setData({
      'unitArr[0].value': "",
      'unitArr[0].isDisabled': false,
      'unitArr[1].value': "",
      'unitArr[1].isDisabled': false,
    })
  }
  else {
    self.setData({
      'unitArr[2].value': value,
      'unitArr[0].value': parseFloat((value * 500 + self.data.unitArr[3].value * 50).toFixed(2)),
      'unitArr[0].isDisabled': true,
      'unitArr[1].value': parseFloat((value / 2 + self.data.unitArr[3].value / 20).toFixed(5)),
      'unitArr[1].isDisabled': true,
    })
  }
  if (self.data.unitArr[4].value != "" && (self.data.unitArr[5].value == "" || self.data.unitArr[5].isDisabled == true)) {
    if (value == "" && self.data.unitArr[3].value == "") {
      self.setData({
        'unitArr[5].value': "",
        'unitArr[5].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[5].value': parseFloat((self.data.unitArr[1].value * 2 * self.data.unitArr[4].value).toFixed(2)),
        'unitArr[5].isDisabled': true
      })
    }
  } else if (self.data.unitArr[5].value != "" && (self.data.unitArr[4].value == "" || self.data.unitArr[4].isDisabled == true)) {
    if (value == "" && self.data.unitArr[3].value == "") {
      self.setData({
        'unitArr[4].value': "",
        'unitArr[4].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[4].value': parseFloat((self.data.unitArr[5].value / (self.data.unitArr[1].value * 2)).toFixed(2)),
        'unitArr[4].isDisabled': true
      })
    }
  }
}

function case3(self, value) {
  if (value == "" && self.data.unitArr[2].value == "") {
    self.setData({
      'unitArr[0].value': "",
      'unitArr[0].isDisabled': false,
      'unitArr[1].value': "",
      'unitArr[1].isDisabled': false,
    })
  }
  else {
    self.setData({
      'unitArr[3].value': value,
      'unitArr[0].value': parseFloat((value * 50 + self.data.unitArr[2].value * 500).toFixed(2)),
      'unitArr[0].isDisabled': true,
      'unitArr[1].value': parseFloat((value / 20 + self.data.unitArr[2].value / 2).toFixed(5)),
      'unitArr[1].isDisabled': true,
    })
  }
  if (self.data.unitArr[4].value != "" && (self.data.unitArr[5].value == "" || self.data.unitArr[5].isDisabled == true)) {
    if (value == "" && self.data.unitArr[2].value == "") {
      self.setData({
        'unitArr[5].value': "",
        'unitArr[5].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[5].value': parseFloat((self.data.unitArr[1].value * 2 * self.data.unitArr[4].value).toFixed(2)),
        'unitArr[5].isDisabled': true
      })
    }
  } else if (self.data.unitArr[5].value != "" && (self.data.unitArr[4].value == "" || self.data.unitArr[4].isDisabled == true)) {
    if (value == "" && self.data.unitArr[2].value == "") {
      self.setData({
        'unitArr[4].value': "",
        'unitArr[4].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[4].value': parseFloat((self.data.unitArr[5].value / (self.data.unitArr[1].value * 2)).toFixed(2)),
        'unitArr[4].isDisabled': true
      })
    }
  }
}

function case4(self, value) {
  self.setData({
    'unitArr[4].value': value,
  })
  if (self.data.unitArr[1].value != "" && (self.data.unitArr[5].value == "" || self.data.unitArr[5].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[5].value': "",
        'unitArr[5].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[5].value': parseFloat((self.data.unitArr[1].value * 2 * (self.data.unitArr[4].value)).toFixed(2)),
        'unitArr[5].isDisabled': true
      })
    }
  } else if (self.data.unitArr[5].value != "" && (self.data.unitArr[1].value == "" || self.data.unitArr[0].isDisabled == true || self.data.unitArr[1].isDisabled == true || self.data.unitArr[2].isDisabled == true)) {
    // if ((self.data.unitArr[5].value / self.data.unitArr[4].value * 100 - parseInt(self.data.unitArr[5].value / self.data.unitArr[4].value * 10) * 10) >= 5) {
    //   var isJinWei = 1;
    // } else {
    //   var isJinWei = 0;
    // }

    if (value == "") {
      self.setData({
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
    else {
      self.setData({
        'unitArr[1].value': parseFloat((self.data.unitArr[5].value / self.data.unitArr[4].value / 2).toFixed(5)),
        'unitArr[1].isDisabled': true,
        'unitArr[0].value': parseFloat((self.data.unitArr[5].value / self.data.unitArr[4].value * 500).toFixed(2)),
        'unitArr[0].isDisabled': true,
        'unitArr[2].value': parseInt((self.data.unitArr[5].value / self.data.unitArr[4].value).toFixed(2)),
        'unitArr[2].isDisabled': true,
        'unitArr[3].value': parseFloat(((self.data.unitArr[5].value / self.data.unitArr[4].value * 10) - parseInt((self.data.unitArr[5].value / self.data.unitArr[4].value).toFixed(2)) * 10).toFixed(0)),
        'unitArr[3].isDisabled': true,
      })
    }
  }
}

function case5(self, value) {
  self.setData({
    'unitArr[5].value': value,
  })
  if (self.data.unitArr[1].value != "" && (self.data.unitArr[4].value == "" || self.data.unitArr[4].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[4].value': "",
        'unitArr[4].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[4].value': parseFloat((self.data.unitArr[5].value / (self.data.unitArr[1].value * 2)).toFixed(2)),
        'unitArr[4].isDisabled': true
      })
    }
  } else if (self.data.unitArr[4].value != "" && (self.data.unitArr[1].value == "" || self.data.unitArr[0].isDisabled == true || self.data.unitArr[1].isDisabled == true || self.data.unitArr[2].isDisabled == true)) {
    // if ((self.data.unitArr[5].value / self.data.unitArr[4].value * 100 - parseInt(self.data.unitArr[5].value / self.data.unitArr[4].value * 10) * 10) >= 5) {
    //   var isJinWei = 1;
    // } else {
    //   var isJinWei = 0;
    // }

    if (value == "") {
      self.setData({
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
    else {
      self.setData({
        'unitArr[1].value': parseFloat((self.data.unitArr[5].value / self.data.unitArr[4].value / 2).toFixed(5)),
        'unitArr[1].isDisabled': true,
        'unitArr[0].value': parseFloat((self.data.unitArr[5].value / self.data.unitArr[4].value * 500).toFixed(2)),
        'unitArr[0].isDisabled': true,
        'unitArr[2].value': parseInt((self.data.unitArr[5].value / self.data.unitArr[4].value).toFixed(2)),
        'unitArr[2].isDisabled': true,
        'unitArr[3].value': parseFloat(((self.data.unitArr[5].value / self.data.unitArr[4].value * 10) - parseInt((self.data.unitArr[5].value / self.data.unitArr[4].value).toFixed(2)) * 10).toFixed(0)),
        'unitArr[3].isDisabled': true,
      })
    }
  }
}

function case6(self, value) {
  self.setData({
    'unitArr[6].value': value,
  })
  if ((self.data.unitArr[7].isDisabled == true && self.data.unitArr[8].isDisabled == true) || (self.data.unitArr[8].value != "" && (self.data.unitArr[7].value == "" || self.data.unitArr[7].isDisabled == true))) {
    if (value == "") {
      self.setData({
        'unitArr[7].value': "",
        'unitArr[7].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[7].value': parseFloat((self.data.unitArr[6].value / self.data.unitArr[8].value).toFixed(2)),
        'unitArr[7].isDisabled': true
      })
    }
  }
  else if (self.data.unitArr[7].value != "" && (self.data.unitArr[8].value == "" || self.data.unitArr[8].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[8].value': "",
        'unitArr[8].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[8].value': parseFloat((self.data.unitArr[6].value / self.data.unitArr[7].value).toFixed(2)),
        'unitArr[8].isDisabled': true
      })
    }
  }
  if (self.data.unitArr[7].value != '' && self.data.unitArr[7].isDisabled == false) {
    if ((self.data.unitArr[9].value != '' && self.data.unitArr[9].isDisabled == false) && (self.data.unitArr[10].value == '' || self.data.unitArr[10].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[10].value': "",
          'unitArr[10].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[10].value': parseFloat((100 * self.data.unitArr[8].value / self.data.unitArr[9].value).toFixed(2)),
          'unitArr[10].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[10].value != '' && self.data.unitArr[10].isDisabled == false) && (self.data.unitArr[9].value == '' || self.data.unitArr[9].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[9].value': "",
          'unitArr[9].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[9].value': parseFloat((100 * self.data.unitArr[8].value / self.data.unitArr[10].value).toFixed(2)),
          'unitArr[9].isDisabled': true,
        })
      }
    }
    if ((self.data.unitArr[12].value != '' && self.data.unitArr[12].isDisabled == false) && (self.data.unitArr[13].value == '' || self.data.unitArr[13].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[13].value': "",
          'unitArr[13].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[13].value': parseFloat((self.data.unitArr[8].value / self.data.unitArr[12].value).toFixed(2)),
          'unitArr[13].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[13].value != '' && self.data.unitArr[13].isDisabled == false) && (self.data.unitArr[12].value == '' || self.data.unitArr[12].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[12].value': "",
          'unitArr[12].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[12].value': parseFloat((self.data.unitArr[8].value / self.data.unitArr[13].value).toFixed(2)),
          'unitArr[12].isDisabled': true,
        })
      }
    }
  }
}

function case7(self, value) {
  self.setData({
    'unitArr[7].value': value,
  })
  if ((self.data.unitArr[6].isDisabled == true && self.data.unitArr[8].isDisabled == true) || (self.data.unitArr[8].value != "" && (self.data.unitArr[6].value == "" || self.data.unitArr[6].isDisabled == true))) {
    if (value == "") {
      self.setData({
        'unitArr[6].value': "",
        'unitArr[6].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[6].value': parseFloat((self.data.unitArr[7].value * self.data.unitArr[8].value).toFixed(2)),
        'unitArr[6].isDisabled': true
      })
    }
  }
  else if (self.data.unitArr[6].value != "" && (self.data.unitArr[8].value == "" || self.data.unitArr[8].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[8].value': "",
        'unitArr[8].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[8].value': parseFloat((self.data.unitArr[6].value / self.data.unitArr[7].value).toFixed(2)),
        'unitArr[8].isDisabled': true
      })
    }
  }
  if (self.data.unitArr[6].value != '' && self.data.unitArr[6].isDisabled == false) {
    if ((self.data.unitArr[9].value != '' && self.data.unitArr[9].isDisabled == false) && (self.data.unitArr[10].value == '' || self.data.unitArr[10].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[10].value': "",
          'unitArr[10].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[10].value': parseFloat((100 * self.data.unitArr[8].value / self.data.unitArr[9].value).toFixed(2)),
          'unitArr[10].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[10].value != '' && self.data.unitArr[10].isDisabled == false) && (self.data.unitArr[9].value == '' || self.data.unitArr[9].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[9].value': "",
          'unitArr[9].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[9].value': parseFloat((100 * self.data.unitArr[8].value / self.data.unitArr[10].value).toFixed(2)),
          'unitArr[9].isDisabled': true,
        })
      }
    }
    if ((self.data.unitArr[12].value != '' && self.data.unitArr[12].isDisabled == false) && (self.data.unitArr[13].value == '' || self.data.unitArr[13].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[13].value': "",
          'unitArr[13].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[13].value': parseFloat((self.data.unitArr[8].value / self.data.unitArr[12].value).toFixed(2)),
          'unitArr[13].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[13].value != '' && self.data.unitArr[13].isDisabled == false) && (self.data.unitArr[12].value == '' || self.data.unitArr[12].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[12].value': "",
          'unitArr[12].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[12].value': parseFloat((self.data.unitArr[8].value / self.data.unitArr[13].value).toFixed(2)),
          'unitArr[12].isDisabled': true,
        })
      }
    }
  }
}

function case8(self, value) {
  self.setData({
    'unitArr[8].value': value,
  })
  if (self.data.unitArr[7].value != "" && (self.data.unitArr[6].value == "" || self.data.unitArr[6].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[6].value': "",
        'unitArr[6].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[6].value': parseFloat((self.data.unitArr[7].value * self.data.unitArr[8].value).toFixed(2)),
        'unitArr[6].isDisabled': true
      })
    }
  }
  else if (self.data.unitArr[6].value != "" && (self.data.unitArr[7].value == "" || self.data.unitArr[7].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[7].value': "",
        'unitArr[7].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[7].value': parseFloat((self.data.unitArr[6].value / self.data.unitArr[8].value).toFixed(2)),
        'unitArr[7].isDisabled': true
      })
    }
  }
  if (self.data.unitArr[9].value != "" && (self.data.unitArr[10].value == "" || self.data.unitArr[10].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[10].value': "",
        'unitArr[10].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[10].value': parseFloat((100 * self.data.unitArr[8].value / self.data.unitArr[9].value).toFixed(2)),
        'unitArr[10].isDisabled': true
      })
    }
  }
  else if (self.data.unitArr[10].value != "" && (self.data.unitArr[9].value == "" || self.data.unitArr[9].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[9].value': "",
        'unitArr[9].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[9].value': parseFloat((100 * self.data.unitArr[8].value / self.data.unitArr[10].value).toFixed(2)),
        'unitArr[9].isDisabled': true
      })
    }
  }
  if (self.data.unitArr[12].value != "" && (self.data.unitArr[13].value == "" || self.data.unitArr[13].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[13].value': "",
        'unitArr[13].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[13].value': parseFloat((self.data.unitArr[8].value / self.data.unitArr[12].value).toFixed(2)),
        'unitArr[13].isDisabled': true
      })
    }
  }
  else if (self.data.unitArr[13].value != "" && (self.data.unitArr[12].value == "" || self.data.unitArr[12].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[12].value': "",
        'unitArr[12].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[12].value': parseFloat((self.data.unitArr[8].value / self.data.unitArr[13].value).toFixed(2)),
        'unitArr[12].isDisabled': true
      })
    }
  }
  if (self.data.unitArr[10].value != '' && self.data.unitArr[10].isDisabled == false) {
    if ((self.data.unitArr[11].value != '' && self.data.unitArr[11].isDisabled == false) && (self.data.unitArr[13].value == '' || self.data.unitArr[13].isDisabled == true)) {
      if (self.data.unitArr[9].value == "") {
        self.setData({
          'unitArr[13].value': "",
          'unitArr[13].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[13].value': parseFloat((self.data.unitArr[9].value * self.data.unitArr[11].value / 100).toFixed(2)),
          'unitArr[13].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[13].value != '' && self.data.unitArr[13].isDisabled == false) && (self.data.unitArr[11].value == '' || self.data.unitArr[11].isDisabled == true)) {
      if (self.data.unitArr[9].value == "") {
        self.setData({
          'unitArr[11].value': "",
          'unitArr[11].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[11].value': parseFloat((100 * self.data.unitArr[13].value / self.data.unitArr[9].value).toFixed(2)),
          'unitArr[11].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[9].value != '' && self.data.unitArr[9].isDisabled == false) {
    if ((self.data.unitArr[11].value != '' && self.data.unitArr[11].isDisabled == false) && (self.data.unitArr[12].value == '' || self.data.unitArr[12].isDisabled == true)) {
      if (self.data.unitArr[10].value == "") {
        self.setData({
          'unitArr[12].value': "",
          'unitArr[12].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[12].value': parseFloat((self.data.unitArr[10].value / self.data.unitArr[11].value).toFixed(2)),
          'unitArr[12].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[12].value != '' && self.data.unitArr[12].isDisabled == false) && (self.data.unitArr[11].value == '' || self.data.unitArr[11].isDisabled == true)) {
      if (self.data.unitArr[10].value == "") {
        self.setData({
          'unitArr[11].value': "",
          'unitArr[11].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[11].value': parseFloat((self.data.unitArr[10].value / self.data.unitArr[12].value).toFixed(2)),
          'unitArr[11].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[13].value != '' && self.data.unitArr[13].isDisabled == false) {
    if ((self.data.unitArr[10].value != '' && self.data.unitArr[10].isDisabled == false) && (self.data.unitArr[11].value == '' || self.data.unitArr[11].isDisabled == true)) {
      if (self.data.unitArr[12].value == "") {
        self.setData({
          'unitArr[11].value': "",
          'unitArr[11].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[11].value': parseFloat((self.data.unitArr[10].value / self.data.unitArr[12].value).toFixed(2)),
          'unitArr[11].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[11].value != '' && self.data.unitArr[11].isDisabled == false) && (self.data.unitArr[10].value == '' || self.data.unitArr[10].isDisabled == true)) {
      if (self.data.unitArr[12].value == "") {
        self.setData({
          'unitArr[10].value': "",
          'unitArr[10].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[10].value': parseFloat((self.data.unitArr[11].value * self.data.unitArr[12].value).toFixed(2)),
          'unitArr[10].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[12].value != '' && self.data.unitArr[12].isDisabled == false) {
    if ((self.data.unitArr[9].value != '' && self.data.unitArr[9].isDisabled == false) && (self.data.unitArr[11].value == '' || self.data.unitArr[11].isDisabled == true)) {
      if (self.data.unitArr[13].value == "") {
        self.setData({
          'unitArr[11].value': "",
          'unitArr[11].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[11].value': parseFloat((100 * self.data.unitArr[13].value / self.data.unitArr[9].value).toFixed(2)),
          'unitArr[11].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[11].value != '' && self.data.unitArr[11].isDisabled == false) && (self.data.unitArr[9].value == '' || self.data.unitArr[9].isDisabled == true)) {
      if (self.data.unitArr[13].value == "") {
        self.setData({
          'unitArr[9].value': "",
          'unitArr[9].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[9].value': parseFloat((100 * self.data.unitArr[13].value / self.data.unitArr[11].value).toFixed(2)),
          'unitArr[9].isDisabled': true,
        })
      }
    }
  }
}

function case9(self, value) {
  self.setData({
    'unitArr[9].value': value,
  })
  if (self.data.unitArr[8].value != "" && (self.data.unitArr[10].value == "" || self.data.unitArr[10].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[10].value': "",
        'unitArr[10].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[10].value': parseFloat((100 * self.data.unitArr[8].value / self.data.unitArr[9].value).toFixed(2)),
        'unitArr[10].isDisabled': true
      })
    }
  }
  else if (self.data.unitArr[10].value != "" && (self.data.unitArr[8].value == "" || self.data.unitArr[8].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[8].value': "",
        'unitArr[8].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[8].value': parseFloat((self.data.unitArr[9].value * self.data.unitArr[10].value / 100).toFixed(2)),
        'unitArr[8].isDisabled': true
      })
    }
  }
  if (self.data.unitArr[11].value != "" && (self.data.unitArr[13].value == "" || self.data.unitArr[13].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[13].value': "",
        'unitArr[13].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[13].value': parseFloat((self.data.unitArr[9].value * self.data.unitArr[11].value / 100).toFixed(2)),
        'unitArr[13].isDisabled': true
      })
    }
  }
  else if (self.data.unitArr[13].value != "" && (self.data.unitArr[11].value == "" || self.data.unitArr[11].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[11].value': "",
        'unitArr[11].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[11].value': parseFloat((100 * self.data.unitArr[13].value / self.data.unitArr[9].value).toFixed(2)),
        'unitArr[11].isDisabled': true
      })
    }
  }
  if (self.data.unitArr[10].value != '' && self.data.unitArr[10].isDisabled == false) {
    if ((self.data.unitArr[6].value != '' && self.data.unitArr[6].isDisabled == false) && (self.data.unitArr[7].value == '' || self.data.unitArr[7].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[7].value': "",
          'unitArr[7].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[7].value': parseFloat((self.data.unitArr[6].value / self.data.unitArr[8].value).toFixed(2)),
          'unitArr[7].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[7].value != '' && self.data.unitArr[7].isDisabled == false) && (self.data.unitArr[6].value == '' || self.data.unitArr[6].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[6].value': "",
          'unitArr[6].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[6].value': parseFloat((self.data.unitArr[7].value * self.data.unitArr[8].value).toFixed(2)),
          'unitArr[6].isDisabled': true,
        })
      }
    }
    if ((self.data.unitArr[12].value != '' && self.data.unitArr[12].isDisabled == false) && (self.data.unitArr[13].value == '' || self.data.unitArr[13].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[13].value': "",
          'unitArr[13].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[13].value': parseFloat((self.data.unitArr[8].value / self.data.unitArr[12].value).toFixed(2)),
          'unitArr[13].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[13].value != '' && self.data.unitArr[13].isDisabled == false) && (self.data.unitArr[12].value == '' || self.data.unitArr[12].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[12].value': "",
          'unitArr[12].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[12].value': parseFloat((self.data.unitArr[8].value / self.data.unitArr[13].value).toFixed(2)),
          'unitArr[12].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[8].value != '' && self.data.unitArr[8].isDisabled == false) {
    if ((self.data.unitArr[11].value != '' && self.data.unitArr[11].isDisabled == false) && (self.data.unitArr[12].value == '' || self.data.unitArr[12].isDisabled == true)) {
      if (self.data.unitArr[10].value == "") {
        self.setData({
          'unitArr[12].value': "",
          'unitArr[12].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[12].value': parseFloat((self.data.unitArr[10].value / self.data.unitArr[11].value).toFixed(2)),
          'unitArr[12].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[12].value != '' && self.data.unitArr[12].isDisabled == false) && (self.data.unitArr[11].value == '' || self.data.unitArr[11].isDisabled == true)) {
      if (self.data.unitArr[10].value == "") {
        self.setData({
          'unitArr[11].value': "",
          'unitArr[11].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[11].value': parseFloat((self.data.unitArr[10].value / self.data.unitArr[12].value).toFixed(2)),
          'unitArr[11].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[13].value != '' && self.data.unitArr[13].isDisabled == false) {
    if ((self.data.unitArr[10].value != '' && self.data.unitArr[10].isDisabled == false) && (self.data.unitArr[12].value == '' || self.data.unitArr[12].isDisabled == true)) {
      if (self.data.unitArr[11].value == "") {
        self.setData({
          'unitArr[12].value': "",
          'unitArr[12].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[12].value': parseFloat((self.data.unitArr[10].value / self.data.unitArr[11].value).toFixed(2)),
          'unitArr[12].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[12].value != '' && self.data.unitArr[12].isDisabled == false) && (self.data.unitArr[10].value == '' || self.data.unitArr[10].isDisabled == true)) {
      if (self.data.unitArr[11].value == "") {
        self.setData({
          'unitArr[10].value': "",
          'unitArr[10].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[10].value': parseFloat((self.data.unitArr[11].value * self.data.unitArr[12].value).toFixed(2)),
          'unitArr[10].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[11].value != '' && self.data.unitArr[11].isDisabled == false) {
    if ((self.data.unitArr[8].value != '' && self.data.unitArr[8].isDisabled == false) && (self.data.unitArr[12].value == '' || self.data.unitArr[12].isDisabled == true)) {
      if (self.data.unitArr[13].value == "") {
        self.setData({
          'unitArr[12].value': "",
          'unitArr[12].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[12].value': parseFloat((self.data.unitArr[8].value / self.data.unitArr[13].value).toFixed(2)),
          'unitArr[12].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[12].value != '' && self.data.unitArr[12].isDisabled == false) && (self.data.unitArr[8].value == '' || self.data.unitArr[8].isDisabled == true)) {
      if (self.data.unitArr[13].value == "") {
        self.setData({
          'unitArr[8].value': "",
          'unitArr[8].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[8].value': parseFloat((self.data.unitArr[12].value * self.data.unitArr[13].value).toFixed(2)),
          'unitArr[8].isDisabled': true,
        })
      }
    }
  }
}

function case10(self, value) {
  self.setData({
    'unitArr[10].value': value,
  })
  if (self.data.unitArr[9].value != "" && (self.data.unitArr[8].value == "" || self.data.unitArr[8].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[8].value': "",
        'unitArr[8].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[8].value': parseFloat((self.data.unitArr[9].value * self.data.unitArr[10].value / 100).toFixed(2)),
        'unitArr[8].isDisabled': true
      })
    }
  }
  else if (self.data.unitArr[8].value != "" && (self.data.unitArr[9].value == "" || self.data.unitArr[9].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[9].value': "",
        'unitArr[9].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[9].value': parseFloat((100 * self.data.unitArr[8].value / self.data.unitArr[10].value).toFixed(2)),
        'unitArr[9].isDisabled': true
      })
    }
  }
  if (self.data.unitArr[11].value != "" && (self.data.unitArr[12].value == "" || self.data.unitArr[12].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[12].value': "",
        'unitArr[12].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[12].value': parseFloat((self.data.unitArr[10].value / self.data.unitArr[11].value).toFixed(2)),
        'unitArr[12].isDisabled': true
      })
    }
  } else if (self.data.unitArr[12].value != "" && (self.data.unitArr[11].value == "" || self.data.unitArr[11].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[11].value': "",
        'unitArr[11].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[11].value': parseFloat((self.data.unitArr[10].value / self.data.unitArr[12].value).toFixed(2)),
        'unitArr[11].isDisabled': true
      })
    }
  }
  if (self.data.unitArr[9].value != '' && self.data.unitArr[9].isDisabled == false) {
    if ((self.data.unitArr[6].value != '' && self.data.unitArr[6].isDisabled == false) && (self.data.unitArr[7].value == '' || self.data.unitArr[7].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[7].value': "",
          'unitArr[7].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[7].value': parseFloat((self.data.unitArr[6].value / self.data.unitArr[8].value).toFixed(2)),
          'unitArr[7].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[7].value != '' && self.data.unitArr[7].isDisabled == false) && (self.data.unitArr[6].value == '' || self.data.unitArr[6].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[6].value': "",
          'unitArr[6].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[6].value': parseFloat((self.data.unitArr[7].value * self.data.unitArr[8].value).toFixed(2)),
          'unitArr[6].isDisabled': true,
        })
      }
    }
    if ((self.data.unitArr[12].value != '' && self.data.unitArr[12].isDisabled == false) && (self.data.unitArr[13].value == '' || self.data.unitArr[13].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[13].value': "",
          'unitArr[13].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[13].value': parseFloat((self.data.unitArr[8].value / self.data.unitArr[12].value).toFixed(2)),
          'unitArr[13].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[13].value != '' && self.data.unitArr[13].isDisabled == false) && (self.data.unitArr[12].value == '' || self.data.unitArr[12].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[12].value': "",
          'unitArr[12].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[12].value': parseFloat((self.data.unitArr[8].value / self.data.unitArr[13].value).toFixed(2)),
          'unitArr[12].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[8].value != '' && self.data.unitArr[8].isDisabled == false) {
    if ((self.data.unitArr[11].value != '' && self.data.unitArr[11].isDisabled == false) && (self.data.unitArr[13].value == '' || self.data.unitArr[13].isDisabled == true)) {
      if (self.data.unitArr[9].value == "") {
        self.setData({
          'unitArr[13].value': "",
          'unitArr[13].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[13].value': parseFloat((self.data.unitArr[9].value * self.data.unitArr[11].value / 100).toFixed(2)),
          'unitArr[13].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[13].value != '' && self.data.unitArr[13].isDisabled == false) && (self.data.unitArr[11].value == '' || self.data.unitArr[11].isDisabled == true)) {
      if (self.data.unitArr[9].value == "") {
        self.setData({
          'unitArr[11].value': "",
          'unitArr[11].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[11].value': parseFloat((100 * self.data.unitArr[13].value / self.data.unitArr[9].value).toFixed(2)),
          'unitArr[11].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[12].value != '' && self.data.unitArr[12].isDisabled == false) {
    if ((self.data.unitArr[9].value != '' && self.data.unitArr[9].isDisabled == false) && (self.data.unitArr[13].value == '' || self.data.unitArr[13].isDisabled == true)) {
      if (self.data.unitArr[11].value == "") {
        self.setData({
          'unitArr[13].value': "",
          'unitArr[13].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[13].value': parseFloat((self.data.unitArr[9].value * self.data.unitArr[11].value / 100).toFixed(2)),
          'unitArr[13].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[13].value != '' && self.data.unitArr[13].isDisabled == false) && (self.data.unitArr[9].value == '' || self.data.unitArr[9].isDisabled == true)) {
      if (self.data.unitArr[11].value == "") {
        self.setData({
          'unitArr[9].value': "",
          'unitArr[9].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[9].value': parseFloat((100 * self.data.unitArr[13].value / self.data.unitArr[11].value).toFixed(2)),
          'unitArr[9].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[11].value != '' && self.data.unitArr[11].isDisabled == false) {
    if ((self.data.unitArr[8].value != '' && self.data.unitArr[8].isDisabled == false) && (self.data.unitArr[13].value == '' || self.data.unitArr[13].isDisabled == true)) {
      if (self.data.unitArr[12].value == "") {
        self.setData({
          'unitArr[13].value': "",
          'unitArr[13].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[13].value': parseFloat((self.data.unitArr[8].value / self.data.unitArr[12].value).toFixed(2)),
          'unitArr[13].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[13].value != '' && self.data.unitArr[13].isDisabled == false) && (self.data.unitArr[8].value == '' || self.data.unitArr[8].isDisabled == true)) {
      if (self.data.unitArr[12].value == "") {
        self.setData({
          'unitArr[8].value': "",
          'unitArr[8].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[8].value': parseFloat((self.data.unitArr[12].value * self.data.unitArr[13].value).toFixed(2)),
          'unitArr[8].isDisabled': true,
        })
      }
    }
  }
}

function case11(self, value) {
  self.setData({
    'unitArr[11].value': value,
  })
  if (self.data.unitArr[10].value != "" && (self.data.unitArr[12].value == "" || self.data.unitArr[12].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[12].value': "",
        'unitArr[12].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[12].value': parseFloat((self.data.unitArr[10].value / self.data.unitArr[11].value).toFixed(2)),
        'unitArr[12].isDisabled': true
      })
    }
  }
  else if (self.data.unitArr[12].value != "" && (self.data.unitArr[10].value == "" || self.data.unitArr[10].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[10].value': "",
        'unitArr[10].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[10].value': parseFloat((self.data.unitArr[11].value * self.data.unitArr[12].value).toFixed(2)),
        'unitArr[10].isDisabled': true
      })
    }
  }
  if (self.data.unitArr[9].value != "" && (self.data.unitArr[13].value == "" || self.data.unitArr[13].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[13].value': "",
        'unitArr[13].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[13].value': parseFloat((self.data.unitArr[9].value * self.data.unitArr[11].value / 100).toFixed(2)),
        'unitArr[13].isDisabled': true
      })
    }
  }
  else if (self.data.unitArr[13].value != "" && (self.data.unitArr[9].value == "" || self.data.unitArr[9].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[9].value': "",
        'unitArr[9].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[9].value': parseFloat((100 * self.data.unitArr[13].value / self.data.unitArr[11].value).toFixed(2)),
        'unitArr[9].isDisabled': true
      })
    }
  }
  if (self.data.unitArr[13].value != '' && self.data.unitArr[13].isDisabled == false) {
    if ((self.data.unitArr[8].value != '' && self.data.unitArr[8].isDisabled == false) && (self.data.unitArr[10].value == '' || self.data.unitArr[10].isDisabled == true)) {
      if (self.data.unitArr[9].value == "") {
        self.setData({
          'unitArr[10].value': "",
          'unitArr[10].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[10].value': parseFloat((100 * self.data.unitArr[8].value / self.data.unitArr[9].value).toFixed(2)),
          'unitArr[10].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[10].value != '' && self.data.unitArr[10].isDisabled == false) && (self.data.unitArr[8].value == '' || self.data.unitArr[8].isDisabled == true)) {
      if (self.data.unitArr[9].value == "") {
        self.setData({
          'unitArr[8].value': "",
          'unitArr[8].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[8].value': parseFloat((self.data.unitArr[9].value * self.data.unitArr[10].value / 100).toFixed(2)),
          'unitArr[8].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[12].value != '' && self.data.unitArr[12].isDisabled == false) {
    if ((self.data.unitArr[8].value != '' && self.data.unitArr[8].isDisabled == false) && (self.data.unitArr[9].value == '' || self.data.unitArr[9].isDisabled == true)) {
      if (self.data.unitArr[10].value == "") {
        self.setData({
          'unitArr[9].value': "",
          'unitArr[9].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[9].value': parseFloat((100 * self.data.unitArr[8].value / self.data.unitArr[10].value).toFixed(2)),
          'unitArr[9].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[9].value != '' && self.data.unitArr[9].isDisabled == false) && (self.data.unitArr[8].value == '' || self.data.unitArr[8].isDisabled == true)) {
      if (self.data.unitArr[10].value == "") {
        self.setData({
          'unitArr[8].value': "",
          'unitArr[8].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[8].value': parseFloat((self.data.unitArr[9].value * self.data.unitArr[10].value / 100).toFixed(2)),
          'unitArr[8].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[10].value != '' && self.data.unitArr[10].isDisabled == false) {
    if ((self.data.unitArr[8].value != '' && self.data.unitArr[8].isDisabled == false) && (self.data.unitArr[13].value == '' || self.data.unitArr[13].isDisabled == true)) {
      if (self.data.unitArr[12].value == "") {
        self.setData({
          'unitArr[13].value': "",
          'unitArr[13].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[13].value': parseFloat((self.data.unitArr[8].value / self.data.unitArr[12].value).toFixed(2)),
          'unitArr[13].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[13].value != '' && self.data.unitArr[13].isDisabled == false) && (self.data.unitArr[8].value == '' || self.data.unitArr[8].isDisabled == true)) {
      if (self.data.unitArr[12].value == "") {
        self.setData({
          'unitArr[8].value': "",
          'unitArr[8].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[8].value': parseFloat((self.data.unitArr[12].value * self.data.unitArr[13].value).toFixed(2)),
          'unitArr[8].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[9].value != '' && self.data.unitArr[9].isDisabled == false) {
    if ((self.data.unitArr[8].value != '' && self.data.unitArr[8].isDisabled == false) && (self.data.unitArr[12].value == '' || self.data.unitArr[12].isDisabled == true)) {
      if (self.data.unitArr[13].value == "") {
        self.setData({
          'unitArr[12].value': "",
          'unitArr[12].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[12].value': parseFloat((self.data.unitArr[8].value / self.data.unitArr[13].value).toFixed(2)),
          'unitArr[12].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[12].value != '' && self.data.unitArr[12].isDisabled == false) && (self.data.unitArr[8].value == '' || self.data.unitArr[8].isDisabled == true)) {
      if (self.data.unitArr[13].value == "") {
        self.setData({
          'unitArr[8].value': "",
          'unitArr[8].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[8].value': parseFloat((self.data.unitArr[12].value * self.data.unitArr[13].value).toFixed(2)),
          'unitArr[8].isDisabled': true,
        })
      }
    }
  }
}

function case12(self, value) {
  self.setData({
    'unitArr[12].value': value,
  })
  if (self.data.unitArr[10].value != "" && (self.data.unitArr[11].value == "" || self.data.unitArr[11].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[11].value': "",
        'unitArr[11].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[11].value': parseFloat((self.data.unitArr[10].value / self.data.unitArr[12].value).toFixed(2)),
        'unitArr[11].isDisabled': true
      })
    }
  }
  else if (self.data.unitArr[11].value != "" && (self.data.unitArr[10].value == "" || self.data.unitArr[10].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[10].value': "",
        'unitArr[10].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[10].value': parseFloat((self.data.unitArr[11].value * self.data.unitArr[12].value).toFixed(2)),
        'unitArr[10].isDisabled': true
      })
    }
  }
  if (self.data.unitArr[8].value != "" && (self.data.unitArr[13].value == "" || self.data.unitArr[13].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[13].value': "",
        'unitArr[13].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[13].value': parseFloat((self.data.unitArr[8].value / self.data.unitArr[12].value).toFixed(2)),
        'unitArr[13].isDisabled': true
      })
    }
  } else if (self.data.unitArr[13].value != "" && (self.data.unitArr[8].value == "" || self.data.unitArr[8].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[8].value': "",
        'unitArr[8].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[8].value': parseFloat((self.data.unitArr[12].value * self.data.unitArr[13].value).toFixed(2)),
        'unitArr[8].isDisabled': true
      })
    }
  }
  if (self.data.unitArr[13].value != '' && self.data.unitArr[13].isDisabled == false) {
    if ((self.data.unitArr[6].value != '' && self.data.unitArr[6].isDisabled == false) && (self.data.unitArr[7].value == '' || self.data.unitArr[7].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[7].value': "",
          'unitArr[7].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[7].value': parseFloat((self.data.unitArr[6].value / self.data.unitArr[8].value).toFixed(2)),
          'unitArr[7].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[7].value != '' && self.data.unitArr[7].isDisabled == false) && (self.data.unitArr[6].value == '' || self.data.unitArr[6].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[6].value': "",
          'unitArr[6].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[6].value': parseFloat((self.data.unitArr[7].value * self.data.unitArr[8].value).toFixed(2)),
          'unitArr[6].isDisabled': true,
        })
      }
    }
    if ((self.data.unitArr[9].value != '' && self.data.unitArr[9].isDisabled == false) && (self.data.unitArr[10].value == '' || self.data.unitArr[10].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[10].value': "",
          'unitArr[10].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[10].value': parseFloat((100 * self.data.unitArr[8].value / self.data.unitArr[9].value).toFixed(2)),
          'unitArr[10].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[10].value != '' && self.data.unitArr[10].isDisabled == false) && (self.data.unitArr[9].value == '' || self.data.unitArr[9].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[9].value': "",
          'unitArr[9].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[9].value': parseFloat((100 * self.data.unitArr[8].value / self.data.unitArr[10].value).toFixed(2)),
          'unitArr[9].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[11].value != '' && self.data.unitArr[11].isDisabled == false) {
    if ((self.data.unitArr[8].value != '' && self.data.unitArr[8].isDisabled == false) && (self.data.unitArr[9].value == '' || self.data.unitArr[9].isDisabled == true)) {
      if (self.data.unitArr[10].value == "") {
        self.setData({
          'unitArr[9].value': "",
          'unitArr[9].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[9].value': parseFloat((100 * self.data.unitArr[8].value / self.data.unitArr[10].value).toFixed(2)),
          'unitArr[9].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[9].value != '' && self.data.unitArr[9].isDisabled == false) && (self.data.unitArr[8].value == '' || self.data.unitArr[8].isDisabled == true)) {
      if (self.data.unitArr[10].value == "") {
        self.setData({
          'unitArr[8].value': "",
          'unitArr[8].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[8].value': parseFloat((self.data.unitArr[9].value * self.data.unitArr[10].value / 100).toFixed(2)),
          'unitArr[8].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[10].value != '' && self.data.unitArr[10].isDisabled == false) {
    if ((self.data.unitArr[9].value != '' && self.data.unitArr[9].isDisabled == false) && (self.data.unitArr[13].value == '' || self.data.unitArr[13].isDisabled == true)) {
      if (self.data.unitArr[11].value == "") {
        self.setData({
          'unitArr[13].value': "",
          'unitArr[13].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[13].value': parseFloat((self.data.unitArr[9].value * self.data.unitArr[11].value / 100).toFixed(2)),
          'unitArr[13].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[13].value != '' && self.data.unitArr[13].isDisabled == false) && (self.data.unitArr[9].value == '' || self.data.unitArr[9].isDisabled == true)) {
      if (self.data.unitArr[11].value == "") {
        self.setData({
          'unitArr[9].value': "",
          'unitArr[9].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[9].value': parseFloat((100 * self.data.unitArr[13].value / self.data.unitArr[11].value).toFixed(2)),
          'unitArr[9].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[8].value != '' && self.data.unitArr[8].isDisabled == false) {
    if ((self.data.unitArr[9].value != '' && self.data.unitArr[9].isDisabled == false) && (self.data.unitArr[11].value == '' || self.data.unitArr[11].isDisabled == true)) {
      if (self.data.unitArr[13].value == "") {
        self.setData({
          'unitArr[11].value': "",
          'unitArr[11].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[11].value': parseFloat((100 * self.data.unitArr[13].value / self.data.unitArr[9].value).toFixed(2)),
          'unitArr[11].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[11].value != '' && self.data.unitArr[11].isDisabled == false) && (self.data.unitArr[9].value == '' || self.data.unitArr[9].isDisabled == true)) {
      if (self.data.unitArr[13].value == "") {
        self.setData({
          'unitArr[9].value': "",
          'unitArr[9].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[9].value': parseFloat((100 * self.data.unitArr[13].value / self.data.unitArr[11].value).toFixed(2)),
          'unitArr[9].isDisabled': true,
        })
      }
    }
  }
}

function case13(self, value) {
  self.setData({
    'unitArr[13].value': value,
  })
  if (self.data.unitArr[9].value != "" && (self.data.unitArr[11].value == "" || self.data.unitArr[11].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[11].value': "",
        'unitArr[11].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[11].value': parseFloat((100 * self.data.unitArr[13].value / self.data.unitArr[9].value).toFixed(2)),
        'unitArr[11].isDisabled': true
      })
    }
  }
  else if (self.data.unitArr[11].value != "" && (self.data.unitArr[9].value == "" || self.data.unitArr[9].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[9].value': "",
        'unitArr[9].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[9].value': parseFloat((100 * self.data.unitArr[13].value / self.data.unitArr[11].value).toFixed(2)),
        'unitArr[9].isDisabled': true
      })
    }
  }
  if (self.data.unitArr[8].value != "" && (self.data.unitArr[12].value == "" || self.data.unitArr[12].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[12].value': "",
        'unitArr[12].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[12].value': parseFloat((self.data.unitArr[8].value / self.data.unitArr[13].value).toFixed(2)),
        'unitArr[12].isDisabled': true
      })
    }
  }
  else if (self.data.unitArr[12].value != "" && (self.data.unitArr[8].value == "" || self.data.unitArr[8].isDisabled == true)) {
    if (value == "") {
      self.setData({
        'unitArr[8].value': "",
        'unitArr[8].isDisabled': false,
      })
    }
    else {
      self.setData({
        'unitArr[8].value': parseFloat((self.data.unitArr[12].value * self.data.unitArr[13].value).toFixed(2)),
        'unitArr[8].isDisabled': true
      })
    }
  }
  if (self.data.unitArr[12].value != '' && self.data.unitArr[12].isDisabled == false) {
    if ((self.data.unitArr[6].value != '' && self.data.unitArr[6].isDisabled == false) && (self.data.unitArr[7].value == '' || self.data.unitArr[7].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[7].value': "",
          'unitArr[7].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[7].value': parseFloat((self.data.unitArr[6].value / self.data.unitArr[8].value).toFixed(2)),
          'unitArr[7].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[7].value != '' && self.data.unitArr[7].isDisabled == false) && (self.data.unitArr[6].value == '' || self.data.unitArr[6].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[6].value': "",
          'unitArr[6].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[6].value': parseFloat((self.data.unitArr[7].value * self.data.unitArr[8].value).toFixed(2)),
          'unitArr[6].isDisabled': true,
        })
      }
    }
    if ((self.data.unitArr[9].value != '' && self.data.unitArr[9].isDisabled == false) && (self.data.unitArr[10].value == '' || self.data.unitArr[10].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[10].value': "",
          'unitArr[10].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[10].value': parseFloat((100 * self.data.unitArr[8].value / self.data.unitArr[9].value).toFixed(2)),
          'unitArr[10].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[10].value != '' && self.data.unitArr[10].isDisabled == false) && (self.data.unitArr[9].value == '' || self.data.unitArr[9].isDisabled == true)) {
      if (self.data.unitArr[8].value == "") {
        self.setData({
          'unitArr[9].value': "",
          'unitArr[9].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[9].value': parseFloat((100 * self.data.unitArr[8].value / self.data.unitArr[10].value).toFixed(2)),
          'unitArr[9].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[11].value != '' && self.data.unitArr[11].isDisabled == false) {
    if ((self.data.unitArr[8].value != '' && self.data.unitArr[8].isDisabled == false) && (self.data.unitArr[10].value == '' || self.data.unitArr[10].isDisabled == true)) {
      if (self.data.unitArr[9].value == "") {
        self.setData({
          'unitArr[10].value': "",
          'unitArr[10].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[10].value': parseFloat((100 * self.data.unitArr[8].value / self.data.unitArr[9].value).toFixed(2)),
          'unitArr[10].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[10].value != '' && self.data.unitArr[10].isDisabled == false) && (self.data.unitArr[8].value == '' || self.data.unitArr[8].isDisabled == true)) {
      if (self.data.unitArr[9].value == "") {
        self.setData({
          'unitArr[8].value': "",
          'unitArr[8].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[8].value': parseFloat((self.data.unitArr[9].value * self.data.unitArr[10].value / 100).toFixed(2)),
          'unitArr[8].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[9].value != '' && self.data.unitArr[9].isDisabled == false) {
    if ((self.data.unitArr[10].value != '' && self.data.unitArr[10].isDisabled == false) && (self.data.unitArr[12].value == '' || self.data.unitArr[12].isDisabled == true)) {
      if (self.data.unitArr[11].value == "") {
        self.setData({
          'unitArr[12].value': "",
          'unitArr[12].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[12].value': parseFloat((self.data.unitArr[10].value / self.data.unitArr[11].value).toFixed(2)),
          'unitArr[12].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[12].value != '' && self.data.unitArr[12].isDisabled == false) && (self.data.unitArr[10].value == '' || self.data.unitArr[10].isDisabled == true)) {
      if (self.data.unitArr[11].value == "") {
        self.setData({
          'unitArr[10].value': "",
          'unitArr[10].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[10].value': parseFloat((self.data.unitArr[11].value * self.data.unitArr[12].value).toFixed(2)),
          'unitArr[10].isDisabled': true,
        })
      }
    }
  }
  if (self.data.unitArr[8].value != '' && self.data.unitArr[8].isDisabled == false) {
    if ((self.data.unitArr[10].value != '' && self.data.unitArr[10].isDisabled == false) && (self.data.unitArr[11].value == '' || self.data.unitArr[11].isDisabled == true)) {
      if (self.data.unitArr[12].value == "") {
        self.setData({
          'unitArr[11].value': "",
          'unitArr[11].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[11].value': parseFloat((self.data.unitArr[10].value / self.data.unitArr[12].value).toFixed(2)),
          'unitArr[11].isDisabled': true,
        })
      }
    }
    else if ((self.data.unitArr[11].value != '' && self.data.unitArr[11].isDisabled == false) && (self.data.unitArr[10].value == '' || self.data.unitArr[10].isDisabled == true)) {
      if (self.data.unitArr[12].value == "") {
        self.setData({
          'unitArr[10].value': "",
          'unitArr[10].isDisabled': false,
        })
      }
      else {
        self.setData({
          'unitArr[10].value': parseFloat((self.data.unitArr[11].value * self.data.unitArr[12].value).toFixed(2)),
          'unitArr[10].isDisabled': true,
        })
      }
    }
  }
}

// function caseAll(self, value) {
//   if (self.data.unitArr[6].value == "" && self.data.unitArr[7].value != "" && self.data.unitArr[8].value != ""){
//     self.setData({
//       'unitArr[6].isDisabled': true,
//     })
//   }
//   if (self.data.unitArr[7].value == "" && self.data.unitArr[6].value != "" && self.data.unitArr[8].value != "") {
//     self.setData({
//       'unitArr[7].isDisabled': true,
//     })
//   }
//   if ((self.data.unitArr[8].value == "" && self.data.unitArr[6].value != "" && self.data.unitArr[7].value != "") || (self.data.unitArr[8].value == "" && self.data.unitArr[9].value != "" && self.data.unitArr[10].value != "")) {
//     self.setData({
//       'unitArr[8].isDisabled': true,
//     })
//   }
//   if ((self.data.unitArr[9].value == "" && self.data.unitArr[8].value != "" && self.data.unitArr[10].value != "") || (self.data.unitArr[9].value == "" && self.data.unitArr[11].value != "" && self.data.unitArr[13].value != "")) {
//     self.setData({
//       'unitArr[9].isDisabled': true,
//     })
//   }
//   if ((self.data.unitArr[10].value == "" && self.data.unitArr[8].value != "" && self.data.unitArr[9].value != "") || (self.data.unitArr[10].value == "" && self.data.unitArr[11].value != "" && self.data.unitArr[12].value != "")) {
//     self.setData({
//       'unitArr[10].isDisabled': true,
//     })
//   }
//   if ((self.data.unitArr[11].value == "" && self.data.unitArr[10].value != "" && self.data.unitArr[12].value != "") || (self.data.unitArr[11].value == "" && self.data.unitArr[9].value != "" && self.data.unitArr[13].value != "")) {
//     self.setData({
//       'unitArr[11].isDisabled': true,
//     })
//   }
//   if ((self.data.unitArr[12].value == "" && self.data.unitArr[10].value != "" && self.data.unitArr[11].value != "") || (self.data.unitArr[12].value == "" && self.data.unitArr[8].value != "" && self.data.unitArr[13].value != "")) {
//     self.setData({
//       'unitArr[12].isDisabled': true,
//     })
//   }
//   if ((self.data.unitArr[13].value == "" && self.data.unitArr[9].value != "" && self.data.unitArr[11].value != "") || (self.data.unitArr[13].value == "" && self.data.unitArr[8].value != "" && self.data.unitArr[12].value != "")) {
//     self.setData({
//       'unitArr[13].isDisabled': true,
//     })
//   }
// }

module.exports = {
  case0: case0,
  case1: case1,
  case2: case2,
  case3: case3,
  case4: case4,
  case5: case5,
  case6: case6,
  case7: case7,
  case8: case8,
  case9: case9,
  case10: case10,
  case11: case11,
  case12: case12,
  case13: case13,
  // caseAll: caseAll,
}