Page({
  data: {
    modalHidden:false,
    boxHidden:false,
    modal:{
      "username":"",
      "password":""
    },
    nameCheck:false,
    imgBox:[
      {
        "icon":"/images/myImages/l-dingdan.png",
        "url": "shoplist/shoplist",
        "info":"商品列表"
      },
      {
        "icon":"/images/myImages/l-shoucang.png",
        "url": "shoptype/shoptype",
        "info":"商品分类"
      }
      ,
      {
        "icon":"/images/myImages/l-shoucang.png",
        "url": "addshop/addshop",
        "info":"添加商品"
      }
    ]
  },
  onLoad: function () {
    
  },
  onShow: function () {
    if(wx.getStorageSync("username")==""){
      this.setData({
        modalHidden:false,
        boxHidden:false
      })
      console.log("no");
    }else{
      var getUsername=wx.getStorageSync("username");
      var getPassword=wx.getStorageSync("password");
      this.setData({
        modalHidden:true,
        boxHidden:true,
        'modal.username': getUsername,
        'modal.password': getPassword
      })
      console.log("has");
    }
  },
  signConfirm:function(){
    if(this.data.nameCheck){
      wx.setStorageSync('username', this.data.modal.username);
      wx.setStorageSync('password', this.data.modal.password);
      this.setData({
        modalHidden:true,
        boxHidden:true
      })
    }
  },
  saveUsername:function(event){
    if(event.detail.value!=""){
      this.setData({
        'modal.username': event.detail.value,
        nameCheck:true
      });
    }
  },
  savePassword:function(event){
    this.setData({
      'modal.password': event.detail.value
    });
  },
  exit:function(){
    wx.setStorageSync("username","");
    wx.setStorageSync("password","");
    this.setData({
      modalHidden:false,
      boxHidden:false
    })
  },
  goHouseDetail:function(e){
      var url = e.currentTarget.dataset.url;
      console.log(url);
      wx.navigateTo({
        url: url
      })    
    }
});
