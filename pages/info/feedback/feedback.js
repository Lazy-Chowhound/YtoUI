Page({
  data: {
    
  },
  upload:function(e){
    if (e.detail.value.content){
      wx.request({
        url: '../yto/info/upload',
        method: 'POST',
        data: {
          title: '留言',
          content: e.detail.value.content,
          file: '0'
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          wx.showModal({
            title: '提示',
            content: '上传成功',
            success:function(res){
              wx.navigateBack({})
            }
          })
          
        },
        fail: function (res) {
          wx.showModal({
            title: '提示',
            content: "上传失败",
            success: function (res) {
              if(res.confirm){
                wx.navigateBack({})
              }
            }
          })       
        }
      })   
    }
     else{
       wx.showModal({
         title: '警告',
         content: '内容不能为空',
       })
     }
  }
})