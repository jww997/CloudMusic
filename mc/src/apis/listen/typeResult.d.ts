import type { CODE, MESSAGE } from '../type'
import type { USER } from "../account/typeResult"

// #region about playlist
export type TAG = {
  activity?: boolean
  category: number
  hot: boolean
  imgId?: number
  imgUrl?: null
  id?: number
  name: string
  resourceCount?: number
  resourceType?: number
  type: number

  createTime?: number
  playlistTag?: {
    category: number
    createTime: number
    highQuality: number
    highQualityPos: number
    id: number
    name: string
    officialPos: number
    position: number
    type: number
    usedCount: number
  }
  position?: number
  usedCount?: number
}
export interface RESULT_PLAYLIST_CATLIST extends CODE {
  all: TAG
  categories: { 0: string, 1: string, 2: string, 3: string, 4: string }
  sub: TAG[]
}
export interface RESULT_PLAYLIST_HOT extends CODE {
  tags: TAG[]
}

export type PLAYLIST = {
  adType: number
  alg?: string
  anonimous: boolean
  artists?: null
  backgroundCoverId?: number
  backgroundCoverUrl?: null
  cloudTrackCount: number
  commentCount?: number
  commentThreadId: string
  copywriter?: string
  coverImgId: number
  coverImgId_str: string
  coverImgUrl: string
  coverStatus: number
  createTime: number
  creator: USER | null
  description: string
  englishTitle?: null
  highQuality: boolean
  id: number
  name: string
  newImported: boolean
  opRecommend?: boolean
  ordered: boolean
  playCount: number
  privacy: number
  recommendInfo: null
  shareCount: number
  shareStatus?: null
  sharedUsers?: null
  specialType: number
  status: number
  subscribed: null
  subscribedCount: number
  subscribers: USER[]
  tags: string[]
  titleImage?: number
  titleImageUrl?: null
  totalDuration: number
  trackCount: number
  trackNumberUpdateTime: number
  trackUpdateTime: number
  tracks: SONG[]
  updateTime: number
  userId: number

  historySharedUsers?: null
  officialPlaylistType?: null
  remixVideo?: null
  trackIds?: {
    alg: string
    at: number
    id: number
    rcmdReason: string
    sc: null
    t: number
    uid: number
    v: number
  }[]
  updateFrequency?: null
  videoIds?: null
  videos?: null
}
export type LISTMARK = {
  more: boolean
  total: number
}
export interface RESULT_TOP_PLAYLIST extends CODE, LISTMARK {
  cat: string
  playlists: PLAYLIST[]
}
export interface RESULT_PLAYLIST_HIGHQUALITY_TAGS extends CODE {
  tags: TAG[]
}
export interface RESULT_TOP_PLAYLIST_HIGHQUALITY extends CODE, LISTMARK {
  lasttime: number
  playlists: PLAYLIST[]
}
export interface RESULT_RELATED_PLAYLIST extends CODE {
  playlists: {
    coverImgUrl: string
    creator: { userId: string, nickname: string }
    id: string
    name: string
  }[]
}
export interface RESULT_PLAYLIST_DETAIL_DYNAMIC extends CODE {
  bookedCount: number
  code: number
  commentCount: number
  followed: boolean
  playCount: number
  remarkName: null
  remixVideo: null
  shareCount: number
  subscribed: boolean
}
export interface RESULT_PLAYLIST_UPDATE_PLAYCOUNT extends CODE { }
export type PRIVILEGES = {
  chargeInfoList: {
    chargeMessage: null
    chargeType: number
    chargeUrl: null
    rate: number
  }[]
  cp: number
  cs: boolean
  dl: number
  downloadMaxbr: number
  fee: number
  fl: number
  flag: number
  freeTrialPrivilege: {
    resConsumable: boolean
    userConsumable: boolean
  }
  id: number
  maxbr: number
  paidBigBang?: boolean
  payed: number
  pc?: null
  pl: number
  playMaxbr: number
  preSell: boolean
  realPayed?: number
  rscl: null
  sp: number
  st: number
  subp: number
  toast: boolean
}
export interface RESULT_PLAYLIST_DETAIL extends CODE {
  privileges: PRIVILEGES
  playlist: PLAYLIST;
  relatedVideos: null;
  resEntrance: null;
  sharedPrivilege: null;
  urls: null;
}
export interface RESULT_PLAYLIST_CREATE extends CODE {
  id: number
  playlist: PLAYLIST
}
export interface RESULT_PLAYLIST_DELETE extends CODE {
  data: null
  message: null
  msg: null
}
export interface RESULT_PLAYLIST_SUBSCRIBE extends CODE { }
export interface RESULT_PLAYLIST_SUBSCRIBERS extends CODE {
  more: boolean
  subscribers: USER[]
  total: number
}
export interface RESULT_PLAYLIST_TRACKS {
  body: {
    cloudCount: number
    code: number
    count: number
    coverImgId?: string
    coverImgUrl?: string
    message?: string
    trackIds?: string
  }
  cookie: []
  status: number
}
export interface RESULT_PLAYLIST_TRACK_ADD extends CODE {
  message: message
  msg: message
}
export interface RESULT_PLAYLIST_TRACK_DELETE extends CODE {
  message: message
  msg: message
}
export interface RESULT_SIMI_PLAYLIST extends CODE {
  playlists: PLAYLIST[]
}
export type RECOMMEND = {
  alg: string;
  canDislike?: boolean;
  copywriter: string;
  createTime?: number
  creator?: USER
  highQuality?: boolean;
  id: number;
  name: string;
  picUrl: string;
  playCount?: number;
  trackCount: number;
  trackNumberUpdateTime?: number;
  type: number;
  userId?: number
}
export interface RESULT_RECOMMEND_RESOURCE extends CODE {
  featureFirst: boolean
  haveRcmdSongs: boolean
  recommend: RECOMMEND
}





