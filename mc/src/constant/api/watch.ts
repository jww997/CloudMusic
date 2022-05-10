/**
 * @description 视频接口常量
 * @author Gavin
 */
export enum WATCH {
  GET_MV_ALL = '/mv/all', // 全部mv
  GET_MV_FIRST = '/mv/first', // 最新mv
  GET_MV_EXCLUSIVE_RCMD = '/mv/exclusive/rcmd', // 网易出品mv
  GET_PERSONALIZED_MV = '/personalized/mv', // 推荐mv
  GET_TOP_MV = '/top/mv', // mv排行
  GET_MV_DETAIL = '/mv/detail', // 获取mv数据
  GET_MV_DETAIL_INFO = '/mv/detail/info', // 获取mv点赞转发评论数数据
  GET_MV_URL = '/mv/url', // mv地址
  GET_VIDEO_GROUP_LIST = '/video/group/list', // 获取视频标签列表
  GET_VIDEO_CATEGORY_LIST = '/video/category/list', // 获取视频分类列表
  GET_VIDEO_GROUP = '/video/group', // 获取 视频标签&&视频分类 下的视频
  GET_VIDEO_TIMELINE_ALL = '/video/timeline/all', // 获取全部视频列表
  GET_VIDEO_TIMELINE_RECOMMEND = '/video/timeline/recommend', // 获取推荐视频
  GET_RELATED_ALLVIDEO = '/related/allvideo', // 相关视频
  GET_VIDEO_DETAIL = '/video/detail', // 视频详情
  GET_VIDEO_DETAIL_INFO = '/video/detail/info', // 获取视频点赞转发评论数数据
  GET_VIDEO_URL = '/video/url', // 获取视频播放地址
}
