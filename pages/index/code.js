// pages/index/code.js
let App = getApp();
import drawQrcode from '../../utils/weapp.qrcode.esm'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: 'https://m.baidu.com'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.draw()
  },
  /**
   * 二维码
   */
  draw () {
    drawQrcode({
      width: 160,
      height: 160,
      x: 20,
      y: 20,
      canvasId: 'myQrcode',
      // ctx: wx.createCanvasContext('myQrcode'),
      typeNumber: 10,
      text: this.data.text,
      image: {
        imageResource: '../../images/icon.png',
        dx: 70,
        dy: 70,
        dWidth: 60,
        dHeight: 60
      },
      callback(e) {
        console.log('e: ', e)
      }
    })
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

  }
})