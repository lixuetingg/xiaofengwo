// pages/travel/travel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  /**
   * 跳转函数
   */
  Navigate: function (e) {
    console.log(e, e.currentTarget.dataset.id)
    let url = e.currentTarget.dataset.url
    let id = e.currentTarget.dataset.id
    // let UserLogin = this.data.UserLogin
    // if (UserLogin) {
    //     wx.navigateTo({
    //         url: `${url}?id=${id}`,
    //     })
    // } else {
    //     // 提示登录
    //     wx.showToast({
    //         title: '你还未登录，请先到个人中心登录！',
    //         icon: 'none',
    //         duration: 2500,
    //         mask: true,
    //     })
    // }
    wx.navigateTo({
      url: `${url}?id=${id}`,
    })
  },
})