import { LIMIT, OFFSET, BEFORE } from "../_type"

// #region about playlist
export interface PARAMS_PLAYLIST_CATLIST { }
export interface PARAMS_PLAYLIST_HOT { }
export interface PARAMS_TOP_PLAYLIST extends OFFSET {
  order: 'new' | 'hot' = 'hot'; // 最新和最热
  cat: string = '全部'; // 可从歌单分类接口获取(/playlist/catlist)
}
export interface PARAMS_PLAYLIST_HIGHQUALITY_TAGS { }
export interface PARAMS_TOP_PLAYLIST_HIGHQUALITY extends BEFORE {
  cat?: string = '全部' // 标签
  updateTime?: number// 获取下一页数据
}
export type ID = { id: number };
export interface PARAMS_RELATED_PLAYLIST extends ID { }
export interface PARAMS_PLAYLIST_DETAIL extends ID {
  s?: number = 8; // 歌单最近的S个收藏者
}
export interface PARAMS_PLAYLIST_DETAIL_DYNAMIC extends ID { }
export interface PARAMS_PLAYLIST_UPDATE_PLAYCOUNT extends ID { }
export interface PARAMS_PLAYLIST_CREATE {
  name: string //  歌单名
  privacy?: 10 // 是否设置为隐私歌单，默认否，传'10'则设置成隐私歌单
  type?: 'NORMAL' | 'VIDEO' | 'SHARED' = 'NORMAL'// 歌单类型, 'VIDEO'视频歌单 'SHARED'共享歌单
}
export interface PARAMS_PLAYLIST_DELETE { id: number | string }
export interface PARAMS_PLAYLIST_SUBSCRIBE extends ID {
  t: 1 | 0 // 1 收藏, 0 取消收藏
}
export interface PARAMS_PLAYLIST_SUBSCRIBERS extends ID, OFFSET { }
export interface PARAMS_PLAYLIST_TRACKS {
  op: 'add' | 'del' // 增加add 删除del
  pid: number // 歌单id
  tracks: number | string // 歌曲id 可多个, 用逗号隔开
}
export interface PARAMS_PLAYLIST_TRACK_ADD {
  pid: number; // 歌单id
  ids: number | string; // 视频id 支持多个, 用, 隔开
}
export interface PARAMS_PLAYLIST_TRACK_DELETE {
  pid: number; // 歌单id
  ids: number | string; // 视频id 支持多个, 用, 隔开
}
export interface PARAMS_SIMI_PLAYLIST extends ID { }
export interface PARAMS_RECOMMEND_RESOURCE { }


export interface PARAMS_COMMENT_PLAYLIST extends ID, OFFSET {
  before?: string; // 分页参数,取上一页最后一项的 time 获取下一页数据
}
// #endregion

// #region about artist
export interface PARAMS_ARTIST_LIST extends OFFSET {
  initial: string | number // 按首字母索引查找参数, 热门传-1,#传 0
  type: -1 | 1 | 2 | 3 // -1全部 1男歌手 2女歌手 3乐队
  area: -1 | 7 | 96 | 8 | 16 | 0 // -1全部 7华语 96欧美 8日本 16韩国 0其他
}
export interface PARAMS_ARTIST_SUB extends ID {
  t: 1 | 0 // 1 为收藏,其他为取消收藏
}
export interface PARAMS_ARTIST_TOP_SONGS extends ID { }
export interface PARAMS_ARTIST_SONGS extends ID, OFFSET {
  order?: 'hot' | 'time'
}
export interface PARAMS_ARTIST_SUBLIST { }
export interface PARAMS_ARTIST extends ID { }
export interface PARAMS_ARTIST_MV extends ID { }
export interface PARAMS_ARTIST_ALBUM extends ID, OFFSET { }
export interface PARAMS_ARTIST_DESC extends ID { }
export interface PARAMS_ARTIST_DETAIL extends ID { }
export interface PARAMS_SIMI_ARTISTS extends OFFSET { }
export interface PARAMS_TOPLIST_ARTIST {
  type: 1 | 2 | 3 | 4 // 1 华语 2 欧美 3 韩国 4 日本
}
export interface PARAMS_ARTIST_NEW_SONG extends BEFORE { }
export interface PARAMS_ARTIST_NEW_MV extends BEFORE { }
export interface PARAMS_ARTIST_FANS extends ID { }
export interface PARAMS_ARTIST_FOLLOW_COUNT extends ID, OFFSET { }
export interface PARAMS_ARTIST_VIDEO extends ID {
  size?: number = 10 // 返回数量
  cursor?: number = 0 // 返回数据的cursor
  order?: 0 | 1 = 0// 0时间排序 1热度排序
}
// #endregion

