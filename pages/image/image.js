// pages/image/image.js
Page({
  data:{
    path:''
  },
  handerchooseAlbum(){
    //使用系统API接口让用户在相册中上传图片或者拍照上传图片
    wx.chooseImage({ 
      success: res => {
        this.setData({ //
          path: res.tempFilePaths[0]
        })
      },
    })
  }
})