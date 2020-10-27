// pages/manage/shoptype/shoptype.js


Page({

  /**
   * 页面的初始数据
   */
  /**
   * 页面的初始数据
   */
  data: {
    dataList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var thisPage = this;
    wx.cloud.init()
    const db = wx.cloud.database()
    db.collection('shop_type').get({
      success: function(res) {
        // res.data 是包含以上定义的两条记录的数组
        thisPage.setData({
          dataList:res.data
        });
        console.log(res.data)
      }
    })
      




        // 按钮样式
        const types = ['default', 'primary', 'warn']
        const pageObject = {
          data: {
            defaultSize: 'default',
            primarySize: 'default',
            warnSize: 'default',
            disabled: false,
            plain: false,
            loading: false
          },
        
          onShareAppMessage() {
            return {
              title: 'button',
              path: 'page/component/pages/button/button'
            }
          },
        
          setDisabled() {
            this.setData({
              disabled: !this.data.disabled
            })
          },
        
          setPlain() {
            this.setData({
              plain: !this.data.plain
            })
          },
        
          setLoading() {
            this.setData({
              loading: !this.data.loading
            })
          },
          
          handleContact(e) {
            console.log(e.detail)
          },
        
          handleGetPhoneNumber(e) {
            console.log(e.detail)
          },
        
          handleGetUserInfo(e) {
            console.log(e.detail)
          },
        
          handleOpenSetting(e) {
            console.log(e.detail.authSetting)
          },
        
          handleGetUserInfo(e) {
            console.log(e.detail.userInfo)
          }
        }
        
        for (let i = 0; i < types.length; ++i) {
          (function (type) {
            pageObject[type] = function () {
              const key = type + 'Size'
              const changedData = {}
              changedData[key] =
                this.data[key] === 'default' ? 'mini' : 'default'
              this.setData(changedData)
            }
          }(types[i]))
        }


        
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goAddType:function(e){
    wx.navigateTo({
      url: 'addtype/addtype'
    })    
  }
})