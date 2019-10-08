import request from "./base/request.js"

export default {
  getADs () {
    return request('/advertisings', 'get')
  },
  getCoupons (data) {
    return request('/coupons', 'get', data)
  }
}