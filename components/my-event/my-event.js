// components/my-event/my-event.js
Component({
  /**
   * 组件的方法列表
   */

  //  组件中的方法是放到methods对象中
  methods: {
    handleIncrement(){
      // console.log('------------')
      //发射事件出去给外部接收
      this.triggerEvent('increment',{name:'溟七',id:'大帅哥'},{})
    },
    handleSubtraction(){
      this.triggerEvent('subtraction',{},{})
    }
  }
})
