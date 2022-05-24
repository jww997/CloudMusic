/**
 * @description 音乐接口常量
 * @author Gavin
 */
export enum LISTEN {
  API_ARTIST_LIST = '/artist/list', // 歌手分类列表
  API_ARTIST_SUB = '/artist/sub', // 收藏歌手 && 取消收藏歌手
  API_ARTIST_TOP_SONG = '/artist/top/song', // 歌手热门50首歌曲
  API_ARTIST_SONGS = '/artist/songs', // 歌手全部歌曲
  API_ARTIST_SUBLIST = '/artist/sublist', // 收藏的歌手列表
  // API_TOPIC_SUBLIST = '/topic/sublist', // 收藏的专栏
  // API_VIDEO_SUB = '/video/sub', // 收藏视频
  // API_MV_SUB = '/mv/sub', // 收藏MV && 取消收藏MV
  // API_MV_SUBLIST = '/mv/sublist', // 收藏的MV列表
  API_PLAYLIST_CATLIST = '/playlist/catlist', // 歌单分类
  API_PLAYLIST_HOT = '/playlist/hot', // 热门歌单分类
  API_TOP_PLAYLIST = '/top/playlist', // 歌单(网友精选碟)
  API_PLAYLIST_HIGHQUALITY_TAGS = '/playlist/highquality/tags', // 精品歌单标签列表
  API_TOP_PLAYLIST_HIGHQUALITY = '/top/playlist/highquality', // 获取精品歌单
  API_RELATED_PLAYLIST = '/related/playlist', // 相关歌单推荐
  API_PLAYLIST_DETAIL = '/playlist/detail', // 获取歌单详情
  API_PLAYLIST_DETAIL_DYNAMIC = '/playlist/detail/dynamic', // 获取歌单详情动态
  API_PLAYLIST_UPDATE_PLAYCOUNT = '/playlist/update/playcount', // 歌单更新播放量
  API_SONG_URL = '/song/url', // 获取音乐url
  API_CHECK_MUSIC = '/check/music', // 音乐是否可用
  API_SEARCH = '/search', // 搜索
  API_CLOUDSEARCH = '/cloudsearch', // 搜索(更全)
  API_SEARCH_DEFAULT = '/search/default', // 默认搜索关键词
  API_SEARCH_HOT = '/search/hot', // 热搜列表(简略)
  API_SEARCH_HOT_DETAIL = '/search/hot/detail', // 热搜列表(详细)
  API_SEARCH_SUGGEST = '/search/suggest', // 搜索建议
  API_SEARCH_MULTIMATCH = '/search/multimatch', // 搜索多重匹配
  API_PLAYLIST_CREATE = '/playlist/create', // 新建歌单
  API_PLAYLIST_DELETE = '/playlist/delete', // 删除歌单
  API_PLAYLIST_SUBSCRIBE = '/playlist/subscribe', // 收藏歌单 && 取消收藏歌单
  API_PLAYLIST_SUBSCRIBERS = '/playlist/subscribers', // 歌单收藏者
  API_PLAYLIST_TRACKS = '/playlist/tracks', // 对歌单添加或删除歌曲
  API_PLAYLIST_TRACK_ADD = '/playlist/track/add', // 收藏视频到视频歌单
  API_PLAYLIST_TRACK_DELETE = '/playlist/track/delete', // 删除视频歌单里的视频
  // API_PLAYLIST_VIDEO_RECENT = '/playlist/video/recent', // 最近播放的视频
  API_LYRIC = '/lyric', // 获取歌词
  // API_TOP_SONG = '/top/song', // 新歌速递
  // API_HOMEPAGE_BLOCK_PAGE = '/homepage/block/page', // 首页发现
  API_HOMEPAGE_DRAGON_BALL = '/homepage/dragon/ball', // 首页发现圆形图标入口列表
  // API_COMMENT_MUSIC = '/comment/music', // 歌曲评论
  // API_COMMENT_FLOOR = '/comment/floor', // 楼层评论
  API_COMMENT_ALBUM = '/comment/album', // 专辑评论
  API_COMMENT_PLAYLIST = '/comment/playlist', // 歌单评论
  // API_COMMENT_MV = '/comment/mv', // mv评论
  API_COMMENT_DJ = '/comment/dj', // 电台节目评论
  // API_COMMENT_VIDEO = '/comment/video', // 视频评论
  // API_COMMENT_HOT = '/comment/hot', // 热门评论
  // API_COMMENT_NEW = '/comment/new', // 新版评论接口
  // API_COMMENT_LIKE = '/comment/like', // 给评论点赞
  // API_HUG_COMMENT = '/hug/comment', // 抱一抱评论
  // API_COMMENT_HUG_LIST = '/comment/hug/list', // 评论抱一抱列表
  // API_COMMENT = '/comment', // 发送评论 && 删除评论
  // API_HOMEPAGE_BANNER = '/banner', // banner
  // API_RESOURCE_LIKE = '/resource/like', // 资源点赞( MV,电台,视频)
  // API_PLAYLIST_MYLIKE = '/playlist/mylike', // 获取点赞过的视频
  API_SONG_DETAIL = '/song/detail', // 获取歌曲详情
  API_ALBUM = '/album', // 获取专辑内容
  API_ALBUM_DETAIL_DYNAMIC = '/album/detail/dynamic', // 专辑动态信息
  API_ALBUM_SUB = '/album/sub', // 收藏专辑 && 取消收藏专辑
  API_ALBUM_SUBLIST = '/album/sublist', // 获取已收藏专辑列表
  API_ARTISTS = '/artists', // 获取歌手单曲
  API_ARTISTS_MV = '/artists/mv', // 获取歌手mv
  API_ARTISTS_ALBUM = '/artists/album', // 获取歌手专辑
  API_ARTISTS_DESC = '/artists/desc', // 获取歌手描述
  API_ARTISTS_DETAIL = '/artists/detail', // 获取歌手详情
  API_SIMI_ARTISTS = '/simi/artist', // 获取相似歌手
  API_SIMI_PLAYLIST = '/simi/playlist', // 获取相似歌单
  // API_SIMI_MV = '/simi/mv', // 获取相似mv
  // API_SIMI_SONG = '/simi/song', // 获取相似音乐
  // API_SIMI_USER = '/simi/user', // 获取最近5个听了这首歌的用户
  API_RECOMMEND_RESOURCE = '/recommend/resource', // 获取每日推荐歌单
  // API_RECOMMEND_SONGS = '/recommend/songs', // 获取每日推荐歌曲
  // API_HISTORY_RECOMMEND_SONGS = '/history/recommend/songs', // 获取历史日推可用日期列表
  // API_HISTORY_RECOMMEND_SONGS_DETAIL = '/history/recommend/songs/detail', // 获取历史日推详情数据
  API_PERSONALFM = '/personal_fm', // 私人FM
  // API_DAILYSIGNIN = '/daily_signin', // 签到
  // API_SING_HAPPY_INFO = '/sign/happy/info', // 乐签信息
  // API_LIKE = '/like', // 喜欢音乐
  // API_LIKELIST = '/likelist', // 喜欢音乐列表
  // API_FMTRASH = '/fm_trash', // 垃圾桶
  // API_TOP_ALBUM = '/top/album', // 新碟上架
  // API_ALBUM_NEW = '/album/new', // 全部新碟
  API_ALBUM_NEWEST = '/album/newest', // 最新专辑
  // API_SCROBBLE = '/scrobble', // 听歌打卡
  API_TOP_ARTISTS = '/top/artists', // 热门歌手
  API_PERSONALIZED = '/personalized', // 推荐歌单
  // API_PERSONALIZED_NEWSONG = '/personalized/newsong', // 推荐新音乐
  API_PERSONALIZED_DJPROGRAM = '/personalized/djprogram', // 推荐电台
  // API_PERSONALIZED_PRIVATECONTENT = '/personalized/privatecontent', // 独家放送(入口列表)
  // API_PERSONALIZED_PRIVATECONTENT_LIST = '/personalized/privatecontent/list', // 独家放送列表
  API_TOPLIST = '/toplist', // 所有榜单
  API_TOPLIST_DETAIL = '/toplist/detail', // 所有榜单内容摘要
  API_TOPLIST_ARTIST = '/toplist/artist', // 歌手榜
  // API_USER_CLOUD = '/user/cloud', // 云盘
  // API_USER_CLOUD_DETAIL = '/user/cloud/detail', // 云盘数据详情
  // API_USER_CLOUD_DEL = '/user/cloud/del', // 云盘歌曲删除
  // API_CLOUD = '/cloud', // 云盘上传
  // API_CLOUD_MATCH = '/cloud/match', // 云盘歌曲信息匹配纠正
  API_DJ_BANNER = '/dj/banner', // 电台banner
  API_DJ_PERSONALIZE_RECOMMEND = '/dj/personalize/recommend', // 电台个性推荐
  API_DJ_SUBSCRIBER = '/dj/subscriber', // 电台订阅者列表
  API_USER_AUDIO = '/user/audio', // 用户电台
  API_DJ_HOT = '/dj/hot', // 热门电台
  API_DJ_PROGRAM_TOPLIST = '/dj/program/toplist', // 电台节目榜
  API_DJ_TOPLIST_PAY = '/dj/toplist/pay', // 电台付费精品
  API_DJ_PROGRAM_TOPLIST_HOURS = '/dj/program/toplist/hours', // 电台24小时节日榜
  API_DJ_TOPLIST_HOURS = '/dj/toplist/hours', // 电台24小时主播榜
  API_DJ_TOPLIST_NEWCOMER = '/dj/toplist/newcomer', // 电台24小时新人榜
  API_DJ_TOPLIST_POPULAR = '/dj/toplist/popular', // 电台最热主播榜
  API_DJ_TOPLIST = '/dj/toplist', // 电台新晋电台榜 && 电台热门电台榜
  API_RADIO_HOT = '/dj/radio/hot', // 类别热门电台
  API_DJ_RECOMMEND = '/dj/recommend', // 电台推荐
  API_DJ_CATELIST = '/dj/catelist', // 电台分类
  API_DJ_RECOMMEND_TYPE = '/dj/recommend/type', // 电台分类推荐
  API_DJ_SUB = '/dj/sub', // 电台订阅
  API_DJ_SUBLIST = '/dj/sublist', // 电台订阅列表
  API_DJ_PAYGIFT = '/dj/paygift', // 电台付费精选
  API_DJ_CATEGORY_EXCLUDEHOT = '/dj/category/excludehot', // 电台非热门类型
  API_DJ_CATEGORY_RECOMMEND = '/dj/category/recommend', // 电台推荐类型
  API_DJ_TODAY_PERFERED = '/dj/today/perfered', // 电台今日优选
  API_DJ_DETAIL = '/dj/detail', // 电台详情
  API_DJ_PROGRAM = '/dj/program', // 电台节目
  API_DJ_PROGRAM_DETAIL = '/dj/program/detail', // 电台节目详情

