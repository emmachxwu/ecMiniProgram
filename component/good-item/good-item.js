// component/good-item/good-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    good: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goGoodDetail: function (event) {
      const goodId = event.currentTarget.dataset.goodid
      console.log(goodId)
      wx.navigateTo({
        url: '/pages/good-detail/good-detail',
      })
    }
  }
})
