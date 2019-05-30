// pages/user/user.js
const AV = require('../../utils/av-weapp-min');
const { User } = require('../../utils/av-weapp-min');
var app = getApp();
Page({
  data:{
    user: null,
    employee: '',
    username: '',
    password: ''
  },

  onLoad:function(options){
    // console.log(User.current())
    this.setData({
      user: User.current(),
    });
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
    app.globalData.settings.employeeId = this.data.employee;
    if (usr && psw) {
      wx.showLoading({
        title: '正在登录',
      })

      wx.clearStorage('usrname'),
      wx.clearStorage('passwd')
      wx.setStorage({
        key: 'usrname',
        data: usr,
      })
      wx.setStorage({
        key: 'passwd',
        data: psw
      })
      
      wx.request({
        url: '../yto/login',
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
            content: "登录成功",
          })
         //存储用户名
        },
        fail: function (res) {
          wx.hideLoading()
          wx.showModal({
            title: '提示',
            content: "登录失败",
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
