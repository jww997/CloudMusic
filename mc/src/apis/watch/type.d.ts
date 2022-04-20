import { ResType } from '@/utils/modules/https';
import * as P from './typeParams';
import * as R from './typeResult';

export interface API {
  getMvDetail: (params?: P.PARAMS_MV_DETAIL) => Promise<RESULT_MV_DETAIL>;

  getPersonalizedMv: (params?: P.PARAMS_PERSONALIZED_MV) => Promise<RESULT_PERSONALIZED_MV>;
}
