// pages/competition/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infinput:"",
    nameinput:"",
    textOkey:"",
    name2input:"",
    Alice:"/icon/Alice.png",
    Bob:"/icon/Bob.png",
    Pine:"/icon/Pine.png",
    uuu:"/icon/Alice.png"
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

  Process(){
    let that = this
    wx.request({
      url: 'http://localhost:8080/sign',
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

  Getname(){
    let that = this
    console.log(this.data.textOkey)
    wx.request({
      url: 'http://localhost:8080/vertify',
      data:{
        content: this.data.infinput,
        sign: this.data.textOkey,
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
          finaltext:res.data,
        })
        that.setData({
          name2input:res.data,
        })
        that.setData({
          uuu: "/icon/" + res.data + ".png"
        })
      },
      fail(res){
        console.log("Failed!", res)
      }
    })
  },

})