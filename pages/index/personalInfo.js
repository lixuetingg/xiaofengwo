// pages/index/personalInfo.js
let App = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    disabled: false,
    nav_select: false, // 快捷导航

    nickname: '',
    areaName: '',
    birthday: '',
    personalizedSignature: '',

    error: '',
    array: ['男','女'],
    index: '',
    imgUrl: '',
    image: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 表单提交
   */
  saveData: function (e) {
    let _this = this,
    values = e.detail.value
    // console.log(values)
    values.areaName = _this.data.areaName;
    values.birthday = _this.data.birthday;
    values.sex = _this.data.array[_this.data.index];

    console.log(values);
    // 记录formId
    // 表单验证
    if (!_this.validation(values)) {
      App.showError(_this.data.error);
      return false;
    }

    // 按钮禁用
    _this.setData({
      disabled: true
    });

    // 提交到后端
    App._post_form('/api/member/receiver/save', values, function (result) {
      App.showSuccess(result.message, function () {
        wx.navigateBack();
      });
    }, false, function () {
      // 解除禁用
      _this.setData({
        disabled: false
      });
    });
  },

  /**
   * 表单验证
   */
  validation: function (values) {
    if (values.nickname === '') {
      this.data.error = '用户昵称不能为空';
      return false;
    }
    if (values.sex === '') {
      this.data.error = '性别不能为空';
      return false;
    }
    if (!this.data.areaName) {
      this.data.error = '省市区不能空';
      return false;
    }
    if (values.birthday === '') {
      this.data.error = '生日不能为空';
      return false;
    }
    return true;
  },

  /**
   * 修改性别
   */
  bindSexChange: function (e) {
    this.setData({
      index:e.detail.value
    })
  },

  /**
   * 修改地区
   */
  bindRegionChange: function (e) {
    this.setData({
      areaName: e.detail.value
    })
  },

  /**
   * 修改生日
   */
  bindBirthdayChange: function (e) {
    this.setData({
      birthday: e.detail.value
    })
  },
  /**
   * 修改头像
   */
  imageClick(){
    var that = this;
    wx.chooseImage({  //从本地相册选择图片或使用相机拍照
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有

      success: function (res) {

        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        var uid = that.data.uid
        wx.uploadFile({
          url: 'https://www.qqbee.net/api/index/uploadimg',
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            uid
          },
          success: function (res) {
            const data = res.data
            const obj = JSON.parse(data); 
            const image = obj.image
            that.setData({
              image 
            })
          }
        })
      }
    })
  },
  
})