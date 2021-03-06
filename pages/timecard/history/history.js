const AV = require('../../../utils/av-weapp-min');
const Check = require('../../../model/check')

Page({
  data:{
    checks: null,
    usr:null,
    passwd:null,
    username:null,
    checks: [{ timestamp: '08:39:25', location: '南京市玄武区北京东路41-40号楼', address: '南京市人民政府附近' }, 
             { timestamp: '13:24:43', location: '南京市玄武区北京东路41-40号楼', address: '南京市人民政府附近' }]
  },

  onLoad:function(options){
    var that = this;
    wx.showNavigationBarLoading();
    
    var _username = wx.getStorageSync('usrname');
    var _passwd = wx.getStorageSync('passwd');
    that.setData({
      username:_username
    });
    that.setData({
      passwd:_passwd
    })
    if (this.data.username == null || this.data.passwd == null){
      wx.hideNavigationBarLoading()
      wx.showModal({
        title: '当前无绑定账户',
        content: '请绑定账户后，再查看考勤历史',        
        cancelText: '返回',
        confirmText: '去绑定',
        success: function(res){      
          if(res.confirm) {
            wx.navigateTo({
              url: '../../user/user'
            })
          } else {            
            wx.navigateBack({delta: 1});
          }
        }
      })      
    }
    wx.request({
      url: '../yto/check/record',
      method:'GET',
      header: {
        'content-type': 'application/json'
      },
      success:function(res){
        this.setData({
          checks:res.data
        })
      }
    })
  },

  // fetchChecks:function () {    
  //   return AV.Promise.resolve(AV.User.current()).then(user =>
  //   {
  //     //console.log('uid', user.id);
  //     //console.log(AV.Object.createWithoutData('User', user.id));
  //     wx.hideNavigationBarLoading()

  //     return new AV.Query(Check)
  //     .equalTo('user', AV.Object.createWithoutData('User', user.id))
  //     .descending('createdAt')
  //     .find().then(this.setChecks)  
  //   });
  // },

  // setChecks:function(checks){
  //   //console.log(checks);
  //   this.setData({
  //     checks: checks.map(check => Object.assign(check.toJSON(), {
  //         timestamp: check.timestamp.toLocaleString(),
  //       }))
  //   })
  // },

  // toDetail: function(e){
  //   var check = e.currentTarget.dataset.check;
  //   var geo = check.geo;
  //   //console.log('../maps/maps?latitude=' + geo.latitude + '&longitude=' + geo.longitude   )
  //   wx.openLocation({
  //     latitude: geo.latitude, // 纬度，范围为-90~90，负数表示南纬
  //     longitude: geo.longitude, // 经度，范围为-180~180，负数表示西经
  //     scale: 28, // 缩放比例
  //     name: check.location, // 位置名
  //     address: check.address, // 地址的详细说明    
  //   })
  // },

  onShow:function(){
    // this.fetchChecks();
  }
})