Page({
  data: {
    delBtnWidth: 160,
    notice: [{ id: '1', name: '双十一物流高峰预警', date: '2018/11' }, 
           { id: '2', name: '双十一物流高峰预警', date: '2018/12' },
           { id: '3', name: '双十一物流高峰预警', date: '2019/1'}],
    isScroll: true,
    windowHeight: 0,
    keyword:null,
  },
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight
        });
      }
    });

    wx.request({
      url: '../yto/info/post',
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
  drawStart: function (e) {
    var touch = e.touches[0]

    for (var index in this.data.data) {
      var item = this.data.data[index]
      item.right = 0
    }
    this.setData({
      data: this.data.data,
      startX: touch.clientX,
    })

  },
  drawMove: function (e) {
    var touch = e.touches[0]
    var item = this.data.data[e.currentTarget.dataset.index]
    var disX = this.data.startX - touch.clientX

    if (disX >= 20) {
      if (disX > this.data.delBtnWidth) {
        disX = this.data.delBtnWidth
      }
      item.right = disX
      this.setData({
        isScroll: false,
        data: this.data.data
      })
    } else {
      item.right = 0
      this.setData({
        isScroll: true,
        data: this.data.data
      })
    }
  },
  drawEnd: function (e) {
    var item = this.data.data[e.currentTarget.dataset.index]
    if (item.right >= this.data.delBtnWidth / 2) {
      item.right = this.data.delBtnWidth
      this.setData({
        isScroll: true,
        data: this.data.data,
      })
    } else {
      item.right = 0
      this.setData({
        isScroll: true,
        data: this.data.data,
      })
    }
  },

  delItem: function (e) {

  },

  search_inform:function(){

  },

  keywordinput:function(e){
    this.setData({
      keyword:e.detail.value
    })
  },

  search:function(e){
    var notice_finded = []
    if(this.data.keyword){
      for(var i = 0; i < this.data.notice.length;i++){        
        if (this.data.notice[i].name.indexOf(this.data.keyword) >= 0 || this.data.notice[i].date.indexOf(this.data.keyword)>=0){
          notice_finded.push(this.data.notice[i])
        }
      }
      var inform_list = JSON.stringify(notice_finded)
      wx.navigateTo({
        url: '../inform_finded/inform_finded?inform_list=' + inform_list,
      })
    }
    else{
      wx.showModal({
        title: '提示',
        content: '关键词不能为空',
      })
    }
  }
})