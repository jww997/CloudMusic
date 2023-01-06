/**
 * @description 账户
 * @author Gavin
 */
import {https} from "@/utils/https"
import {ACCOUNT as A} from "@/constant/api/account"
import * as T from "./type"

const api: T.API = {
    // #region about login
    postLoginCellphone: (params) => https.post(A.API_LOGIN_CELLPHONE, params),
    postLogin: (params) => https.post(A.API_LOGIN, params),
    getLoginQrKey: (params) => https.get(A.API_LOGIN_QR_KEY, params),
    getLoginQrCreate: (params) => https.get(A.API_LOGIN_QR_CREATE, params),
    getLoginQrCheck: (params) => https.get(A.API_LOGIN_QR_CHECK, params),
    getLoginStatus: (params) => https.get(A.API_LOGIN_STATUS, params),
    getLogout: (params) => https.get(A.API_LOGOUT, params),
    getCaptchaSend: (params) => https.get(A.API_CAPTCHA_SEND, params),
    getCaptchaVerify: (params) => https.get(A.API_CAPTCHA_VERIFY, params),
    getRegisterCellphone: (params) => https.get(A.API_REGISTER_CELLPHONE, params),

    // #endregion

    // #region about user
    getUserDetail: (params) => https.get(A.API_USER_DETAIL, params),
    getUserAccount: (params) => https.get(A.API_USER_ACCOUNT, params),
    getUserSubcount: (params) => https.get(A.API_USER_SUBCOUNT, params),
    getUserLevel: (params) => https.get(A.API_USER_LEVEL, params),
    getUserBinding: (params) => https.get(A.API_USER_BINDING, params),
    getUserPeplacephone: (params) => https.get(A.API_USER_REPLACEPHONE, params),
    getNicknameCheck: (params) => https.get(A.API_NICKNAME_CHECK, params),
    postUserUpdate: (params) => https.post(A.API_USER_UPDATE, params),
    getUserPlaylist: (params) => https.get(A.API_USER_PLAYLIST, params),
    getUserCommentHistory: (params) => https.get(A.API_USER_COMMENT_HISTORY, params),
    getUserDj: (params) => https.get(A.API_USER_DJ, params),
    getUserFollows: (params) => https.get(A.API_USER_FOLLOWS, params),
    getUserFolloweds: (params) => https.get(A.API_USER_FOLLOWEDS, params),
    getUserEvent: (params) => https.get(A.API_USER_EVENT, params),
    getEventForward: (params) => https.get(A.API_EVENT_FORWARD, params),
    getEventDel: (params) => https.get(A.API_EVENT_DEL, params),
    getFollow: (params) => https.get(A.API_FOLLOW, params),
    getUserRecord: (params) => https.get(A.API_USER_RECORD, params),
    uploadAvatarUpload: (params) => https.get(A.API_AVATAR_UPLOAD, params),
    // #endregion

    getInnerVersion: (params) => https.get(A.API_INNER_VERSION, params),

}

export default api
