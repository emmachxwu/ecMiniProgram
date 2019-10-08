// pages/home/index.js
import api from "../../api/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    adLists: null,
    couponLists: null,
    swiperInit: {
      indicatorDots: true,
      autoplay: true,
      interval: 1000,
      duration: 1000,
    },
    imageLists: [
      "https://rohto.oss-cn-hangzhou.aliyuncs.com/hs/home_goods1.png",
      "https://rohto.oss-cn-hangzhou.aliyuncs.com/hs/home_goods2.png",
      "https://rohto.oss-cn-hangzhou.aliyuncs.com/hs/home_goods3.jpg",
      "https://rohto.oss-cn-hangzhou.aliyuncs.com/hs/home_goods4.jpg",
      "https://rohto.oss-cn-hangzhou.aliyuncs.com/hs/home_goods5.jpg",
      "https://rohto.oss-cn-hangzhou.aliyuncs.com/hs/home_goods6.jpg",
      "https://rohto.oss-cn-hangzhou.aliyuncs.com/hs/home_entry_brand.jpg",
      "https://rohto.oss-cn-hangzhou.aliyuncs.com/hs/home-entry_instruction.jpg",
      "https://rohto.oss-cn-hangzhou.aliyuncs.com/hs/home_entry_qa.jpg"
    ],
    query: {
      page_no: 1,
      page_size: 2
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAds()
    this.getCoupons()
  },
  getAds: function () {
    api.home.getADs().then(res => {
      this.setData({
        adLists: res.advertise_list
      })
    })
  },
  getCoupons: function () {
    api.home.getCoupons(this.data.query).then(res => {
      this.setData({
        couponLists: res.coupons
      })
    })
  },
  onTapActicle: function (event) {
    var imageId = event.currentTarget.dataset.imageid
    console.log(imageId)
    wx.navigateTo({
      url: `/pages/article/article?id=${imageId}`,
    })
    // wx.navigateTo({
    //   url: '/pages/webview-entry/webview-entry',
    // })
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