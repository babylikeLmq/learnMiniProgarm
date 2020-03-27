// pages/mustache/mustache.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'我想吃烧鸡',
    age:20,
    firstName:'DJ',
    lastName:'mingqi',
    nowTime:new Date().toLocaleString(),
    isShow:false
  },
  // 小程序注册完成后，加载页面，触发onLoad方法。
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowTime:new Date().toLocaleString()
      })
    },1000)
  },
  handleChaneColor(){
    this.setData({
      isShow : !this.data.isShow
    })
  }
})