// pages/home/childPages/search/search.js
import request from '../../../../service/network.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bookList:[]
  },
  searchBook(e){
    request({
      url: 'bookList',
      data: {
        keywords:e.detail.value,
        size:20
      }
    }).then(res=>{
      this.setData({
        bookList: res.data.result
      })
    })
  },
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
  }
})