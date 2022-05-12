/**
 * @description 账户接口常量
 * @author Gavin
 */
export enum ACCOUNT {
  API_LOGIN_CELLPHONE = '/login/cellphone', // 手机登录
  API_LOGIN = '/login', // 邮箱登录
  API_LOGIN_QR_KEY = '/login/qr/key', // 二维码key生成
  API_LOGIN_QR_CREATE = '/login/qr/create', // 二维码生成
  API_LOGIN_QR_CHECK = '/login/qr/check', // 二维码检测扫码状态
  // API_LOGIN_REFRESH = '/login/refresh', // 刷新登录
  API_CAPTCHA_SEND = '/captcha/sent', // 发送验证码
  API_CAPTCHA_VERIFY = '/captcha/verify', // 验证验证码
  API_REGISTER_CELLPHONE = '/register/cellphone', // 注册 && 修改密码
  // API_CELLPHONE_EXISTENCE_CHECK = '/cellphone/existence/check', // 检测手机号码是否已注册
  // API_ACTIVATE_INIT_PROFILE = '/activate/init/profile', // 初始化昵称
  // API_NICKNAME_CHECK = '/nickname/check', // 重复昵称检测
  // API_REBIND = '/rebind', // 更换绑定手机
  API_LOGOUT = '/logout', // 退出登录
  API_LOGIN_STATUS = '/login/status', // 登录状态
  API_USER_DETAIL = '/user/detail', // 获取用户详情
  API_USER_ACCOUNT = '/user/account', // 获取账户信息
  API_USER_SUBCOUNT = '/user/subcount', // 获取用户信息 && 歌单 && 收藏 && mv && dj数量
  API_USER_LEVEL = '/user/level', // 获取用户等级信息
  API_USER_BINDING = '/user/binding', // 获取用户绑定信息
  API_USER_REPLACEPHONE = '/user/replacephone', // 获取用户绑定手机
  API_USER_UPDATE = '/user/update', // 更新用户信息
  // API_AVATAR_UPLOAD = '/avatar/upload', // 更新头像
  // API_COUNTRIES_CODE_LIST = '/countries/code/list', // 国家编码列表
  API_USER_PLAYLIST = '/user/playlist', // 获取用户歌单
  // API_PLAYLIST_UPDATE = '/playlist/update', // 更新歌单
  // API_PLAYLIST_DESC_UPDATE = '/playlist/desc/update', // 更新歌单描述
  // API_PLAYLIST_NAME_UPDATE = '/playlist/name/update', // 更新歌单名
  // API_PLAYLIST_TAGS_UPDATE = '/playlist/tags/update', // 更新歌单标签
  // API_PLAYLIST_COVER_UPDATE = '/playlist/cover/update', // 歌单封面上传
  // API_PLAYLIST_ORDER_UPDATE = '/playlist/order/update', // 调整歌单顺序
  // API_SONG_ORDER_UPDATE = '/song/order/update', // 调整歌曲顺序
  API_USER_COMMENT_HISTORY = '/user/comment/history', // 获取用户历史评论
  API_USER_DJ = '/user/dj', // 获取用户电台
  API_USER_FOLLOWS = '/user/follows', // 获取用户关注列表
  API_USER_FOLLOWEDS = '/user/followeds', // 获取用户粉丝列表
  API_USER_EVENT = '/user/event', // 获取用户动态
  API_EVENT_FORWARD = '/event/forward', // 转发用户动态
  API_EVENT_DEL = '/event/del', // 删除用户动态
  // API_SHARE_RESOURCE = '/share/resource', // 分享歌曲、歌单、mv、电台、电台节目到动态
  // API_COMMENT_EVENT = '/comment/event', // 获取动态评论
  API_FOLLOW = '/follow', // 关注用户 && 取消关注用户
  API_USER_RECORD = '/user/record', // 获取用户播放记录
  // API_HOT_TOPIC = '/hot/topic', // 获取热门话题
  // API_TOPIC_DETAIL = '/topic/detail', // 获取话题详情
  // API_TOPIC_DETAIL_EVENT_HOT = '/topic/detail', // 获取话题详情热门动态
  // API_PLAYMODE_INTELLIGENCE_LIST = '/playmode/intelligence/list', // 心动模式 && 智能播放
  // API_COMMENT_HOTWALL_LIST = '/comment/hotwall/list', // 云村热评(官方下架,暂不能用)
  // API_EVENT = '/event', // 获取动态消息