// #region about search
export type KEYWORD = { keywords: string }
export interface PARAMS_SEARCH extends OFFSET, KEYWORD {
  type?: number // 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音
}
export interface PARAMS_CLOUDSEARCH extends OFFSET, PARAMS_SEARCH { }
export interface PARAMS_SEARCH_DEFAULT { }
export interface PARAMS_SEARCH_SUGGEST extends KEYWORD {
  type?: string // 传 'mobile' 则返回移动端数据
}
export interface PARAMS_SEARCH_MULTIMATCH extends KEYWORD { }
export interface PARAMS_SEARCH_HOT { }
export interface PARAMS_SEARCH_HOT_DETAIL { }
// #endregion

// #region about album
export interface PARAMS_ALUBUM extends ID, OFFSET, BEFORE { }
export interface PARAMS_ALUBUM_DETAIL_DYNAMIC extends ID { }
export interface PARAMS_ALUBUM_SUB extends ID {
  t: 1 | 0 // 1 收藏, 0 取消收藏
}
export interface PARAMS_ALUBUM_SUBLIST extends OFFSET { }
export interface PARAMS_ALUBUM_NEWEST extends ID, OFFSET { }
export interface PARAMS_COMMENT_ALUBUM extends ID, OFFSET, BEFORE { }



// #endregion

// #region about dj
export interface PARAMS_PERSONALIZED_DJPROGRAM { }
export interface PARAMS_DJ_BANNER { }
export interface PARAMS_DJ_PERSONALIZE_RECOMMEND extends LIMIT { }
export interface PARAMS_DJ_SUBSCRIBER extends ID, LIMIT {
  time?: number = -1 //分页参数,默认-1
}
export interface PARAMS_USER_AUDIO {
  uid: number; // 用户id
}
export interface PARAMS_DJ_HOT extends OFFSET { }
export interface PARAMS_DJ_PROGRAM_TOPLIST extends OFFSET { }
export interface PARAMS_DJ_TOPLIST_PAY extends LIMIT { }
export interface PARAMS_DJ_PROGRAM_TOPLIST_HOURS extends LIMIT { }
export interface PARAMS_DJ_TOPLIST_HOURS extends LIMIT { }
export interface PARAMS_DJ_TOPLIST_NEWCOMER extends LIMIT { }
export interface PARAMS_DJ_TOPLIST_POPULAR extends LIMIT { }
export interface PARAMS_DJ_TOPLIST extends OFFSET {
  type?: 'new' | 'hot' // 榜单类型, new 为新晋电台榜,hot为热门电台榜
}
export interface PARAMS_RADIO_HOT extends OFFSET {
  cateId: number // 类别 id,可通过 /dj/category/recommend 接口获取
}
export interface PARAMS_DJ_RECOMMEND { }
export interface PARAMS_DJ_CATELIST { }
export interface PARAMS_DJ_RECOMMEND_TYPE {
  type?: number  // 电台类型 , 数字 , 可通过/dj/catelist获取 , 对应关系为 id 对应 此接口的 type, name 对应类型
}
export interface PARAMS_DJ_SUB {
  rid: string // 电台的id
}
export interface PARAMS_DJ_SUBLIST { }
export interface PARAMS_DJ_PAYGIFT extends OFFSET { }
export interface PARAMS_DJ_CATEGORY_EXCLUDEHOT { }
export interface PARAMS_DJ_CATEGORY_RECOMMEND { }
export interface PARAMS_DJ_TODAY_PERFERED { }
export interface PARAMS_DJ_DETAIL {
  rid: string // 电台的id
}
export interface PARAMS_DJ_PROGRAM {
  rid: string // 电台的id
  asc?: boolean = false // 排序方式,默认为 false (新 => 老 ) 设置 true 可改为 老 => 新
}
export interface PARAMS_DJ_PROGRAM_DETAIL {
  id: number // 电台节目的id
}
export interface PARAMS_COMMENT_DJ extends OFFSET, BEFORE {
  id: number // 电台节目的id
}


// #endregion

// #region about toplist
export interface PARAMS_TOPLIST { }
export interface PARAMS_TOPLIST_DETAIL { }
// #endregion



export interface PARAMS_SONG_URL extends ID { }
export interface PARAMS_SONG_DETAIL {
  ids: number | string; // 音乐 id(支持多个 id, 用 , 隔开)
}
export interface PARAMS_LYRIC extends ID { }
export interface PARAMS_CHECK_MUSIC extends ID, BR {
  br?: number = 999000; // 码率 默认999000
}

export interface PARAMS_PERSONALIZED extends LIMIT { }
export interface PARAMS_PERSONAL_FM { }
export interface PARAMS_HOMEPAGE_DRAGON_BALL { }


