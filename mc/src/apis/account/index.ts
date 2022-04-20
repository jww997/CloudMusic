/**
 * @description 账户
 * @author Gavin
 */
import { https } from '@/utils/modules/https';
import { ACCOUNT as A } from '@/constant/api/account';
import * as T from './type';

const api: T.API = {
  // #region about login
  postLoginCellphone: (params) => https.post(A.POST_LOGIN_CELLPHONE, params),
  postLogin: (params) => https.post(A.POST_LOGIN, params),
  getLoginQrKey: (params) => https.get(A.GET_LOGIN_QR_KEY, params),
  getLoginQrCreate: (params) => https.get(A.GET_LOGIN_QR_CREATE, params),
  getLoginQrCheck: (params) => https.get(A.GET_LOGIN_QR_CHECK, params),
  getLoginStatus: (params) => https.get(A.GET_LOGIN_STATUS, params),
  getLogout: (params) => https.get(A.GET_LOGOUT, params),
  getCaptchaSend: (params) => https.get(A.GET_CAPTCHA_SEND, params),
  getCaptchaVerify: (params) => https.get(A.GET_CAPTCHA_VERIFY, params),
  getRegisterCellphone: (params) => https.get(A.GET_REGISTER_CELLPHONE, params),

  // #endregion

  // #region about user
  getUserDetail: (params) => https.get(A.GET_USER_DETAIL, params),
  getUserAccount: (params) => https.get(A.GET_USER_ACCOUNT, params),
  getUserSubcount: (params) => https.get(A.GET_USER_SUBCOUNT, params),
  getUserLevel: (params) => https.get(A.GET_USER_LEVEL, params),
  getUserBinding: (params) => https.get(A.GET_USER_BINDING, params),
  getUserPeplacephone: (params) => https.get(A.GET_USER_REPLACEPHONE, params),
  getUserUpdate: (params) => https.get(A.GET_USER_UPDATE, params),
  getUserPlaylist: (params) => https.get(A.GET_USER_PLAYLIST, params),
  getUserCommentHistory: (params) => https.get(A.GET_USER_COMMENT_HISTORY, params),
  getUserDj: (params) => https.get(A.GET_USER_DJ, params),
  getUserFollows: (params) => https.get(A.GET_USER_FOLLOWS, params),
  getUserFolloweds: (params) => https.get(A.GET_USER_FOLLOWEDS, params),
  getUserEvent: (params) => https.get(A.GET_USER_EVENT, params),
  getEventForward: (params) => https.get(A.GET_EVENT_FORWARD, params),
  getEventDel: (params) => https.get(A.GET_EVENT_DEL, params),
  getFollow: (params) => https.get(A.GET_FOLLOW, params),
  getUserRecord: (params) => https.get(A.GET_USER_RECORD, params),
  // #endregion

  getInnerVersion: (params) => https.get(A.GET_INNER_VERSION, params),

};

export default api;
