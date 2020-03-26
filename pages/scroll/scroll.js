// pages/scroll/scroll.js
Page({

  data: {

  },
  handleScroll(event){
    console.log('正在滚动-----')
    // console.log(event)

  },
  top(){
console.log('我到顶部距离为100px时触发 默认50px')
  },
  bottom(){
    console.log('我到底部距离为0px时触发 默认50px')
  }
})