// pages/catelgory/index.js
import api from "../../api/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: null,
    categoryGoods: null,
    query: {
      page_no: 1,
      page_size: 9999
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategories({ category_id: 0 })
  },
  getCategories: function (data) {
    api.category.getCategories(data).then(res => {
      this.setData({
        categories: res
      })
    })
  },
  handleCategoryGoods: function (event) {
    var categoryId = event.currentTarget.dataset.categoryid
    var data = Object.assign({}, this.data.query, { category_id: categoryId})
    this.getCategoryGoods(data)
  },
  getCategoryGoods: function (data) {
    api.category.getCategoryGoods(data).then(res => {
      console.log(res.lists)
      this.setData({
        categoryGoods: res.lists
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