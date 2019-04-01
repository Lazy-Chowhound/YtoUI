// pages/sample/index/index.js
Page({
  data:{
    grids: [
      {name:'考评', path: "salary", icon: "salary.png"}, 
      {name:'成员', path: "organization", icon: "diagram.png"}, 
      {name:'公告', path: "inform", icon: "megaphone.png"},
      {name:'上传文件', path: "upload1", icon: "presentation.png"},
      {name:'密码', path: "test", icon: "password.png"},
      {name:'我的',path:"myinfo",icon:"myself.png"}]
  },
  onLoad:function(options){
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
  }
})