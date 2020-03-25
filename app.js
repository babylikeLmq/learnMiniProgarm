App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次） 后台存活2个小时
   */
  onLaunch: function (options) {
   
    //发送网络请求
   
    //获取用户信息

    //小程序的进入场景  小程序显示出来时
    // console.log(options)
    // switch(options.scene){
    //   //根据进入的场景值可以做的很多事情
    //   case 1001:
    //     break;
    //   case 1005:
    //     break;  
    // }
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 小程序界面显示出来之后会执行
   */
  onShow: function (options) {
  
    console.log(options)
    switch (options.scene) {
      //根据进入的场景值可以做的很多事情
      case 1001:
        break;
      case 1005:
        break;
    }
    //获取用户信息  wx 小程序提供 的api
    wx.getUserInfo({
      success:function(res) {
        console.log(res)
      }
    })

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide  界面被隐藏时
   */
  onHide: function () {
  
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
    
  },

  globalData:{
    name:"溟七",
    age:22
  }
})
