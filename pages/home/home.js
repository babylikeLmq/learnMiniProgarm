// pages/home/home.js
Page({
  data:{
    name : 'lmq',
    "age": 18,
    msg:"My favorite sport is basketball ",
    students:[
      { id:'001', name: 'cxk', age:24},
      { id: '002', name: 'curry', age: 23 },
      { id: '003', name: 'james', age: 22 },
      { id: '004', name: 'lmq', age: 21 }
    ],
    counter: 0
  },
  handleBtnClick(){
    // console.log('按钮发生了点击')
    // 1.错误做法
    // this.data.counter += 1
    // console.log(this.data.counter += 1)


    // 2.this.setData()
    this.setData({
      // counter: 100
      counter:this.data.counter +1
    })
  },
  handleBtnClick() {
    // console.log('按钮发生了点击')
    // 1.错误做法
    // this.data.counter += 1
    // console.log(this.data.counter += 1)


    // 2.this.setData()
    this.setData({
      // counter: 100
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  changeMeHobby(){
    this.setData({
      msg: "My favorite sport is badminton "
    })
  }
}) 