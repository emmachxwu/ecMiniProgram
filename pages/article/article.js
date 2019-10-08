// pages/article/article.js
import api from "../../api/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var articleId = null
    if (options.id === "6") {
      articleId = 2
    } else if (options.id === "7") {
      articleId = 3
    } else if (options.id === "8") {
      articleId = 4
    } else {
      articleId = 1
    }
    this.getArticleDetail({
      article_id: articleId
    })
  },
  getArticleDetail: function (data) {
    api.article.detail(data).then(res => {
      this.setData({
        info: res.articles_info
      })
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