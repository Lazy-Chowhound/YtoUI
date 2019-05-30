Page({
  data: {
    members: [{ name: '张三', sex: '男', age: '33', phone: '10076', employId:'B160412'},
      { name: '李四', sex: '男', age: '44', phone: '10089', employId: 'B160404'}]
  },
  onLoad: function (options) {
    wx.request({
      url: '../yto/info/member',
      method: 'GET',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        this.setData({
          members: res.data,
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
    wx.switchTab({
      url: '../index/index',
    })
  }
})