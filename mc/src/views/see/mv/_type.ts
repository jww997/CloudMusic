import see_P from '@/apis/see/typeParams';
import see_R from '@/apis/see/typeResult';

export interface PARAMS extends see_P.PARAMS_MV_ALL {
}

export interface RESULT extends see_R.RESULT_MV_ALL {
  current: number;
}