  // API_ALBUM_LIST = '/album/list', // 数字专辑-新碟上架
  // API_ALBUM_SONGSALEBOARD = '/album_songsaleboard', // 数字专辑&数字单曲-榜单
  // API_ALBUM_LIST_STYLE = '/album/list/style', // 数字专辑-语种风格馆
  // API_ALBUM_DETAIL = '/album/detail', // 数字专辑详情
  // API_DIGITALALBUM_PURCHASED = '/digitalAlbum/purchased', // 我的数字专辑
  // API_DIGITALALBUM_ORDERING = '/digitalAlbum/ordering', // 购买数字专辑
  // API_CALENDAR = '/calendar', // 音乐日历
  API_ARTIST_NEW_SONG = '/artist/new/song', // 关注歌手新歌
  API_ARTIST_NEW_MV = '/artist/new/mv', // 关注歌手新 MV
  API_LISTEN_TOGETHER_STATUS = '/listen/together/status', // 一起听状态
  // API_BATCH = '/batch', // batch 批量请求接口
  // API_SONG_PURCHASED = '/song/purchased', // 已购单曲
  // API_MLOG_URL = '/mlog/url', // 获取 mlog 播放地址
  // API_MLOG_TO_VIDEO = '/mlog/to/video', // 将 mlog id 转为视频 id
  API_ARTIST_FANS = '/artist/fans', // 歌手粉丝
  API_ARTIST_FOLLOW_COUNT = '/artist/follow/count', // 歌手粉丝数量
  // API_DIGITALALBUM_DETAIL = '/digitalAlbum/detail', // 数字专辑详情
  // API_DIGITALALBUM_SALES = '/digitalAlbum/sales', // 数字专辑销量
  // API_MUSICIAN_DATA_OVERVIEW = '/musician/data/overview', // 音乐人数据概况
  // API_MUSICIAN_PLAY_TREND = '/musician/play/trend', // 音乐人播放趋势
  // API_MUSICIAN_TASKS = '/musician/tasks', // 音乐人任务
  // API_MUSICIAN_TASKS_NEW = '/musician/tasks/new', // 音乐人任务(新)
  // API_MUSICIAN_CLOUDBEAN = '/musician/cloudbean', // 账号云豆数
  // API_MUSICIAN_CLOUDBEAN_BOTAIN = '/musician/cloudbean/obtain', // 领取云豆
  // API_MUSICIAN_SIGN = '/musician/sign', // 音乐人签到
  // API_MLOG_MUSIC_RCMD = '/mlog/music/rcmd', // 歌曲相关视频
  // API_PLAYLIST_PRIVACY = '/playlist/privacy', // 公开隐私歌单
  // API_SONG_DOWNLOAD_URL = '/song/download/url', // 获取客户端歌曲下载 url
  API_ARTIST_VIDEO = '/artist/video', // 获取歌手视频
}