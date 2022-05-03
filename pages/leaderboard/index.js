// pages/leaderboard/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infinput:"",
    nameinput:"",
    textOkey:"",
    name2input:"",
  },

  Infinput:function(e){
    this.setData({
      infinput: e.detail.value,
    });
    console.log(this.data.infinput)
  },

  Nameinput:function(e){
    this.setData({
      nameinput: e.detail.value,
    });
    console.log(this.data.nameinput)
  },

  Name2input:function(e){
    this.setData({
      name2input: e.detail.value,
    });
    console.log(this.data.nameinput)
  },

  ProPub(){
    let that = this
    wx.request({
      url: 'http://localhost:8080/encrypPub',
      data:{
        inf: this.data.infinput,
        infname: this.data.nameinput,
        // inf: "llll",
        // infname: "Alice"
      },
      header: {
        //设置参数内容类型为json
        'content-type': 'application/json'
    },      
      success(res){
        console.log("Success!", res.data)
        that.setData({
          Ciphertext:res.data
        })
        that.setData({
          textOkey:res.data
        })
      },
      fail(res){
        console.log("Failed!", res)
      }
    })
  },

  ProPri(){
    let that = this
    wx.request({
      url: 'http://localhost:8080/encrypPri',
      data:{
        inf: this.data.infinput,
        infname: this.data.nameinput,
        // inf: "llll",
        // infname: "Alice"
      },
      header: {
        //设置参数内容类型为json
        'content-type': 'application/json'
    },      
      success(res){
        console.log("Success!", res.data)
        that.setData({
          Ciphertext:res.data
          
        })
        that.setData({
          textOkey:res.data
        })
      },
      fail(res){
        console.log("Failed!", res)
      }
    })
  },

  DecPub(){
    let that = this
    wx.request({
      url: 'http://localhost:8080/decrypPub',
      data:{
        inf: this.data.textOkey,
        infname: this.data.name2input,
        // inf: "llll",
        // infname: "Alice"
      },
      header: {
        //设置参数内容类型为json
        'content-type': 'application/json'
    },      
      success(res){
        console.log("Success!", res.data)
        that.setData({
          finaltext:res.data
        })
      },
      fail(res){
        console.log("Failed!", res)
      }
    })
  },

  DecPri(){
    let that = this
    wx.request({
      url: 'http://localhost:8080/decrypPri',
      data:{
        inf: this.data.textOkey,
        infname: this.data.name2input,
        // inf: "llll",
        // infname: "Alice"
      },
      header: {
        //设置参数内容类型为json
        'content-type': 'application/json'
    },      
      success(res){
        console.log("Success!", res.data)
        that.setData({
          finaltext:res.data
        })
      },
      fail(res){
        console.log("Failed!", res)
      }
    })
  },
})