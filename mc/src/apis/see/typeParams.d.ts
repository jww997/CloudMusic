import { OFFSET } from "../_type"


export interface PARAMS_MV_ALL extends OFFSET {
  area: '全部' | '内地' | '港台' | '欧美' | '日本' | '韩国' = '全部'
  type: '全部' | '官方版' | '原生' | '现场版' | '网易出品' = '全部'
  order: '上升最快' | '最热' | '最新' = '上升最快'
}
export interface PARAMS_MV_FIRST extends LIMIT {
  area?: '全部' | '内地' | '港台' | '欧美' | '日本' | '韩国' = '全部'
}
export interface PARAMS_EXCLUSIVE_RCMD extends OFFSET { }
export interface PARAMS_PERSONALIZED_MV { }
export interface PARAMS_TOP_MV extends OFFSET {
  area: '全部' | '内地' | '港台' | '欧美' | '日本' | '韩国' = '全部'
}
export interface PARAMS_MV_DETAIL {
  mvid: string
}
export interface PARAMS_MV_DETAIL_INFO {
  mvid: string
}
export interface PARAMS_MV_URL { }
export interface PARAMS_VIDEO_GROUP_LIST { }
export interface PARAMS_VIDEO_CATEGORY_LIST { }
export interface PARAMS_VIDEO_GROUP {
  id: number
  offset?: number = 0
}
export interface PARAMS_VIDEO_TIMELINE_ALL {
  offset?: number = 0
}
export interface PARAMS_VIDEO_TIMELINE_RECOMMEND {
  offset?: number = 0
}
export interface PARAMS_RELATED_ALLVIDEO {
  id: string
}
export interface PARAMS_VIDEO_DETAIL {
  id: string
}
export interface PARAMS_VIDEO_DETAIL_INFO {
  vid: string
}
export interface PARAMS_VIDEO_URL {
  id: string
}