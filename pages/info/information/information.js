Page({
  data: {
    data: [{date: '2018/11/11',content: '双十一到了',read:'0'}]
  },
  onLoad: function (options) {
    wx.request({
      url: '../yto/info/post?id='+options.id,   //id为inform中对应item的id
      method: 'GET',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        this.setData({
          data: res.data,
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
})