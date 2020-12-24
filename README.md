#### 项目介绍

​	这是一个看小说的小程序，用了一个博客上看到的只有四个接口的服务器，所以肯定是登不得大雅之堂，自己玩玩而已。具备基本功能，需要的话，down到本地可以直接用微信开发者工具打开，二次开发，供学习使用

##### 项目整体截图如下

​	借鉴了点微信读书小程序的布局，都是一看就能明白的功能，不再详细介绍。



#### 接口API

```
按关键字查找图书
url: 39.96.77.250/view/bookList?&keywords=&size=100
request:{
  keywords：String,
  size：Number
}
获取小说目录
url: 39.96.77.250/view/chapters?&bookId=2960
request:{
  bookId：Number
}
获取章节内容
url: 39.96.77.250/view/readBook?&bookId=2960&chapterId=1
request:{
  bookId：Number,
  chapterId:Number
}
按分类查找图书
url: 39.96.77.250/view/bookList?&category=2&page=1
request:{
  category（类型：玄幻、修真、都市、穿越、网游、科幻、完本、其他）：1-8,
  page：Number
}
```

