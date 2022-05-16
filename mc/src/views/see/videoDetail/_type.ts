import P from '@/apis/see/typeParams';
import R from '@/apis/see/typeResult';

export interface PARAMS extends P.PARAMS_VIDEO_DETAIL { }
export interface PARAMS2 extends P.PARAMS_VIDEO_DETAIL_INFO { }
export interface PARAMS3 extends P.PARAMS_RELATED_ALLVIDEO { }
export interface PARAMS4 extends P.PARAMS_VIDEO_URL { }

export interface RESULT extends R.RESULT_VIDEO_DETAIL { }
export interface RESULT2 extends R.RESULT_VIDEO_DETAIL_INFO { }
export interface RESULT3 extends R.RESULT_RELATED_ALLVIDEO { }
export interface RESULT4 extends R.RESULT_VIDEO_URL { }