export type COMMENT = {
  beReplied: []
  commentId: number
  commentLocationType: number
  content: string
  contentResource: null
  decoration: {}
  expressionUrl: null
  grade: null
  liked: boolean
  likedCount: number
  needDisplayTime: boolean
  parentCommentId: number
  pendantData: null
  repliedMark: null
  showFloorComment: null
  status: number
  time: number
  timeStr: string
  user: USER
}
export interface RESULT_COMMENT_PLAYLIST extends CODE, LISTMARK {
  commentBanner: null
  comments: COMMENT[]
  hotComments: COMMENT[]
  isMusician: boolean
  moreHot: boolean
  topComments: []
  userId: number
}
// #endregion

// #region about artlist
export interface RESULT_ARTIST_LIST extends CODE {
  artists: ARTIST[]
  more: boolean
}
export interface RESULT_ARTIST_SUB extends CODE, MESSAGE {
  data: null
}
export interface RESULT_ARTIST_TOP_SONGS extends CODE {
  songs: SONG[] | null
  more: boolean
}
export interface RESULT_ARTIST_SONGS extends CODE, LISTMARK {
  songs: SONG[] | null
}
export interface RESULT_ARTIST_SUBLIST extends CODE {
  count: number
  data: ARTIST[]
  hasMore: boolean
}
export interface RESULT_ARTIST extends CODE {
  hotSongs: SONG[] | null
  more: boolean
}
export interface RESULT_ARTIST_MV extends CODE {
  artist: ARTIST
  hotSongs: SONG[] | null
  more: boolean
}
export interface RESULT_ARTIST_ALBUM extends CODE {
  artist: ARTIST
  hotSongs: SONG[] | null
  more: boolean
}
export interface RESULT_ARTIST_DESC extends CODE {
  artist: ARTIST
  hotSongs: SONG[] | null
  more: boolean
}
export interface RESULT_ARTIST_DETAIL extends CODE {
  artist: ARTIST
  hotSongs: SONG[] | null
  more: boolean
}
export interface RESULT_SIMI_ARTISTS extends CODE {
  artists: ARTIST[]
}
export interface RESULT_TOP_ARTISTS extends CODE {
  artists: ARTIST[]
  more: boolean
}
export interface RESULT_TOPLIST_ARTIST extends CODE {
  artists: ARTIST[]
  type: number
  updateTime: number
}
export type NEWWORKS = {
  accompanimentIds: number[]
  albumId: number
  albumSongCount: number
  blockTitle: {
    artisAlias: null
    artisTransName: null
    artistId: number
    artistName: string
    artistUserId: number
    imgUrl: string
    publishDate: string
    publishTime: number
    resourceId: number
    resourceName: string
  }
  blockType: string
  publishTime: number
  songLists: SONG[]
}
export interface RESULT_ARTIST_NEW_SONG extends CODE, MESSAGE {
  data: {
    hasMore: boolean
    newSongCount: number
    newWorks: NEWWORKS[]
  }
}
export interface RESULT_ARTIST_NEW_MV extends CODE, MESSAGE {
  data: {
    hasMore: boolean
    newWorks: NEWWORKS[]
  }
}
export interface RESULT_ARTIST_FANS extends CODE, MESSAGE {
  data: {
    userProfile: USER
    vipRights: {
      associator: { vipCode: number, rights: boolean }
      musicPackage: null
      redVipAnnualCount: number
    }
  }[]
}
export interface RESULT_ARTIST_FOLLOW_COUNT extends CODE, MESSAGE {
  data: {
    fansCnt: number
    follow: boolean
    followCnt: number
    followDay: string
    isFollow: boolean
  }
}
export interface RESULT_ARTIST_VIDEO extends CODE, MESSAGE {
  data: {
    page: {
      cursor: string
      more: boolean
      size: number
    }
    records: {
      actionTime: null
      alg: null
      followedShowReason: null
      id: string
      logInfo: null
      matchField: number
      matchFieldContent: null
      position: null
      priorShowLive: null
      reason: null
      reasonType: null
      resource: RESOURCE
      sameCity: boolean
      srcId: null
      type: number
    }[]
  }
}
// #endregion

