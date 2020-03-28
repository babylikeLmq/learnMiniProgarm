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
    isActive:false,
    isShow:false,
    score:75,
    movies:['恐怖游轮','小丑回魂','电锯惊魂','禁闭岛','饥饿站台'],
    array:[
      [1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]
    ],
    letters:'abcdefg'

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
      isActive : !this.data.isShow
    })
  },
  handleSwitchFontShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  handleIncrement(){
    this.setData({
      score:this.data.score+5
    })
  }
})