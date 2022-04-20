import type { CODE, MESSAGE } from '../type';
import { COMMENT, PLAYLIST, SONG } from '../listen/typeResult';

// #region about login
export type BINDING = {
  bindingTime: number
  expired: boolean
  expiresIn: number
  id: number
  refreshTime: number
  tokenJsonStr: string
  type: number
  url: string
  userId: number
}
export type USER = {
  accountStatus?: number
  accountType?: number
  allSubscribedCount?: number
  anchor?: boolean
  anonym?: number
  artistIdentity?: []
  authStatus: number
  authenticated?: boolean
  authenticationTypes?: number
  authority?: number
  avatarDetail?: {
    identityIconUrl: string
    identityLevel: number
    userType: number
  } | null
  avatarImgId?: number
  avatarImgIdStr?: string
  avatarImgId_str?: string
  avatarUrl: string
  backgroundImgId: number
  backgroundImgIdStr?: string
  backgroundUrl?: string
  birthday: number
  blacklist?: boolean
  cCount?: number
  city?: number
  createTime?: number
  defaultAvatar?: boolean
  description?: string
  detailDescription?: string
  djStatus?: number
  eventCount?: number
  expertTags: string[] | null
  experts?: {} | null
  followMe?: boolean
  followTime?: null
  followed: boolean
  followeds?: number
  follows?: number
  gender?: number
  lastLoginIP?: string
  lastLoginTime?: number
  liveInfo?: null
  locationInfo?: null
  locationStatus?: number
  mutual: boolean
  nickname: string
  playlistBeSubscribedCount?: number
  playlistCount?: number
  privacyItemUnlimit?: { area: boolean, college: boolean, age: boolean, villageAge: boolean }
  province?: number
  py?: string
  remarkName: null
  sCount?: number
  sDJPCount?: number
  shortUserName?: string
  signature?: string
  subscribeTime?: number
  time?: number
  urlAnalyze?: boolean
  userId: number
  userName?: string
  userType: number
  vipType?: number
  vipRights?: {
    associator: { vipCode: number, rights: boolean }
    musicPackage: null
    redVipAnnualCount: number
    redVipLevel: number
  } | null
  vipType?: number
  viptypeVersion?: number
}
export type ACCOUNT = {
  anonimousUser: boolean
  ban: number
  baoyueVersion: number
  createTime: number
  donateVersion: number
  id: number
  paidFee?: boolean
  salt?: string
  status: number
  tokenVersion: number
  type: number
  uninitialized?: boolean
  userName: string
  vipType: number
  viptypeVersion?: number
  whitelistAuthority: number
}
export interface RESULT_CELLPHONE_LOGIN extends CODE {
  account: ACCOUNT
  bindings: BINDING[]
  cookie: string
  loginType: number
  profile: USER
  token: string
}
export interface RESULT_LOGIN extends RESULT_CELLPHONE_LOGIN { }
export interface RESULT_LOGIN_QR_KEY extends CODE {
  data: {
    code: number;
    unikey: string;
  }
}
export interface RESULT_LOGIN_QR_CREATE extends CODE {
  data: {
    qrimg: string
    qrurl: string
  }
}
export interface RESULT_LOGIN_QR_CHECK extends CODE {
  cookie?: string
  message: string
  avatarUrl?: string
  nickname?: string
}
export interface RESULT_LOGIN_STATUS {
  data: {
    account: ACCOUNT | null
    code: number
    profile: USER | null
  }
}
export interface RESULT_LOGOUT extends CODE { }
export interface RESULT_CAPTCHA_SEND extends CODE, MESSAGE {
  data: boolean
}
export interface RESULT_CAPTCHA_VERIFY { }
export interface RESULT_REGISTER_CELLPHONE extends CODE {
  account: ACCOUNT
  bindings: BINDING[]
  profile: USER
  token: string
}
// #endregion

