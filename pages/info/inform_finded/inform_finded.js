Page({
  data: {
    notice_finded:''
  },

  onLoad: function (options) {
    var that = this;
    var inform_list = JSON.parse(options.inform_list);
    console.log(inform_list);
    that.setData({
      notice_finded : inform_list
    })
  },

})