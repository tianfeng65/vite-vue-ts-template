import Axios from 'axios'

const baseURL = '/'

const axios = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时：20秒
})

// 前置拦截器（请求发起前的拦截）
axios.interceptors.request.use(
  (req) => {
    // console.log(req);
    return req
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (res) => {
    // console.log(res);
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axios
