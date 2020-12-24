// pages/home/childPages/book-read/book-read.js
import request from '../../../../service/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //看的书
    book: {},
    //章节参数
    chapterId:1,
    //书籍内容区
    bookConent:[],
    //控制目录、设置、书架tabbar显示隐藏
    showTabbar: false,
    //控制目录显示隐藏
    categoryShow: false,
    //目录数组
    category: [],
    //设置区显示隐藏
    setShow:false,
    //背景颜色数组
    colorList:['#faeed7','#e9eff5','#e7f0e1','#f2e4e9','#f7f7f7'],
    //字体大小
    fontSize:32,
    //背景颜色
    backgroundColor:"#ffffff"
  },
  //点击书籍区域控制目录块的显示隐藏
  tabbarShow(){
    this.setData({
      showTabbar:!this.data.showTabbar,
      setShow:false
    })
  },
  //手指拖动，目录、设置tabbar块隐藏
  tabbarHide(){
    if(this.data.showTabbar){
      this.setData({
        showTabbar:false,
        setShow:false
      })
    }
  },
  //目录点击
  categoryClick(){
    //如果是空目录，发送请求，数据置入目录数组
    if(this.data.category.length===0){
      request({
        url: 'chapters',
        data: {
          bookId: this.data.book.id
        }
      }).then(res=>{
        this.setData({
          category: res.data.result
        })
      })
    }
    this.setData({
      categoryShow:!this.data.categoryShow,
      setShow:false
    })
  },
  //目录章节点击，刷新文本区
  chapterClick(e){
    request({
      url: 'readBook',
      data: {
        bookId:this.data.book.id,
        chapterId:e.target.dataset.chaperidx+1
      }
    }).then(res=>{
      this.setData({
        bookConent:res.data.result,
        //设置区隐藏
        categoryShow:false,
        showTabbar:false,
        //更新data中章节码
        chapterId:e.target.dataset.chaperidx+1
      })
      //滚动条定位
      wx.pageScrollTo({
        scrollTop: 85
      })
    })
  },
  //点击设置区
  setClick(){
    this.setData({
      setShow:!this.data.setShow,
      categoryShow:false
    })
  },
  //改变字体颜色
  changeFontSize(e){
    this.setData({
      fontSize: e.detail.value
    })
  },
  //改变背景颜色
  changeBackgroundColor(e){
    this.setData({
      backgroundColor:e.target.dataset.color
    })
    //const {backgroundColor} = this.data.backgroundColor
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: this.data.backgroundColor
    })
  },
  //加入书架（正常应该数据库插入数据，此处用缓存替代）
  addToBookShelf(){
    try{
      wx.setStorageSync('bookShelf', this.data.book)
      wx.showToast({
        title: '加入成功',
        icon: 'success',
        duration: 2000
      })
    }catch(e){
      wx.showToast({
        title: '加入失败',
        icon: 'error',
        duration: 2000
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //拿到搜索页传过来的书籍信息
    const book = JSON.parse(options.book)
    this.setData({
      book
    })
    //查询出书籍的前几章
    request({
      url:'readBook',
      data: {
        bookId:this.data.book.id,
        chapterId:this.data.chapterId
      }
    }).then(res=>{
      this.setData({
        bookConent:res.data.result
      })
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //每次上拉触发，加载下一章
    this.data.chapterId+=1
    request({
      url:'readBook',
      data: {
        bookId:this.data.book.id,
        chapterId:this.data.chapterId
      }
    }).then(res=>{
      this.setData({
        bookConent:res.data.result
      })
    })
  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {

  }
})