  // API_VIP_GROWTHPOINT = '/vip/growthpoint', // vip 成长值
  // API_VIP_GROWTHPOINT_DETAILS = '/vip/growthpoint/details', // vip 成长值获取记录
  // API_VIP_TASKS = '/vip/tasks', // vip 任务
  // API_VIP_GROWTHPOINT_GET = '/vip/growthpoint/get', // 领取 vip 成长值
  // API_VIP_INFO = '/vip/info', // 获取 VIP 信息

  // API_MSG_PRIVATE = '/msg/private', // 通知 - 私信
  // API_SEND_TEXT = '/send/text', // 发送私信
  // API_SEND_SONG = '/send/song', // 发送私信(带歌曲)
  // API_SEND_ALBUM = '/send/album', // 发送私信(带专辑)
  // API_SEND_PLAYLIST = '/send/playlist', // 发送私信(带歌单)
  // API_MSG_RECENTCONTACT = '/msg/recentcontact', // 最近联系人
  // API_MSG_PRIVATE_HISTORY = '/msg/private/history', // 私信内容
  // API_MSG_COMMENTS = '/msg/comments', // 通知 - 评论
  // API_MSG_FORWARDS = '/msg/forwards', // 通知 - @我
  // API_MSG_NOTICES = '/msg/notices', // 通知 - 通知
  // API_SETTING = '/setting', // 设置

  // API_YUNBEI = '/yunbei', // 云贝
  // API_YUNBEI_TODAY = '/yunbei/today', // 云贝今日签到信息
  // API_YUNBEI_SIGN = '/yunbei/sign', // 云贝签到
  // API_YUNBEI_INFO = '/yunbei/info', // 云贝账户信息
  // API_YUNBEI_TASKS = '/yunbei/tasks', // 云贝所有任务
  // API_YUNBEI_TASKS_TODO = '/yunbei/tasks/todo', // 云贝 todo 任务
  // API_YUNBEI_TASKS_FINISH = '/yunbei/tasks/finish', // 云贝完成任务
  // API_YUNBEI_TASKS_RECEIPT = '/yunbei/tasks/receipt', // 云贝收入
  // API_YUNBEI_TASKS_EXPENSE = '/yunbei/tasks/expense', // 云贝支出  // API_YUNBEI_RCMD_SONG = '/yunbei/rcmd/song', // 云贝推歌
  // API_YUNBEI_RCMD_SONG_HISTORY = '/yunbei/rcmd/song/history', // 云贝推歌历史记录

  // API_RECORD_RECENT_SONG = '/record/recent/song', // 最近播放-歌曲
  // API_RECORD_RECENT_VIDEO = '/record/recent/video', // 最近播放-视频
  // API_RECORD_RECENT_VOICE = '/record/recent/voice', // 最近播放-声音
  // API_RECORD_RECENT_PLAYLIST = '/record/recent/playlist', // 最近播放-歌单
  // API_RECORD_RECENT_ALBUM = '/record/recent/album', // 最近播放-专辑
  // API_RECORD_RECENT_DJ = '/record/recent/dj', // 最近播放-播客
  // API_SIGNIN_PROGRESS = '/signin/progress', // 签到进度
  API_INNER_VERSION = '/inner/version', // 内部版本接口
  // API_PLAYLIST_UPDATE_PLAYCOUNT = '/playlist/update/playcount', // 黑胶时光机
}
