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
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
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
  save:function(){
    wx.showModal({
      title: '上传文件返回状态',
      content: '上传成功',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })    
  }
})




// bindTextAreaBlur: function(e) {
//   console.log(e.detail.value);
//   var that = this;
//   that.setData({
//     details: e.detail.value
//   });
// },

// ...

// //提交订单或支付订单时清空备注
// var that = this;
// that.setData({
//   details: '',
// })
// ---------------------
//   作者：Arururururu
// 来源：CSDN
// 原文：https://blog.csdn.net/unirrrrr/article/details/80723408 
// 版权声明：本文为博主原创文章，转载请附上博文链接！