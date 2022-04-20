/**
 * @description 视频
 * @author Gavin
 */
import { https } from '@/utils/modules/https';
import { WATCH as W } from '@/constant/api/watch';
import * as T from './type';

const api: T.API = {
  // #region about video
  getMvDetail: (params) => https.get(W.GET_MV_URL, params),
  // #endregion

  getPersonalizedMv: (params) => https.get(W.GET_PERSONALIZED_MV, params),
};

export default api;
