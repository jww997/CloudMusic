/**
 * @description 网络请求常量
 * @author Gavin
 */

// 请求方法
export enum RequestEnum {
    GET = "GET",
    POST = "POST",
    PATCH = "PATCH",
    PUT = "PUT",
    DELETE = "DELETE",
}

// 常用的请求数据类型
export enum ContentTypeEnum {
    JSON = "application/json;charset=utf-8",
    TEXT = "text/plain;charset=UTF-8",
    FORM_DATA = "multipart/form-data;charset=UTF-8", // 上传
    FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8", // 一般配合qs
}
