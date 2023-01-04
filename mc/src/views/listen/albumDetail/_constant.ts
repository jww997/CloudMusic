import * as T from "./_type"
import {TableColumn} from "@arco-design/web-vue/es/table/interface"

export const PARAMS: T.PARAMS = {
    id: "",
    before: "",
    offset: 0,
    limit: 30,
}

export const RESULT: T.RESULT = {
    album: {
        artist: {
            alias: [],
            id: 0,
            img1v1Url: "",
            name: "",
            picId: 0,
            picUrl: "",
            trans: "",
        },
        copyrightId: 0,
        id: 0,
        mark: 0,
        name: "",
        picId: 0,
        publishTime: 0,
        size: 0,
        status: 0,
    },
    resourceState: false,
    songs: [],
}

export const COLUMNS: TableColumn[] = [
    {title: "歌曲", dataIndex: "name"},
    {title: "歌手", dataIndex: "ar"},
    {title: "时长", dataIndex: "dt"},
]
