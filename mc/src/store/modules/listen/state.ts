import { StateTypes, StateTypes_AUDIO as A } from "./state-types"
import type { SONG } from "@/apis/listen/typeResult"

export type LYRIC = { time: number; text: string; }
export type State = {
  [StateTypes.AUDIOREF]: HTMLAudioElement; // 音乐控件
  [StateTypes.AUDIO]: {
    [A.STATE]: boolean; // 状态
    [A.SONG]: SONG | null; // 歌曲
    [A.LIST]: SONG[]; // 列表
    [A.INDEX]: number; // 下标
    [A.ORDER]: number; // 顺序 列表1 单曲2 随机3
    [A.VOLUME]: number; // 音量
    [A.FOLD]: boolean; // 菜单
    [A.CURRENTTIME]: number; // 当前时间
    [A.DURATION]: number; // 持续时间
    [A.LYRIC]: LYRIC[]; // 歌词
    [A.LYRICK]: LYRIC[]; // 歌词2
    [A.LYRICT]: LYRIC[]; // 歌词翻译
    [A.NETWORK]: number; // 网络
  },
};

export const state: State = {
  [StateTypes.AUDIOREF]: new Audio(),
  [StateTypes.AUDIO]: {
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
    [A.LYRICK]: [],
    [A.LYRICT]: [],
    [A.NETWORK]: 0,
  },
};
