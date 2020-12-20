// components/search-input/search-input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    value: ''
  },
  //防抖定时器
  timer: null,
  primary: true,
  /**
   * 组件的方法列表
   */
  methods: {
    handleInput(event){
      this.setData({
        value: event.detail.value
      })
      if(this.timer) clearTimeout(this.timer)
      if(this.primary) {
        this.triggerEvent('handleInput',{value:this.data.value})
        this.prrmary=false
      }
      this.timer = setTimeout(()=>{
        this.triggerEvent('handleInput',{value:this.data.value})
      },600)
    }
  }
})
