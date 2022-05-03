// pages/word_data/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typein: ''
  },

  infinput:function(e){
    this.setData({
      typein: e.detail.value
    })
    wx.request({
      url: 'http://localhost:8080/SubINF',
      data:{
        inf: this.data.typein
      },
      success(res){
        console.log("Success!", res)
      },
      fail(res){
        console.log("Failed!", res)
      }
    })
  },

  /**
   * 获取MD5码
   */
  getMD5(){
    let that = this
    wx.request({
      url: 'http://localhost:8080/MD5',
      success(res){
        console.log("Success!", res.data)
        that.setData({
          MD5code:res.data
        })
      },
      fail(res){
        console.log("Failed!", res)
      }
    })
  }
})