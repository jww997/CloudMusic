import { ResType } from '@/utils/modules/https';
import * as P from './typeParams';
import * as R from './typeResult';

export interface API {
  getMvAll: (params?: P.PARAMS_MV_ALL) => Promise<R.RESULT_MV_ALL>
  getMvFirst: (params?: P.PARAMS_MV_FIRST) => Promise<R.RESULT_MV_FIRST>
  getMvExclusiveRcmd: (params?: P.PARAMS_EXCLUSIVE_RCMD) => Promise<R.RESULT_EXCLUSIVE_RCMD>
  getPersonalizedMv: (params?: P.PARAMS_PERSONALIZED_MV) => Promise<R.RESULT_PERSONALIZED_MV>;
  getTopMv: (params?: P.PARAMS_TOP_MV) => Promise<R.RESULT_TOP_MV>;
  getMvDetail: (params: P.PARAMS_MV_DETAIL) => Promise<R.RESULT_MV_DETAIL>;
  getMvDetailInfo: (params: P.PARAMS_MV_DETAIL_INFO) => Promise<R.RESULT_MV_DETAIL_INFO>;
  getMvUrl: (params: P.PARAMS_MV_URL) => Promise<R.RESULT_MV_URL>;
  getVideoGroupList: (params?: P.PARAMS_VIDEO_GROUP_LIST) => Promise<R.RESULT_VIDEO_GROUP_LIST>;
  getVideoCategoryList: (params?: P.PARAMS_VIDEO_CATEGORY_LIST) => Promise<R.RESULT_VIDEO_CATEGORY_LIST>;
  getVideoGroup: (params: P.PARAMS_VIDEO_GROUP) => Promise<R.RESULT_VIDEO_GROUP>;
  getVideoTimelineAll: (params?: P.PARAMS_VIDEO_TIMELINE_ALL) => Promise<R.RESULT_VIDEO_TIMELINE_ALL>;
  getVideoTimelineRecommend: (params?: P.PARAMS_VIDEO_TIMELINE_RECOMMEND) => Promise<R.RESULT_VIDEO_TIMELINE_RECOMMEND>;
  getRelatedAllvideo: (params: P.PARAMS_RELATED_ALLVIDEO) => Promise<R.RESULT_RELATED_ALLVIDEO>;
  getVideoDetail: (params: P.PARAMS_VIDEO_DETAIL) => Promise<R.RESULT_VIDEO_DETAIL>;
  getVideoDetailInfo: (params: P.PARAMS_VIDEO_DETAIL_INFO) => Promise<R.RESULT_VIDEO_DETAIL_INFO>;
  getVideoUrl: (params: P.PARAMS_VIDEO_URL) => Promise<R.RESULT_VIDEO_URL>;

}
