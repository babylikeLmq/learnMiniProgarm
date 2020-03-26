// pages/image/image.js
Page({
  data:{
    imagePath:''  
  },
  handleChooseAblum(){
    //系统api 让用户在相册中选择图片（或者拍照）
    // console.log('------------')
    wx.chooseImage({
      //选中图片就会回调这个函数 这个函数要是箭头函数 this  complete 可以写成success
      complete: (res) => {

        // console.log(res)
        // 1.取到路径
        const path =  res.tempFilePaths[0];

        //2.实现响应式 
         this.setData({
          imagePath:path
         })

      },
    })
  },
  handleImageLoad(){
    console.log('图片加载完成')
  }
})