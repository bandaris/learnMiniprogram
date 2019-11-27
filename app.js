//注册小程序示例
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () { //小程序初始化完成之后会在后台存活两个小时
    console.log('初始化')
    //一些网络请求也是发生在这里
    wx.getUserInfo({ //获取用户的信息 这是一个异步的调用 success是成功的回调函数  
      success:function(res){
        console.log(res)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('界面显示时候调用')
    //判断小程序的注册场景
    console.log(options) //options是打开小程序的时候的参数 1001在接口文档里有
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('界面被隐藏时调用')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    //当小程序中发生一些错误的时候会执行
  }
})