// #region about user
export interface RESULT_USER_DETAIL extends CODE {
  adValid: boolean
  bindings: BINDING[]
  createDays: number
  createTime: number
  level: number
  listenSongs: number
  mobileSign: boolean
  pcSign: boolean
  peopleCanSeeMyPlayRecord: boolean
  profile: USER
  profileVillageInfo: {
    imageUrl: string
    targetUrl: string
    title: string
  }
  userPoint: {
    balance: number
    blockBalance: number
    status: number
    updateTime: number
    userId: number
    version: number
  }
}
export interface RESULT_USER_ACCOUNT extends CODE {
  account: ACCOUNT
  profile: USER
}
export interface RESULT_USER_SUBCOUNT extends CODE {
  artistCount: number
  createDjRadioCount: number
  createdPlaylistCount: number
  djRadioCount: number
  mvCount: number
  newProgramCount: number
  programCount: number
  subPlaylistCount: number
}
export interface RESULT_USER_LEVEL extends CODE {
  data: {
    info: string
    level: number
    nextLoginCount: number
    nextPlayCount: number
    nowLoginCount: number
    nowPlayCount: number
    progress: number
    userId: number
  }
  full: boolean
}
export interface RESULT_USER_BINDING extends CODE {
  bindings: BINDING[]
}
export interface RESULT_CAPTCHA_VERIFY extends CODE {
  message: string
  msg: string
}
export interface RESULT_USER_UPDATE extends CODE { }
export interface RESULT_USER_PLAYLIST extends CODE {
  more: boolean
  playlist: PLAYLIST[]
  version: string
}
export interface RESULT_USERCOMMENT_HISTORY extends CODE {
  data: {
    commentCount: number
    comments: COMMENT[]
    hasMore: boolean
    hotComments: COMMENT[]
    reminder: boolean
  }
}
export interface RESULT_USERCOMMENT_DJ extends CODE {
  count: number
  more: boolean
  programs: []
}
export interface RESULT_USERCOMMENT_FOLLOWS extends CODE {
  follow: USER[]
  more: boolean
  touchCount: number
}
export interface RESULT_USERCOMMENT_FOLLOWEDS extends CODE {
  touchCount: number
  followeds: USER[]
  more: boolean
  newCount: number
  size: number
}
export type RESOURCEINFO = {
  artistAreaCode: number
  artistId: number
  creator: null
  encodedId: null
  eventType: number
  id: number
  imgUrl: null
  name: string
  nativeUrl: null
  resourceSpecialType: null
  subTitle: null
  userId: number
  webUrl: null
}
export type COMMENTTHREAD = {
  commentCount: number
  extProperties: null
  hotCount: number
  id: string
  latestLikedUsers: { s: number; t: number }[]
  likedCount: number
  resourceId: number
  resourceInfo: RESOURCEINFO
  resourceOwnerId: number
  resourceTitle: string
  resourceType: number
  shareCount: number
  xInfo: null
}
export type INFO = {
  commentCount: number
  commentThread: COMMENTTHREAD
  comments: null
  latestLikedUsers: null
  liked: boolean
  likedCount: number
  resourceId: number
  resourceType: number
  shareCount: number
  threadId: string
}
export type TAILMARK = {
  circle: {
    imageUrl: string
    member: string
    postCount: string
  }
  extInfo: null
  markOrpheusUrl: string
  markResourceId: string
  markType: string
}
export interface RESULT_USERCOMMENT_EVENT extends CODE {
  events: {
    actId: number
    actName: string
    alterLinkUrl: null
    alterLinkWebviewUrl: null
    anonymityInfo: null
    bottomActivityInfos: {
      ext: null
      h5Target: string
      id: string
      name: string
      subType: number
      target: string
      throughInfo: null
    }[]
    discussId: string
    eventActionToast: null
    eventTime: number
    expireTime: number
    extJsonInfo: {
      actId: number
      actIds: number[]
      activityInfos: null
      anonymityInfo: null
      circleId: string
      circlePubType: null
      extId: null
      extParams: {}
      extSource: null
      extType: string
      pointTopicInfo: null
      privacySetting: number
      questionId: null
      tailMark: TAILMARK | null
      titleAlias: null
      typeDesc: null
      uuid: null
      voiceInfo: null
    }
    extSource: null
    extType: string
    forwardCount: number
    h5Target: null
    id: number
    info: INFO
    insiteForwardCount: number
    json: string
    logInfo: null
    lotteryEventData: null
    more: boolean
    pendantData: {
      id: number
      imageUrl: string
      imageAndroidUrl: string
      imageIosUrl: string
    }
    pics: {
      format: string
      height: number
      originUrl: string
      pcRectangleUrl: string
      pcSquareUrl: string
      rectangleUrl: string
      squareUrl: string
      width: number
    }[]
    pointTopicInfo: null
    privacySetting: number
    question: null
    rcmdInfo: null
    relationTopic: boolean
    showTime: number
    tailMark: TAILMARK
    tmplId: number
    topActivityInfos: []
    topEvent: boolean
    type: number
    typeDesc: null
    user: USER
    uuid: null
    voice: null
    xInfo: {
      info: INFO
      insiteForwardCount: number
      topEvent: boolean
    }[]
    lasttime: number
    more: boolean
    size: number
  }
}
export interface RESULT_EVENT_FORWARD extends CODE {
  data: {
    eventId: number
    eventTime: number
    msg: string
  }
}
export interface RESULT_EVENT_DEL extends CODE { }
export interface RESULT_FOLLOW extends CODE, MESSAGE {
  data: {
    actionCode: string
    blockText: string
    btnText: string
    frontRuleIds: number[]
    orpheusUrl: string
    params: { event_id: string, sign: string }
    url: string
    verifyId: number
    verifyToken: string
    verifyType: number
    verifyUrl: string
  }[]
}
export interface RESULT_USER_RECORD extends CODE {
  allData?: {
    playCount: number
    score: number
    song: SONG
  }[]
  weekData?: {
    playCount: number
    score: number
    song: SONG
  }[]
}




// #endregion


export interface RESULT_INNER_VERSION extends CODE {
  data: {
    version: string
  }
}