// #region about search
export type ARTIST = {
  accountId?: number
  albumSize?: number
  alg?: string
  alia?: string[]
  alias: string[]
  briefDesc?: stirng
  fansCount?: number
  fansSize?: number
  followed?: boolean
  id: number
  identifyTag?: null
  img1v1?: number
  img1v1Id?: number
  img1v1Id_str?: string
  img1v1Url: string
  info?: string
  isSubed?: null
  lastRank?: number
  mlogUser?: null
  musicSize?: number
  mvSize?: number | null
  name: string
  occupation?: string
  officialTags?: []
  picId: number
  picId_str?: string
  picUrl: string | null
  publishTime?: number | null
  score?: number
  searchCircle?: {
    entranceText: string
    entranceUrl: string
    id: string
  }
  showPrivateMsg?: null
  topicPerson?: number
  trans: string | null
  transNames?: string[] | null
  videoSize?: number
}
export type ALBUM = {
  alias?: []
  artist: ARTIST
  artists?: ARTIST[]
  blurPicUrl?: string
  briefDesc?: string
  company?: string
  companyId?: number
  copyrightId: number
  description?: string
  id: number
  info?: {
    commentCount: number
    commentThread: {
      commentCount: number
      hotCount: number
      id: string
      latestLikedUsers: null
      likedCount: number
      resourceId: number
      resourceInfo: {
        creator: null
        encodedId: null
        id: number
        imgUrl: string
        name: string
        subTitle: null
        userId: number
        webUrl: null
      }
      resourceOwnerId: number
      resourceTitle: string
      resourceType: number
      shareCount: number
    }
    comments: null
    latestLikedUsers: null
    liked: false
    likedCount: number
    resourceId: number
    resourceType: number
    shareCount: number
    threadId: string
  }
  mark: number
  name: string
  onSale?: boolean
  paid?: boolean
  pic?: number
  picId: number
  picId_str?: string
  publishTime: number
  size: number
  songs?: []
  status: number
  subType?: string
  tags?: string
  type?: string
}
export interface RESULT_SEARCH extends CODE {
  result: {
    hasMore: boolean
    songCount: number
    songs: {
      album: ALBUM
      alias: []
      artists: ARTIST[]
      copyrightId: number
      duration: number
      fee: number
      ftype: number
      id: number
      mark: number
      mvid: number
      name: string
      rUrl: null
      rtype: number
      status: number
    }[]
  }
}
export interface RESULT_CLOUDSEARCH extends CODE {
  result: {
    searchQcReminder: null
    songCount: number
    songs: SONG[]
  }
}
export interface RESULT_SEARCH_DEFAULT extends CODE, MESSAGE {
  data: {
    action: number
    alg: string
    bizQueryInfo: string
    gap: number
    logInfo: null
    realkeyword: string
    searchType: number
    showKeyword: string
    source: null
    styleKeyword: {
      descWord: string
      keyWord: null
    }
  }
}
export interface RESULT_SEARCH_SUGGEST extends CODE {
  result: {
    albums: ALBUM[]
    artists: ARTIST[]
    order: string[]
    playlists: {
      action: null
      actionType: null
      bookCount: number
      coverImgUrl: string
      creator: null
      description: string
      highQuality: boolean
      id: number
      name: string
      officialTags: null
      playCount: number
      recommendText: null
      specialType: number
      subscribed: boolean
      trackCount: number
      userId: number
    }[]
    songs: {
      album: ALBUM
      alias: []
      artists: ARTIST[]
      copyrightId: number
      duration: number
      fee: number
      ftype: number
      id: number
      mark: number
      mvid: number
      name: string
      rUrl: null
      rtype: number
      status: number
    }[]
  }
}
export type RESOURCE = {
  mlogBaseData: {
    audio?: null
    audioDTO?: null
    coverColor: number
    coverDetail?: null
    coverDynamicUrl: null
    coverHeight: number
    coverPicKey: string
    coverUrl: string
    coverWidth: number
    desc?: string
    duration: number
    graphic?: null
    greatCover?: boolean
    id: string
    interveneText: null
    mixInfo?: null
    originalTitle?: null
    pubTime: number
    relatedPubUsers?: null
    talk?: null
    text: string
    threadId: string
    type: number
    video?: null
    videos?: {
      check: boolean
      container: string
      duration: number
      height: number
      md5: string
      size: number
      tag: string
      tagSign: { br: number, type: string, tagSign: string }
      url: string
      width: number
    }
  }
  mlogExtVO: {
    algSong?: null
    artistName: string
    artists: ARTIST[]
    canCollect: boolean
    channelTag: null
    commentCount: number
    likedCount: number
    playCount: number
    rcmdInfo: null
    shareCount?: number
    song: {
      albumName: string
      artists: {
        artistId: number
        artistName: string
      }[]
      coverUrl: string
      duration: number
      endTime: null
      id: number
      name: string
      privilege: null
      startTime: null
    } | null
    specialTag: null
    strongPushIcon: null
    strongPushMark: null
    videoStartPlayTime?: null
  }
  mlogPlaylists?: null
  relatedPubUsers?: null
  shareUrl: string
  source?: null
  status: number
  userProfile: null
}
export interface RESULT_SEARCH_MULTIMATCH extends CODE {
  result: {
    artist?: ARTIST[]
    new_mlog?: {
      alg: string
      baseInfo: {
        alg: null
        id: string
        matchField: number
        matchFieldContent: null
        mlogBaseDataType: number
        position: null
        reason: null
        resource: RESOURCE
        sameCity: boolean
        type: number
      }
      internalType: null
      resourceId: string
      resourceName: string
      resourceType: string
    }[]
    orders: string[]
    playlist?: PLAYLIST[]
    orpheus?: {
      content: null
      coverId: number
      id: number
      picUrl: null
      resourceUrl: null
    }
  }
}
export interface RESULT_SEARCH_HOT extends CODE {
  result: {
    hots: {
      first: string
      iconType: number
      second: number
      third: null
    }[]
  }
}
export interface RESULT_SEARCH_HOT_DETAIL extends CODE, MESSAGE {
  data: {
    alg: string
    content: string
    iconType: number
    iconUrl: string | null
    score: number
    searchWord: string
    source: number
    url: string
  }[]
}
// #endregion

