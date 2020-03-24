App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次） 后台存活2个小时
   */
  onLaunch: function () {
    console.log('生命周期回调——监听小程序初始化。')
    //发送网络请求
    // wx:request({
    //   url:''
    // })
    //获取用户信息

    setTimeout(function(){
      const err = new Error()
      throw err  

    },3000)

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 小程序界面显示出来之后会执行
   */
  onShow: function (options) {
    console.log('小程序界面显示出来之后会执行')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide  界面被隐藏时
   */
  onHide: function () {
    console.log('小程序界被隐藏时会执行')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('3秒后抛出错误!!!')
    
  }
})
