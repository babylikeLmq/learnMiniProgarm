// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 1.第一种传递数据方式
    // title:String
    // 2.可以有默认值
    title:{
      type:'String',
      value:'我是组件中默认的标题',
      // 观察者
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal)
      }
    }
  },
  externalClasses:[
    'titleclass',
    'containerclass'
  ]

})
