
Page({
  data: {
    name: 'bandari',
    age: 18,
    students: [{
        name: 'kobe',
        age: 30
      },
      {
        name: 'curry',
        age: 32
      },
      {
        name: 'bandari',
        age: 18
      },
      {
        name: 'james',
        age: 35
      }
    ],
    counter:0
  },
  handleBtnClick(){//加
    //错误的做法！
    // this.data.counter +=1
    // console.log(this.data.counter)//界面无法监听data中数据的变化

    //正确的做法: this.setData
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleSubClick(){//减
    this.setData({
      counter: this.data.counter - 1
    })
  },
  onLoad(){

  },
  onShow(){

  },
  onReady(){

  },
  onHide(){

  },
  onUnload(){

  },
  //其他的页面监听
  //1.监听页面的滚动 obj是传入的滚动信息的对象
  onPageScroll(obj){
    console.log(obj)
  },
  //2.页面滚动到最底部的时候调用
  onReachBottom(){
     console.log('页面已经达到最底部')
  },
  onPullDownRefresh(){
    console.log('下拉刷新')
  }
})