const BASEURL = "http://39.96.77.250/view/"
export default function request(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: BASEURL+options.url,
      method: options.method||"get",
      data: options.data||{},
      success: resolve,
      fail: reject
    })
  })
}