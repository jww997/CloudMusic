import { CODE } from '../type';

export interface RESULT_MV_DETAIL extends CODE {
  data: {
    code: number
    expi: number
    fee: number
    id: number
    md5: string
    msg: string
    mvFee: number
    promotionVo: null
    r: number
    size: number
    st: number
    url: string
  }
}

export type PERSONALIZED = {
  alg: string
  artistId: number
  artistName: string
  artists: { id: number, name: string }[]
  canDislike: boolean
  copywriter: string
  duration: number
  id: number
  name: string
  picUrl: string
  playCount: number
  subed: boolean
  trackNumberUpdateTime: null
  type: number
}
export interface RESULT_PERSONALIZED_MV extends CODE {
  category: number
  result: PERSONALIZED[]
}
