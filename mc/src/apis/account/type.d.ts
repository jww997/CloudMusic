import {ResType} from "@/utils/https"
import * as P from "./typeParams"
import * as R from "./typeResult"

export interface API {
    // #region about login
    postLoginCellphone: (params: P.PARAMS_LOGIN_CELLPHONE) => Promise<R.RESULT_CELLPHONE_LOGIN>;
    postLogin: (params: P.PARAMS_LOGIN) => Promise<R.RESULT_LOGIN>;
    getLoginQrKey: (params: P.PARAMS_LOGIN_QR_KEY) => Promise<R.RESULT_LOGIN_QR_KEY>;
    getLoginQrCreate: (params: P.PARAMS_LOGIN_QR_CREATE) => Promise<R.RESULT_LOGIN_QR_CREATE>;
    getLoginQrCheck: (params: P.PARAMS_LOGIN_QR_CHECK) => Promise<R.RESULT_LOGIN_QR_CHECK>;
    getLoginStatus: (params?: P.PARAMS_LOGIN_STATUS) => Promise<R.RESULT_LOGIN_STATUS>;
    getLogout: (params?: P.PARAMS_LOGOUT) => Promise<R.RESULT_LOGOUT>;
    getCaptchaSend: (params: P.PARAMS_CAPTCHA_SEND) => Promise<R.RESULT_CAPTCHA_SEND>;
    getCaptchaVerify: (params: P.PARAMS_CAPTCHA_VERIFY) => Promise<R.RESULT_CAPTCHA_VERIFY>;
    getRegisterCellphone: (params: P.PARAMS_REGISTER_CELLPHONE) => Promise<R.RESULT_REGISTER_CELLPHONE>;
    // #endregion

    // #region about user
    getUserDetail: (params: P.PARAMS_USER_DETAIL) => Promise<R.RESULT_USER_DETAIL>;
    getUserAccount: (params?: P.PARAMS_USER_ACCOUNT) => Promise<R.RESULT_USER_ACCOUNT>;
    getUserSubcount: (params?: P.PARAMS_USER_SUBCOUNT) => Promise<R.RESULT_USER_SUBCOUNT>;
    getUserLevel: (params?: P.PARAMS_USER_LEVEL) => Promise<R.RESULT_USER_LEVEL>;
    getUserBinding: (params: P.PARAMS_USER_BINDING) => Promise<R.RESULT_USER_BINDING>;
    getUserPeplacephone: (params: P.PARAMS_USER_REPLACEPHONE) => Promise<R.RESULT_USER_REPLACEPHONE>;
    getUserUpdate: (params: P.PARAMS_USER_UPDATE) => Promise<R.RESULT_USER_UPDATE>;
    getUserPlaylist: (params: P.PARAMS_USER_PLAYLIST) => Promise<R.RESULT_USER_PLAYLIST>;
    getUserCommentHistory: (params: P.PARAMS_USERCOMMENT_HISTORY) => Promise<R.RESULT_USERCOMMENT_HISTORY>;
    getUserDj: (params: P.PARAMS_USERCOMMENT_DJ) => Promise<R.RESULT_USERCOMMENT_DJ>;
    getUserFollows: (params: P.PARAMS_USERCOMMENT_FOLLOWS) => Promise<R.RESULT_USERCOMMENT_FOLLOWS>;
    getUserFolloweds: (params: P.PARAMS_USERCOMMENT_FOLLOWEDS) => Promise<R.RESULT_USERCOMMENT_FOLLOWEDS>;
    getUserEvent: (params: P.PARAMS_USERCOMMENT_EVENT) => Promise<R.RESULT_USERCOMMENT_EVENT>;
    getEventForward: (params: P.PARAMS_EVENT_FORWARD) => Promise<R.RESULT_EVENT_FORWARD>;
    getEventDel: (params: P.PARAMS_EVENT_DEL) => Promise<R.RESULT_EVENT_DEL>;
    getFollow: (params: P.PARAMS_FOLLOW) => Promise<R.RESULT_FOLLOW>;
    getUserRecord: (params: P.PARAMS_USER_RECORD) => Promise<R.RESULT_USER_RECORD>;


    // #endregion

    getInnerVersion: (params?: P.PARAMS_INNER_VERSION) => Promise<ResType<R.RESULT_INNER_VERSION>>;

}
