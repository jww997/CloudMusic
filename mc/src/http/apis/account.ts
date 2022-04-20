/**
 * 账户
 */
export const POST_LOGIN_CELLPHONE: string = '/login/cellphone' // 手机登录
export const POST_LOGIN: string = '/login' // 邮箱登录
export const POST_LOGIN_QR_KEY: string = '/login/qr/key' // 二维码key生成
export const POST_LOGIN_QR_CREATE: string = '/login/qr/create' // 二维码生成
export const POST_LOGIN_QR_CHECK: string = '/login/qr/check' // 二维码检测扫码状态
// export const POST_LOGIN_REFRESH:string = "/login/refresh" // 刷新登录
export const POST_CAPTCHA_SEND: string = '/captcha/sent' // 发送验证码
export const POST_CAPTCHA_VERIFY: string = '/captcha/verify' // 验证验证码
// export const POST_REGISTER_CELLPHONE:string = "/register/cellphone" // 注册 && 修改密码
// export const POST_CELLPHONE_EXISTENCE_CHECK:string = "/cellphone/existence/check" // 检测手机号码是否已注册
// export const POST_ACTIVATE_INIT_PROFILE:string = "/activate/init/profile" // 初始化昵称
// export const POST_REBIND:string = "/rebind" // 更换绑定手机
export const POST_LOGOUT: string = '/logout' // 退出登录
export const POST_LOGIN_STATEUS: string = '/login/status' // 登录状态

// export const GET_USER_DETAIL:string = "/user/detail" // 获取用户详情
// export const GET_USER_ACCOUNT:string = "/user/account" // 获取账户信息
// export const GET_USER_SUBCOUNT:string = "/user/subcount" // 获取用户信息 && 歌单 && 收藏 && mv && dj数量
// export const GET_USER_LEVEL:string = "/user/level" // 获取用户等级信息
// export const GET_USER_BINDING:string = "/user/binding" // 获取用户绑定信息
// export const GET_USER_REPLACEPHONE:string = "/user/replacephone" // 获取用户绑定手机
// export const GET_USER_UPDATE:string = "/user/update" // 更新用户信息
// export const GET_AVATAR_UPLOAD:string = "/avatar/upload" // 更新头像
// export const GET_COUNTRIES_CODE_LIST:string = "/countries/code/list" // 国家编码列表

export const GET_USER_PLAYLIST: string = '/user/playlist' // 获取用户歌单
// export const GET_PLAYLIST_UPDATE:string = "/playlist/update" // 更新歌单
// export const GET_PLAYLIST_DESC_UPDATE:string = "/playlist/desc/update" // 更新歌单描述
// export const GET_PLAYLIST_NAME_UPDATE:string = "/playlist/name/update" // 
// export const GET_PLAYLIST_TAGS_UPDATE:string = "/playlist/tags/update" // 更新歌单标签
// export const GET_PLAYLIST_COVER_UPDATE:string = "/playlist/cover/update" // 歌单封面上传
// export const GET_PLAYLIST_ORDER_UPDATE:string = "/playlist/order/update" // 调整歌单顺序
// export const GET_SONG_ORDER_UPDATE:string = "/song/order/update" // 调整歌曲顺序
// export const GET_USER_COMMENT_HISTORY:string = "/user/comment/history" // 获取用户历史评论
// export const GET_USER_DJ:string = "/user/comment/history" // 获取用户电台
// export const GET_USER_FOLLOWS:string = "/user/follows" // 获取用户关注列表
// export const GET_USER_FOLLOWEDS:string = "/user/followeds" // 获取用户粉丝列表
// export const GET_USER_EVENT:string = "/user/event" // 获取用户动态
// export const GET_EVENT_FORWARD:string = "/event/forward" // 转发用户动态
// export const GET_EVENT_DEL:string = "/event/del" // 删除用户动态
// export const GET_SHARE_RESOURCE:string = "/share/resource" // 分享歌曲、歌单、mv、电台、电台节目到动态
// export const GET_COMMENT_EVENT:string = "/comment/event" // 获取动态评论
// export const GET_FOLLOW:string = "/follow" // 关注用户 && 取消关注用户
// export const GET_USER_RECORD:string = "/user/record" // 获取用户播放记录
// export const GET_HOT_TOPIC:string = "/hot/topic" // 获取热门话题
// export const GET_TOPIC_DETAIL:string = "/topic/detail" // 获取话题详情
// export const GET_TOPIC_DETAIL_EVENT_HOT:string = "/topic/detail" // 获取话题详情热门动态
// export const GET_PLAYMODE_INTELLIGENCE_LIST:string = "/playmode/intelligence/list" // 心动模式 && 智能播放
// export const GET_COMMENT_HOTWALL_LIST:string = "/comment/hotwall/list" // 云村热评(官方下架,暂不能用)
// export const GET_EVENT:string = "/event" // 获取动态消息
