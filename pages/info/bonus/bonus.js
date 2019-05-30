Page({
  data: {
    bonus: [{
      month: '2018/08',
      employee_number: 'C275',
      name: "张三",
      basic_salary: "￥12400.00",
      allowance: "￥1800.00",
      absence: "-￥100",
      traffic: "￥200",
      pension_insurance: "￥980",
      medical_insurance: "￥120",
      housing_provident_funds: "￥700",
      tax: "￥700",
      income: "￥1200",
    }],
  },
  onLoad: function (options) {
    wx.request({
      url: '../yto/info/bonus?month=' + options.month,
      method: 'GET',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        this.setData({
          salary: res.data,
        })
      },
      fail: function (res) {
        wx.showModal({
          title: '提示',
          content: "加载失败",
        })
      }
    })
  },

  return: function () {
    wx.navigateBack({
      delta: 1
    })
  }
})