// components/book/book.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book: {
      type: Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bookClick(){
      this.triggerEvent('bookClick',{book:this.properties.book})
    },
    //点击书籍简介，弹出model，去掉取消，确定文本改为关闭
    bookDesClick(e){
      const {name,des} = e.target.dataset
      wx.showModal({
        title: name,
        content: des,
        showCancel: false,
        confirmText: '关闭',
        confirmColor: 'red'
      })
    }
  }
})
