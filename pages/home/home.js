// pages/home/home.js
//getApp获取App.js中App产生的实例对象
const app = getApp() 

Page({
  // 3.监听wxml中相关的事件
    handleGetUserInfo(event){
      console.log(event)

      //点击打印我的信息
      console.log(app.globalData.name),
      console.log(app.globalData.age)

    },
    handleViewMyname(){
      console.log('是个帅哥!!!')
    },
    // 2.初始化数据
    data:{
      message:"陆明清"  ,
      list:[
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
        {id:'001',waihao:'lumingqing'},
      
      ]
    },

    //1.监听页面的生命周期

    //页面被加载出来时
    onLoad(){
      console.log('onLoad	function 生命周期回调—监听页面加载')
      //发送网络请求
      // wx.requeset() {
      //   url:'http://123.207.32.32.8000/recommend' ; 
      // }  


    },
    //页面显示出来时
    onShow(){
        console.log('onShow	function 生命周期回调—监听页面显示')
    },
    //第一次渲染  如果关闭了 再打开不会触发
    onReady(){
      console.log('onReady	function 生命周期回调—监听页面初次渲染完成')
    },
    //页面被隐藏时
    onHide(){
      console.log('onHide	function	生命周期回调—监听页面隐藏')
    },
    //从另一个页面回到首页 那个页面被销毁时
    onUnload(){
      console.log('onUnload	function			生命周期回调—监听页面卸载')
    },
    // 4.其他事件
    // 监听页面的滚动
    onPageScroll(obj){
      console.log(obj)
    },
    onReachBottom(){
      console.log('页面滚到底部了')
    },
    onPullDownRefresh(){
      console.log('页面被下拉')
    }


}) 