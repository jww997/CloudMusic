/**
 * @description 网络请求
 * @author Gavin
 */
import {Message} from "@arco-design/web-vue"
import axios, {AxiosInstance} from "axios"
import NProgress from "nprogress"

import {router} from "@/router"
import {networkConfig, responseErrorText} from "@/config/default/net.config"
import {ContentTypeEnum} from "@/constant/common/https"
import "nprogress/nprogress.css"


// 设置请求头和请求路径`
const instance: AxiosInstance = axios.create(networkConfig)

// 响应拦截
instance.interceptors.response.use(response => response, async error => {
    const {message, response, config} = error
    if (message.indexOf("Network Error") > -1 || message.indexOf("timeout") > -1) {
        const key = message.indexOf("Network Error") > -1 ? 998 : 997
        Message.info(responseErrorText[key])
        return Promise.reject(new Error(message))
    }
    switch (response.status) {
        case 401:
            await router.replace({name: "AccountLogin"})
            break
        default:
            const status = response.status.toString()
            const key = Object.keys(responseErrorText).includes(status) ? status : 999
            Message.info(response.data.message || responseErrorText[key])
            break
    }
    return Promise.reject(error)
})

export interface Https {
    get<T>(url: string, params?: object): Promise<T>;

    post<T>(url: string, params?: object): Promise<T>;

    upload<T>(url: string, file: unknown): Promise<T>;

    download(url: string): void;
}

export const https: Https = {
    get(url, params = {}) {
        return new Promise(async (resolve, reject) => {
            NProgress.start()
            try {
                const res = await instance.get(url, {params})
                NProgress.done()
                resolve(res.data)
            } catch (err) {
                NProgress.done()
                reject(err)
            }
        })
    },
    post(url, params = {}) {
        return new Promise(async (resolve, reject) => {
            NProgress.start()
            try {
                const res = await instance.post(url, JSON.stringify(params))
                NProgress.done()
                resolve(res.data)
            } catch (err) {
                NProgress.done()
                reject(err)
            }
        })
    },
    upload(url, file) {
        return new Promise(async (resolve, reject) => {
            NProgress.start()
            try {
                const res = await instance.post(url, file, {headers: {"Content-Type": ContentTypeEnum.FORM_DATA}})
                NProgress.done()
                resolve(res.data)
            } catch (err) {
                NProgress.done()
                reject(err)
            }
        })
    },
    download(url) {
        const iframe = document.createElement("iframe")
        iframe.style.display = "none"
        iframe.src = url
        iframe.onload = function () {
            document.body.removeChild(iframe)
        }
        document.body.appendChild(iframe)
    },
}
