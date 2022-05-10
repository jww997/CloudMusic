/**
 * @description 视频
 * @author Gavin
 */
import { https } from '@/utils/modules/https';
import { WATCH as W } from '@/constant/api/watch';
import * as T from './type';

const api: T.API = {
  // #region about video
  getMvAll: (params) => https.get(W.GET_MV_ALL, params),
  getMvFirst: (params) => https.get(W.GET_MV_FIRST, params),
  getMvExclusiveRcmd: (params) => https.get(W.GET_MV_EXCLUSIVE_RCMD, params),
  getPersonalizedMv: (params) => https.get(W.GET_PERSONALIZED_MV, params),
  getTopMv: (params) => https.get(W.GET_TOP_MV, params),
  getMvDetail: (params) => https.get(W.GET_MV_DETAIL, params),
  getMvDetailInfo: (params) => https.get(W.GET_MV_DETAIL_INFO, params),
  getMvUrl: (params) => https.get(W.GET_MV_URL, params),
  getVideoGroupList: (params) => https.get(W.GET_VIDEO_GROUP_LIST, params),
  getVideoCategoryList: (params) => https.get(W.GET_VIDEO_CATEGORY_LIST, params),
  getVideoGroup: (params) => https.get(W.GET_VIDEO_GROUP, params),
  getVideoTimelineAll: (params) => https.get(W.GET_VIDEO_TIMELINE_ALL, params),
  getVideoTimelineRecommend: (params) => https.get(W.GET_VIDEO_TIMELINE_RECOMMEND, params),
  getRelatedAllvideo: (params) => https.get(W.GET_RELATED_ALLVIDEO, params),
  getVideoDetail: (params) => https.get(W.GET_VIDEO_DETAIL, params),
  getVideoDetailInfo: (params) => https.get(W.GET_VIDEO_DETAIL_INFO, params),
  getVideoUrl: (params) => https.get(W.GET_VIDEO_URL, params),
  // #endregion
};

export default api;
