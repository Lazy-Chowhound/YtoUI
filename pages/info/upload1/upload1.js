Page({
  data: {
    path: ''
  },
  upload: function () {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        wx.uploadFile({
          url: 'http://example.weixin.qq.com/upload',
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            wx.showModal({
              title: '上传文件返回状态',
              content: '成功',        
            })                          
          },
          fail: function (res) {
            console.log(res)
          }
        })
        that.setData({
          path: tempFilePaths
        })
      }
    })
  },
  save:function(e){
    wx.request({
      url: '../yto/info/upload',
      method: 'POST',
      data:{
        title: e.detail.value.title,
        content: e.detail.value.content,
        file:'0'
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        wx.showModal({
          title: '上传文件返回状态',
          content: '上传成功',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
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
