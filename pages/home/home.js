// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0,
    name:'',
    id:''

  },
  handleIncrement(event){
    // console.log('++++++++')
    console.log(event.detail)
    const msg=event.detail
    const nameTemporary=msg.name
    const idTemporary=msg.id
    this.setData(
      
      {
        
        counter:this.data.counter+1,
        name : nameTemporary,
        id : idTemporary

      }
    )
  },
  handleSubtraction(){
    // console.log('---------')
    this.setData(
      {
        counter:this.data.counter-1
      }
    )
  }

})