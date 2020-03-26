// pages/input/input.js
Page({
  data: {
    message:''

  },
  // handleInput(event){
  //   console.log('用户输入内容:',event)
  // },
// 要在页面展示：改写上面的代码
  handleInput:(event)=>{
    console.log('用户输入内容',event)
    const msg = event.detail.value
    //报错  :需求是我要把我输入框的内容显示在界面上
    this.setData({
      message:msg
    })
  },
  handleFocus(event){
    console.log('input获取焦点:',event)
  },
  handleBlur(event){
    console.log('input失去焦点:',event)
  },

 
})