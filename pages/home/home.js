// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['潮流','娱乐','篮球']
  },
  handleTouchStart(){
    console.log('handleTouchStart')
  },
  handleTouchMove(){
    console.log('handleTouchMove')
  },
  handleTouchEnd(){
    console.log('handleTouchEnd')
  },
  handleTap(){
    console.log('handleTap')
  },
  handleLongpress(){
    console.log('handleLongpress')
  },
  handleEventClick(event){
    console.log('handleEventClick',event)
  },
  handleEventEnd(event){
    console.log('handleEventEnd',event)
  },
  handleOuter(event){
    console.log('outer',event)
  },
  handleInner(event){
    console.log('inner',event)
  },
  handleItemClickClick(event){
    // console.log(event)
    const dataset = event.currentTarget.dataset
    const index = dataset.diyindex
    const title = dataset.diyitem
    console.log(title,index)

  },
  // 事件冒泡和捕获
  handleCaptureView1(){
    console.log('外层：handleCaptureView1')
  },
  handleCaptureView2(){
    console.log('中间层：handleCaptureView2')
  },
  handleCaptureView3(){
    console.log('里层：handleCaptureView3')
  },
  handleTap1(){
    console.log('外层：handleTap1')
  },
  handleTap2(){
    console.log('中间层：handleTap2')
  },
  handleTap3(){
    console.log('里层：handleTap3')
  },


})