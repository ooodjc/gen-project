import axios from 'axios'
import router from "@/route";
import { storage } from '@/utils/storage'

export function request(options) {
  // 创建axios的实例
  const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 10000
  })
  // 请求拦截器配置
  instance.interceptors.request.use(config => {
      // config.headers.Authorization = window.sessionStorage.getItem('token')
      config.headers['X-Token'] = storage.get('token')
      return config
    }, error => {
      console.log(error)
      return Promise.error(error)
    }
  )
  // 响应拦截器配置
  instance.interceptors.response.use(response => {
    switch (response.data.errno) {
      case 0:
        return response.data
      case 401:
        console.log("无权访问")
        router.push('/login')
        break
      case 403:
        console.log("token过期啦")
        storage.remove('token')
        router.push('/login')
        break
      case 404:
        console.log("404啦")
        router.push('/404')
        break
      default:
        return response.data
    }
    return response.data
  }, error => {
    //return Promise.reject(error)
    console.log("request error",error)
  })
  // 发送真正的网络请求
  return instance(options);
}
export default request