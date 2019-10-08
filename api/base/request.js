import appBaseUrl from "../../config.js"

const showLoading = () => wx.showNavigationBarLoading()
const hideLoading = () => wx.hideNavigationBarLoading()

function request (url, method, data={}, header={}) {

  showLoading()

  const bearToken = wx.getStorageSync('API_ACCESS_TOKEN')

  header['Authorization'] = bearToken? bearToken : ''

  return new Promise ((resolve, reject) => {
    wx.request({
      url: `${appBaseUrl}${url}`,
      method,
      header,
      data,
      success (res) {
        if (res.data.code === 401001) {
          reject(res)
        } else {
          resolve(res.data.data)
        }
      },
      fail (res) {
        reject(res)
      },
      complete (res) {
        hideLoading()
      }
    })
  })
}
export default request