App({
  //在app.js中定义全局数据
  globalData:{
    name:"bandari",
    age:18
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   * 小程序初始化后即使被关闭也会在后台寸存活5分钟  五分钟后再次打开会再次出发onLauch函数
   */
  onLaunch: function () {
    wx.getUserInfo({
      complete: (res) => {
        console.log(res)
      },
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log(options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
