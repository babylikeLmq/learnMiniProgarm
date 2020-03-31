// components/my-style/my-style.js
Component({
    options:{
      // 页面组件相不影响
      // styleIsolation:"isolated"
      //页面影响组件
      // styleIsolation:"apply-shared"
      // 自定义组件和也页面互相影响
      styleIsolation:"shared"
    }
})
