/**
 * @description 网络请求
 * @author Gavin
 */

import axios, { AxiosRequestConfig } from 'axios';
import NProgress from 'nprogress';
import _ from 'lodash'
import 'nprogress/nprogress.css';
import { networkConfig } from '@/config/default/net.config';
import { ContentTypeEnum } from '@/constant/common/https';
import { storage } from './storage';
import { MutationsTypes } from "@/store/modules/account/mutations-types"

const baseURL: string = <string>import.meta.env.VITE_API_BASE_URL

// 设置请求头和请求路径
// axios.defaults.baseURL = networkConfig.baseURL;
axios.defaults.baseURL = baseURL;
axios.defaults.timeout = networkConfig.timeout;
axios.defaults.headers.post['Content-Type'] = ContentTypeEnum.JSON;
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      //@ts-ignore
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
    return error;
  }
);
// 响应拦截
axios.interceptors.response.use((res) => {
  if (res.data.code === 111) {
    sessionStorage.setItem('token', '');
    // token过期操作
  }
  return res;
});

export interface Https {
  get<T>(url: string, params?: object): Promise<T>;
  post<T>(url: string, params?: object): Promise<T>;
  upload<T>(url: string, file: unknown): Promise<T>;
  download(url: string): void;
}

const _addCookie = (params: object) => {
  // return params
  const cookie = storage.get(MutationsTypes.ACCOUNT_COOKIE)
  return (_.assign(params, cookie ? { cookie } : null))
}
export const https: Https = {
  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      NProgress.start();
      axios
        .get(url, { params: _addCookie(params) })
        .then((res) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          NProgress.done();
          reject(err.data);
        });
    });
  },
  post(url, params = {}) {
    return new Promise((resolve, reject) => {
      NProgress.start();
      axios
        .post(url, JSON.stringify(_addCookie(params)))
        .then((res) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          NProgress.done();
          reject(err.data);
        });
    });
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      NProgress.start();
      axios
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          NProgress.done();
          reject(err.data);
        });
    });
  },
  download(url) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;
    iframe.onload = function () {
      document.body.removeChild(iframe);
    };
    document.body.appendChild(iframe);
  },
};
