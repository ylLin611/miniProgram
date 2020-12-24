Page({
  data:{
    book:{}
  },
  onLoad: function(){
    this.setData({
      book: wx.getStorageSync('bookShelf')
    })
  },
  //点击对应书籍触发事件
  bookClick(e){
    //解决参数超长
    const obj = {
      name:e.detail.book.name,
      author:e.detail.book.author,
      image:e.detail.book.image,
      des:e.detail.book.des,
      id:e.detail.book.id
    }
    const url = '/pages/home/childPages/book-read/book-read?book='+JSON.stringify(obj)
    //覆盖跳转到书籍详情页，让用户返回时直接返回书架
    wx.redirectTo({
      url
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    
  }
})