// #region about album
export interface RESULT_ALUBUM extends CODE {
  album: ALBUM
  resourceState: true
  songs: SONG[]
}
export interface RESULT_ALUBUM_DETAIL_DYNAMIC extends CODE {
  albumNearbyProduct: { url: string, title: string, subTitle: string }
  commentCount: number
  isSub: boolean
  likedCount: number
  onSale: boolean
  shareCount: number
  subCount: number
  subTime: number
}
export interface RESULT_ALUBUM_SUB extends CODE {
  time: number
}
export interface RESULT_ALUBUM_SUBLIST extends CODE {
  count: number
  cover: string
  data: {
    alias: []
    artists: ARTIST[]
    hasMore: boolean
    paidCount: number
  }
}
export interface RESULT_ALUBUM_NEWEST extends CODE {
  albums: ALBUM[]
}
export interface RESULT_COMMENT_ALUBUM extends CODE {
  cnum: number
  commentBanner: null
  comments: COMMENT[]
  hotComments: COMMENT[]
  isMusician: boolean
  more: boolean
  moreHot: boolean
  topComments: COMMENT[]
  total: number
  userId: number
}




// #endregion

export interface RESULT_SONG_URL extends CODE {
  data: {
    br: number;
    canExtend: boolean;
    code: number;
    encodeType: string | null;
    expi: number;
    fee: number;
    flag: number;
    freeTimeTrialPrivilege: {
      remainTime: number
      resConsumable: boolean
      type: number
      userConsumable: boolean
    };
    freeTrialInfo: null
    freeTrialPrivilege: {
      listenType: null
      resConsumable: boolean
      userConsumable: boolean
    };
    gain: number
    id: number
    level: string | null
    md5: string
    payed: number
    size: number
    type: string
    uf: null
    url: string | null
    urlSource: number
  }[]
}
export type SONG = {
  a: null;
  al: {
    id: number
    name: string
    pic: number
    picUrl: string
    pic_str?: string
    tns?: []
  };
  alia: [];
  ar: {
    alias?: []
    id: number
    name: string
    tns?: string[]
  }[];
  cd: string;
  cf: string;
  copyright?: number;
  cp: number;
  crbt: null;
  djId: number;
  dt: number;
  entertainmentTags?: null;
  fee: number;
  ftype: number;
  h: { br: number, fid: number, size: number, vd: number } | null;
  id: number;
  l: { br: number, fid: number, size: number, vd: number } | null;
  m: { br: number, fid: number, size: number, vd: number } | null;
  mark?: number;
  mst: number;
  mv: number;
  name: string;
  no: number;
  noCopyrightRcmd: null;
  originCoverType?: number;
  originSongSimpleData?: null;
  pop: number;
  privilege?: PRIVILEGES
  pst: number;
  publishTime?: number;
  resourceState?: boolean;
  rt: string;
  rtUrl: null;
  rtUrls: [];
  rtype: number;
  rurl: null;
  s_id?: number;
  single?: number;
  songJumpInfo?: null
  st: number;
  t: number;
  tagPicList?: null
  tns?: string[]
  v: number;
  version?: number
}
export interface RESULT_SONG_DETAIL extends CODE {
  privileges: PRIVILEGES
  songs: SONG[]
}
export interface RESULT_LYRIC extends CODE {
  klyric: {
    lyric: string
    version: number
  }
  lrc: {
    lyric: string
    version: number
  }
  lyricUser: {
    demand: number
    id: number
    nickname: string
    status: number
    uptime: number
    userid: number
  }
  qfy: boolean
  sfy: boolean
  sgc: boolean
  tlyric: {
    lyric: string
    version: number
  }
  transUser: {
    demand: number
    id: number
    nickname: string
    status: number
    uptime: number
    userid: number
  }
}
export interface RESULT_CHECK_MUSIC extends MESSAGE {
  success: boolean
}



export interface RESULT_PERSONALIZED extends CODE {
  cateory: number;
  hasTaste: boolean;
  result: RECOMMEND[];
}

