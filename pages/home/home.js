// pages/home/home.js
Page({
  userInfo(e){
    //在event事件中公获取用户的信息
    console.log(e.detail.userInfo)
    //获取App.js中定义的全局信息
    const app = getApp()
    console.log(app.globalData)
  }
})