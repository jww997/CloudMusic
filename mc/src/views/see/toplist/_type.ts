import P from '@/apis/see/typeParams';
import R from '@/apis/see/typeResult';
import T from '@/types'
export type TAG = T.TAG

export interface PARAMS extends P.PARAMS_TOP_MV { }

export interface RESULT extends R.RESULT_TOP_MV { current: number }