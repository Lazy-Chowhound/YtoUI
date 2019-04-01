// pages/user/user.js
const AV = require('../../utils/av-weapp-min');
const { User } = require('../../utils/av-weapp-min');

Page({
  data:{
    user: null,
    employee: '',
    username: '',
    password: ''
  },

  onLoad:function(options){
    console.log(User.current())
    this.setData({
      user: User.current(),
    });
  },

  onReady:function(){
    // 页面渲染完成
  },

  onShow:function(){
    // 页面显示
  },

  onHide:function(){
    // 页面隐藏
  },

  onUnload:function(){
    // 页面关闭
  },

  updateEmpid: function(e){
    this.setData({
      employee: e.detail.value
    })
  },

  updatePassword: function(e){
    this.setData({
      password: e.detail.value
    })
  },

  save: function () {
    wx.showLoading({
      title: '绑定中',
    })
    wx.hideLoading()

    var usr = this.data.employee;
    var psw = this.data.password;
    if (usr && psw) {
      wx.showLoading({
        title: '正在登录',
      })
      wx.request({
        url: 'http://www.szpown.xyz:8080/yto/login',
        method: "POST",
        data: {
             phone: usr,
             pass: psw
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          wx.hideLoading()
          wx.showModal({
            title: '提示',
            content: res.data.reason,
          })
        },
        fail: function (res) {
          wx.hideLoading()
          wx.showModal({
            title: '提示',
            content: res.data.reason,
          })
        }
      })      
    }
    else {
      wx.showModal({
        title: '提示',
        content: '用户名或者密码不能为空',
      })
    }
  }
}) 
