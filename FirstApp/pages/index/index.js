//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    componetsArr : [
      {name:"View",id:"1"},
      {name:"ScrollView","id":"2"},
      {name:"Swiper","id":"3"},
      {name:"Icon","id":"4"},
      {name:"Text","id":"5"},
      {name:"progress","id":"6"},
      {name:"Button","id":"7"},
      {name:"CheckBox","id":"8"},
      {name:"Form","id":"9"},
      {name:"Label","id":"10"},
      {name:"Picker","id":"11"},
      {name:"Radio","id":"12"},
      {name:"Slider","id":"13"},
      {name:"Switcher","id":"14"},
      {name:"Action-sheet","id":"15"},
      {name:"Modal","id":"16"},
      {name:"Loading","id":"17"},
      {name:"Audio","id":"18"},
      {name:"Video","id":"19"},
      {name:"Map","id":"20"},
      {name:"Canvas","id":"21"}
    ],
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
