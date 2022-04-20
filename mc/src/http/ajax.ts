import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from 'axios'

// const BASE_URL: string = 'http://119.23.73.240:3000'
const BASE_URL: string = 'http://localhost:3000'
const TIME_OUT: number = 5 * 1000

/**
 * 创建实例
 */
const http: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
})
export const ajaxGet = (url: string, params?: object): Promise<any> =>
  http.get(url, { params })
export const ajaxPost = (url: string, data?: object): Promise<any> =>
  http.post(url, data)

/**
 * 拦截器
 */
const { request /* 请求拦截 */, response /* 响应拦截 */ } = http.interceptors

request.use(
  (config: AxiosRequestConfig) => {
    // 在发送请求之前做些什么
    return config
  },
  (error: AxiosError) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

response.use(
  (response: AxiosResponse) => {
    const { status, data } = response
    return status === 200 ? Promise.resolve(data) : Promise.reject(data)
  },
  (error: AxiosError) => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
