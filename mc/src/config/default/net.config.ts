/**
 * @description 网络请求默认配置
 * @author Gavin
 */
import {AxiosRequestConfig} from "axios"

export const networkConfig: AxiosRequestConfig = {
    baseURL: "http://localhost:3000", // 为 axios 实例的方法传递相对 URL
    timeout: 5 * 1000, // 指定请求超时的毫秒数
    method: "get", // 是创建请求时使用的方法
    responseType: "json", // 表示浏览器将要响应的数据类型
    withCredentials: true, // 表示跨域请求时是否需要使用凭证
}

interface ResponseErrorText {
    [key: number]: string
}

export const responseErrorText: ResponseErrorText = {
    403: "没有权限",
    404: "访问出错",
    500: "服务器出错",

    997: "请求超时",
    998: "网络出错",
    999: "服务器开小差，请稍后重试",
}
