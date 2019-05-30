var sliderWidth = 96; 

Page({
    data: {
        tabs: ["月薪", "奖金"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        salary: [{ month: '2018/8' }, { month: '2018/9' }, { month: '2018/10' }],
        bonus: [{ month: '2018/8' }, { month: '2018/9' }, { month: '2018/10' }],
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
        wx.request({
          url: '../yto/info/salary',
          method:'GET',
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          success: function (res) {
            this.setData({
              salary:res.data,          
            })
          },
          fail: function (res) {
            wx.showModal({
              title: '提示',
              content: "加载失败",
            })
          }
        })

      wx.request({
        url: '../yto/info/bonus',
        method: 'GET',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          this.setData({
            bonus: res.data,
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
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    }
});