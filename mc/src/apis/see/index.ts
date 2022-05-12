/**
 * @description 视频
 * @author Gavin
 */
import { https } from '@/utils/modules/https';
import { SEE as S } from '@/constant/api/see';
import * as T from './type';

const api: T.API = {
  // #region about video
  getMvAll: (params) => https.get(S.API_MV_ALL, params),
  getMvFirst: (params) => https.get(S.API_MV_FIRST, params),
  getMvExclusiveRcmd: (params) => https.get(S.API_MV_EXCLUSIVE_RCMD, params),
  getPersonalizedMv: (params) => https.get(S.API_PERSONALIZED_MV, params),
  getTopMv: (params) => https.get(S.API_TOP_MV, params),
  getMvDetail: (params) => https.get(S.API_MV_DETAIL, params),
  getMvDetailInfo: (params) => https.get(S.API_MV_DETAIL_INFO, params),
  getMvUrl: (params) => https.get(S.API_MV_URL, params),
  getVideoGroupList: (params) => https.get(S.API_VIDEO_GROUP_LIST, params),
  getVideoCategoryList: (params) => https.get(S.API_VIDEO_CATEGORY_LIST, params),
  getVideoGroup: (params) => https.get(S.API_VIDEO_GROUP, params),
  getVideoTimelineAll: (params) => https.get(S.API_VIDEO_TIMELINE_ALL, params),
  getVideoTimelineRecommend: (params) => https.get(S.API_VIDEO_TIMELINE_RECOMMEND, params),
  getRelatedAllvideo: (params) => https.get(S.API_RELATED_ALLVIDEO, params),
  getVideoDetail: (params) => https.get(S.API_VIDEO_DETAIL, params),
  getVideoDetailInfo: (params) => https.get(S.API_VIDEO_DETAIL_INFO, params),
  getVideoUrl: (params) => https.get(S.API_VIDEO_URL, params),
  // #endregion
};

export default api;
