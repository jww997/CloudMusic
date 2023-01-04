import type {TableColumn} from "@arco-design/web-vue/es/table/interface"
import * as T from "./_type"

export const PARAMS: T.PARAMS = {id: ""}
export const PARAMS2: T.PARAMS2 = {id: "", limit: 20, offset: 0, before: ""}

export const RESULT: T.RESULT = {
    privileges: {
        chargeInfoList: [],
        cp: 0,
        cs: false,
        dl: 0,
        downloadMaxbr: 0,
        fee: 0,
        fl: 0,
        flag: 0,
        freeTrialPrivilege: {
            resConsumable: false,
            userConsumable: false,
        },
        id: 0,
        maxbr: 0,
        payed: 0,
        pl: 0,
        playMaxbr: 0,
        preSell: false,
        rscl: null,
        sp: 0,
        st: 0,
        subp: 0,
        toast: false,
    },
    playlist: {
        adType: 0,
        anonimous: false,
        cloudTrackCount: 0,
        commentThreadId: "",
        coverImgId: 0,
        coverImgId_str: "",
        coverImgUrl: "",
        coverStatus: 0,
        createTime: 0,
        creator: null,
        description: "",
        highQuality: false,
        id: 0,
        name: "",
        newImported: false,
        ordered: false,
        playCount: 0,
        privacy: 0,
        recommendInfo: null,
        shareCount: 0,
        specialType: 0,
        status: 0,
        subscribed: null,
        subscribedCount: 0,
        subscribers: [],
        tags: [],
        totalDuration: 0,
        trackCount: 0,
        trackNumberUpdateTime: 0,
        trackUpdateTime: 0,
        tracks: [],
        updateTime: 0,
        userId: 0,
    },
    relatedVideos: null,
    resEntrance: null,
    sharedPrivilege: null,
    urls: null,
}
export const RESULT2: T.RESULT2 = {
    commentBanner: null,
    comments: [],
    hotComments: [],
    isMusician: false,
    moreHot: false,
    topComments: [],
    userId: 0,
    more: false,
    total: 0,
}

export const COLUMNS: TableColumn[] = [
    {title: "歌曲", dataIndex: "name"},
    {title: "歌手", dataIndex: "ar"},
    {title: "专辑", dataIndex: "al"},
    {title: "时长", dataIndex: "dt"},
]
