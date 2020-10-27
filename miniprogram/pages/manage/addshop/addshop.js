Page({
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/form/form'
    }
  },

  data: {
    pickerHidden: true,
    chosen: '',
    show:false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData:['1','2','3','4','5','6'],//下拉列表的数据
    index:0//选择的下拉列表下标
  },
  selectTap(){
    this.setData({
     show: !this.data.show
    });
    },
    // 点击下拉列表
    optionTap(e){
      let Index=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
      this.setData({
      index:Index,
      show:!this.data.show
      });
    },
  pickerConfirm(e) {
    this.setData({
      pickerHidden: true
    })
    this.setData({
      chosen: e.detail.value
    })
  },

  pickerCancel() {
    this.setData({
      pickerHidden: true
    })
  },

  pickerShow() {
    this.setData({
      pickerHidden: false
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  }
})