import {StateTypes, StateTypes_VIDEO as A} from "./state-types"
import type {SONG} from "@/apis/listen/typeResult"

export type State = {
    [StateTypes.VIDEOREF]: HTMLVideoElement; // 视频控件
    [StateTypes.VIDEO]: {
        [A.STATE]: boolean; // 状态
        [A.SONG]: SONG | null; // 歌曲
        [A.LIST]: SONG[]; // 列表
        [A.INDEX]: number; // 下标
        [A.ORDER]: number; // 顺序 列表1 单曲2 随机3
        [A.VOLUME]: number; // 音量
        [A.FOLD]: boolean; // 菜单
        [A.CURRENTTIME]: number; // 当前时间
        [A.DURATION]: number; // 持续时间
        [A.LYRIC]: {  // 歌词
            time: number;
            text: string;
        }[];
    },
};

export const state: State = {
    [StateTypes.VIDEOREF]: document.getElementById("") as HTMLVideoElement,
    [StateTypes.VIDEO]: {
        [A.STATE]: false,
        [A.SONG]: null,
        [A.LIST]: [],
        [A.INDEX]: -1,
        [A.ORDER]: 1,
        [A.VOLUME]: 0.6,
        [A.FOLD]: false,
        [A.CURRENTTIME]: 0,
        [A.DURATION]: 0,
        [A.LYRIC]: [],
    },
}
