import request from "./base/request.js"

export default {
  detail(data) {
    return request('/article', 'get', data)
  }
}