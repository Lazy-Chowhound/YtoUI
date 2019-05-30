Page({
  data: {
    
  },
  save:function(e){
    wx.request({
      url: '../yto/info/modify',
      method: 'POST',
      data:{
        name:e.detail.value.name,
        sex: e.detail.value.sex,
        age: e.detail.value.age,
        phone_number: e.detail.value.phone_number,
        employee_number: e.detail.value.employee_number,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        wx.showModal({
          title: '提示',
          content: '修改成功',
        })
      },
      fail: function (res) {
        wx.showModal({
          title: '提示',
          content: "加载失败",
        })
      }
    })
  }
})