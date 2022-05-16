import { CODE, MESSAGE } from './type';
import { DJ, SONG } from "../listen/typeResult"

export type ARTISTS = {
  alias?: null
  followed?: boolean
  id: number
  img1v1Url?: string
  name: string
  transNames?: null
}

export type MV = {
  alg?: string
  artistId: number
  artistName: string
  artists: ARTISTS[]
  briefDesc?: null
  brs?: {
    br: number
    point: number
    size: number
  }[]
  canDislike?: boolean
  commentCount?: number
  commentThreadId?: string
  copywriter?: string
  cover: string
  coverId?: number
  coverId_str?: string
  desc?: null
  duration: number
  id: number
  lastRank?: number
  mark?: number
  mv?: {
    aliaName: string
    appTitle: string
    appword: string
    area: string
    artists: ARTISTS[]
    authId: number
    caption: number
    captionLanguage: string
    dayplays: number
    desc: string
    fee: number
    id: number
    monthplays: number
    mottos: string
    neteaseonly: number
    oneword: string
    online: number
    pic4v3: number
    pic16v9: number
    plays: number
    publishTime: string
    score: number
    stars: null
    status: number
    style: null
    subTitle: string
    subType: string
    title: string
    topWeeks: string
    transName: string
    type: string
    upban: number
    videos: {
      check: boolean
      container: string
      duration: number
      height: number
      md5: string
      size: number
      tag: string
      tagSign: {
        br: number
        mvtype: string
        resolution: number
        tagSign: string
        type: string
      }
      url: string
      width: number
    }[]
    weekplays: number
  }
  nType?: number
  name: string
  picUrl?: string
  playCount: number
  price?: null
  publishTime?: string
  score?: number
  shareCount?: number
  subCount?: number
  subed?: boolean
  transNames?: string[]
  trackNumberUpdateTime?: null
  type?: number
  videoGroup?: {
    id: number
    name: string
    type: number
  }[]
}

export interface RESULT_MV_ALL extends CODE {
  count: number
  data: MV[]
  hasMore: boolean
}
export interface RESULT_MV_FIRST extends CODE {
  data: MV[]
}
export interface RESULT_EXCLUSIVE_RCMD extends CODE {
  data: MV[]
  more: boolean
}
export interface RESULT_PERSONALIZED_MV extends CODE {
  category: number
  result: MV[]
}
export interface RESULT_TOP_MV extends CODE {
  data: MV[]
  hasMore: boolean
  updateTime: number
}
export interface RESULT_MV_DETAIL extends CODE {
  bufferPic: string
  bufferPicFS: string
  data: MV
  loadingPic: string
  loadingPicFS: string
  mp: {
    cp: number
    dl: number
    fee: number
    id: number
    msg: null
    mvFee: number
    normal: boolean
    payed: number
    pl: number
    sid: number
    st: number
    unauthorized: boolean
  }
  subed: boolean
}
export interface RESULT_MV_DETAIL_INFO extends CODE {
  commentCount: number
  liked: boolean
  likedCount: number
  shareCount: number
}
export interface RESULT_MV_URL extends CODE {
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
export type GRUOP = {
  abExtInfo: null
  id: number
  name: string
  relatedVideoType: string | null
  selectTab: boolean
  url: null
}
export interface RESULT_VIDEO_GROUP_LIST extends CODE, MESSAGE {
  data: GRUOP[],
}
export interface RESULT_VIDEO_CATEGORY_LIST extends CODE, MESSAGE {
  data: GRUOP[],
}
export type VIDEO = {
  advertisement?: boolean
  alg?: string
  aliaName?: null
  authType?: number
  avatarUrl?: string
  commentCount?: number
  coverUrl: string
  creator: DJ[]
  description?: string
  durationms?: number
  hasRelatedGameAd?: boolean
  height?: number
  liveRoom?: null
  markTypes: number[]
  playTime: number
  praised?: boolean
  praisedCount?: number
  previewDurationms?: number
  previewUrl?: string
  publishTime?: number
  relateSong?: SONG[]
  relatedInfo?: null
  resolutions?: {
    resolution: number
    size: number
  }[]
  scm?: string
  shareCount?: number
  subscribeCount?: number
  subscribed?: boolean
  threadId?: string
  title: string
  transName?: null
  type?: number
  urlInfo?: null
  vid: string
  videoGroup?: {
    alg: null
    id: number
    name: string
  }[]
  videoUserLiveInfo?: null
  width?: number
}
export type VIDEO2 = {
  advertisement: boolean
  authType: number
  avatarUrl: string
  commentCount: number
  coverUrl: string
  creator: DJ
  description: string
  durationms: number
  hasRelatedGameAd: boolean
  height: number
  markTypes: number[]
  playTime: number
  praisedCount: number
  publishTime: number
  resolutions: {
    resolution: number
    size: number
  }[]
  shareCount: number
  subscribeCount: number
  threadId: string
  title: string
  vid: string
  videoGroup: {
    alg: null
    id: number
    name: string
  }[]
  videoUserLiveInfo: null
  width: number
}
export type TIMELINE = {
  alg: string
  data: VIDEO
  displayed: boolean
  extAlg: null
  type: number
}
export interface RESULT_VIDEO_GROUP extends CODE {
  datas: TIMELINE[]
  hasmore: boolean
  msg: string
  rcmdLimit: number
}
export interface RESULT_VIDEO_TIMELINE_ALL extends CODE {
  datas: TIMELINE[]
  hasmore: boolean
  msg: string
  rcmdLimit: number
}
export interface RESULT_VIDEO_TIMELINE_RECOMMEND extends CODE {
  datas: TIMELINE[]
  hasmore: boolean
  msg: string
}
export interface RESULT_RELATED_ALLVIDEO extends CODE, MESSAGE {
  data: VIDEO[]
}
export interface RESULT_VIDEO_DETAIL extends CODE, MESSAGE {
  data: VIDEO2
}
export interface RESULT_VIDEO_DETAIL_INFO extends CODE {
  commentCount: number
  liked: boolean
  likedCount: number
  shareCount: number
}
export interface RESULT_VIDEO_URL extends CODE {
  urls: {
    id: string
    needPay: boolean
    payInfo: null
    r: number
    size: number
    url: string
    validityTime: number
  }[]
}

