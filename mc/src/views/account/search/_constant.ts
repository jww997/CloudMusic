import {TableColumn} from "@arco-design/web-vue/es/table/interface"
import * as T from "./_type"

export const PARAMS: T.PARAMS = {
    type: 0,
    keywords: "",
    limit: 30,
    offset: 0,
}
export const PARAMS2: T.PARAMS2 = {
    type: 0,
    keywords: "",
    limit: 30,
    offset: 0,
}

export const RESULT: T.RESULT = {
    result: {
        searchQcReminder: null,
        songCount: 0,
        songs: [],
    },
}
export const RESULT2: T.RESULT2 = {
    result: {
        hasMore: false,
        songCount: 0,
        songs: [],
    },
}

export const TAB: T.TAB[] = [
    {title: "歌曲", unit: "首", type: 1, is: import("./songs.vue")},
    {title: "视频", unit: "个", type: 1014, is: import("./videos.vue")},
    {title: "专辑", unit: "张", type: 10, is: import("./albums.vue")},
    {title: "歌单", unit: "个", type: 1000, is: import("./playlists.vue")},
    {title: "歌词", unit: "个", type: 1006, is: import("./lyrics.vue")},
    {title: "歌手", unit: "个", type: 100, is: import("./artists.vue")},
    {title: "用户", unit: "个", type: 1002, is: import("./userprofiles.vue")},
    {title: "电台", unit: "个", type: 1009, is: import("./djRadios.vue")},
]

export const COLUMNS: TableColumn[] = [
    {title: "歌曲", dataIndex: "name"},
    {title: "歌手", dataIndex: "ar"},
    {title: "专辑", dataIndex: "al"},
    {title: "时长", dataIndex: "dt"},
]
