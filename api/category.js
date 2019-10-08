import request from "./base/request.js"

export default {
  getCategories (data) {
    return request('/categories', 'get', data)
  },
  getCategoryGoods (data) {
    return request('/category/goods', 'get', data)
  }
}