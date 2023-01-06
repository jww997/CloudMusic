import {LIMIT, OFFSET, BEFORE, TIMESTAMP} from "../_type"

// #region about login
export interface PARAMS_LOGIN_CELLPHONE {
    phone: string
    password: string //  密码
    md5_password?: string // md5加密，传入后password参数将失效'
    captcha?: string // 验证码，传入后password参数将失效
    countrycode?: number  // 国家码
}

export interface PARAMS_LOGIN {
    email: string // 邮箱
    password: string //  密码
    md5_password?: string // md5加密，传入后password参数将失效
}

export interface PARAMS_LOGIN_QR_KEY extends TIMESTAMP {
}

export interface PARAMS_LOGIN_QR_CREATE extends TIMESTAMP {
    key: string
    qrimg?: number // 传入后会额外返回二维码图片 base64
}

export interface PARAMS_LOGIN_QR_CHECK extends TIMESTAMP {
    key: string
}

export interface PARAMS_LOGIN_STATUS {
}

export interface PARAMS_LOGOUT {
}

export interface PARAMS_CAPTCHA_SEND {
    phone: string
    ctcode?: string
}

export interface PARAMS_CAPTCHA_VERIFY {
    phone: string
    captcha?: string // 验证码
    ctcode?: string
}

export interface PARAMS_REGISTER_CELLPHONE {
    captcha: string // 验证码
    phone: string // 手机号码
    password: string //  密码
    nickname: string// 用户昵称
    countrycode?: number  // 国家码
}

// #endregion


// #region about user
export type UID = {
    uid: string // 用户 id
}

export interface PARAMS_USER_DETAIL extends UID {
}

export interface PARAMS_USER_ACCOUNT {
}

export interface PARAMS_USER_SUBCOUNT {
}

export interface PARAMS_USER_LEVEL {
}

export interface PARAMS_USER_BINDING extends UID {
}

export interface PARAMS_USER_REPLACEPHONE {
    phone: string // 手机号码
    oldcaptcha: string// 原手机号码的验证码
    captcha: string // 新手机号码的验证码
    countrycode?: number // 国家地区代码
}

export interface PARAMS_NICKNAME_CHECK {
    nickname: string // 昵称
}

export interface PARAMS_USER_UPDATE {
    gender?: 0 | 1 | 2 // 0保密 1男性 2女性
    birthday?: number // 出生日期,时间戳
    nickname?: string// 用户昵称
    province?: number // 省份id
    city?: number // 城市id
    signature?: string // 用户签名
}

export interface PARAMS_USER_PLAYLIST extends OFFSET, UID {
}

export interface PARAMS_USERCOMMENT_HISTORY extends LIMIT, UID {
    tme?: number // 上一条数据的 time,第一页不需要传,默认为 0
}

export interface PARAMS_USERCOMMENT_DJ extends UID {
}

export interface PARAMS_USERCOMMENT_FOLLOWS extends UID, OFFSET {
}

export interface PARAMS_USERCOMMENT_FOLLOWEDS extends UID, OFFSET {
}

export interface PARAMS_USERCOMMENT_EVENT extends UID, LIMIT {
    lasttime?: number // 返回数据的 lasttime,默认 - 1, 传入上一次返回结果的 lasttime, 将会返回下一页的数据
}

export interface PARAMS_EVENT_FORWARD extends UID {
    evId: number; // 动态id
    forwards: string //  转发的评论
}

export interface PARAMS_EVENT_DEL {
    evId: number; // 动态id
}

export interface PARAMS_FOLLOW {
    id: number // 用户 id
    t: 1 | 0 // 1 为关注,其他为取消收藏
}

export interface PARAMS_USER_RECORD extends UID {
    type: 1 | 0 // 1返回weekData 0返回allData
}

export interface PARAMS_AVATAR_UPLOAD {

}

// #endregion

export interface PARAMS_INNER_VERSION {
}
