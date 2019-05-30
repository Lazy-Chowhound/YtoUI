Page({
  data: {
    myinfo: [{ name: '张三', sex: '男', age: '33', phone: '10076', employId: 'B160412' }]
  },

  onLoad: function (options) {
    wx.request({
      url: '../yto/info/myself',
      method: 'GET',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        this.setData({
          myinfo:res.data
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

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },
  
  onShareAppMessage: function () {

  }
})