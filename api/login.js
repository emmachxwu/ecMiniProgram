import request from "./base/request.js"

export default {
  loginByWechat(data) {
    return request('/user/wechat_public_account/login', 'post', data)
  }
}