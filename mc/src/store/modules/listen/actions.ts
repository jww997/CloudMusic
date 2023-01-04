import {watch, watchEffect} from "vue"
import {ActionTree, ActionContext} from "vuex"
import {Notification} from "@arco-design/web-vue"
import {MutationsTypes} from "./mutations-types"
import {ActionTypes} from "./action-types"
import {RootState} from "@/store"
import _ from "lodash"
import type {SONG} from "@/apis/listen/typeResult"
import type {State} from "./state"
import listen from "@/apis/listen"
import {LYRIC} from "@/store/modules/listen/state"


export type Actions<S = State, R = RootState> = {
    [ActionTypes.SET_AUDIO_URL](context: ActionContext<S, R>, val: string): void;
    [ActionTypes.SET_AUDIO_DETAIL](context: ActionContext<S, R>, val: string): void;
    [ActionTypes.SET_AUDIO_TOGGLE](context: ActionContext<S, R>, val: 1 | 0 | -1): void;
    [ActionTypes.SET_AUDIO_SCHEDULE](context: ActionContext<S, R>, val: number): void;
    [ActionTypes.SET_AUDIO_STATE](context: ActionContext<S, R>, val: boolean): void;
    [ActionTypes.SET_AUDIO_LYRIC](context: ActionContext<S, R>, val: string): void;
};

export const actions: ActionTree<State, RootState> & Actions = {
    [ActionTypes.SET_AUDIO_URL]({state: {audioRef, audio}, commit, dispatch}, val) {
        const init = async () => {
            try {
                await listen.getCheckMusic({id: val}).catch(() => {
                })
                const res = await listen.getSongUrl({id: val})
                const {data: [{url}]} = res
                if (!url) return false
                audioRef.src = url
                audioRef.autoplay = true
                dispatch(ActionTypes.SET_AUDIO_DETAIL, val)
                const index = audio.list.findIndex((v: SONG) => v.id === _.toNumber(val))
                commit(MutationsTypes.AUDIO_INDEX, index)
                commit(MutationsTypes.AUDIO_REF, audioRef)
                commit(MutationsTypes.AUDIO_FOLD, true)
                audioRef.addEventListener("canplaythrough", async () => {
                    watchEffect(() => {
                        audioRef.volume = audio.volume
                    })
                })
                audioRef.addEventListener("play", () => {
                    commit(MutationsTypes.AUDIO_STATE, true)
                })
                audioRef.addEventListener("pause", () => {
                    commit(MutationsTypes.AUDIO_STATE, false)
                })
                audioRef.addEventListener("ended", () => {
                    commit(MutationsTypes.AUDIO_CURRENTTIME, 0)
                    commit(MutationsTypes.AUDIO_DURATION, 0)
                    if (audio.list.length - 1 === audio.index) {
                        commit(MutationsTypes.AUDIO_SONG, null)
                        // commit(MutationsTypes.AUDIO_FOLD, false)
                        commit(MutationsTypes.AUDIO_INDEX, -1)
                    } else {
                        dispatch(ActionTypes.SET_AUDIO_TOGGLE, 1)
                    }
                })
                audioRef.addEventListener("timeupdate", () => {
                    commit(MutationsTypes.AUDIO_CURRENTTIME, audioRef.currentTime)
                    commit(MutationsTypes.AUDIO_DURATION, isNaN(audioRef.duration) ? 0 : audioRef.duration)
                    commit(MutationsTypes.AUDIO_NETWORK, audioRef.networkState)
                })
            } catch (err) {
            }
        }
        init()
    },
    // 获取歌曲列表的详情
    [ActionTypes.SET_AUDIO_DETAIL]({commit}, val) {
        const init = async () => {
            const {songs: [song]} = await listen.getSongDetail({ids: val})
            commit(MutationsTypes.AUDIO_SONG, song)
        }
        init()
    },
    // -1上一首 & 0重播 & 1下一首
    [ActionTypes.SET_AUDIO_TOGGLE]({state: {audio: {order, list, index}}, commit, dispatch}, val) {
        const len = list.length - 1
        if (order === 3 && val !== 0) {
            const randomIndex = Math.round(len * Math.random())
            randomIndex === index ? dispatch(ActionTypes.SET_AUDIO_TOGGLE, val) : (index = randomIndex)
        } else if (order === 1 && val !== 0) {
            index === len && val === 1 ? index = 0 : index === 0 && val === -1 ? index = len : (val === 1 ? index++ : index--)
        }
        commit(MutationsTypes.AUDIO_INDEX, index)
        dispatch(ActionTypes.SET_AUDIO_URL, list[index].id)
    },
    // 百分比控制播放进度
    [ActionTypes.SET_AUDIO_SCHEDULE]({state: {audioRef, audio: {duration}}}, val) {
        audioRef.currentTime = duration * (val / 100)
    },
    // 播放 & 暂停
    [ActionTypes.SET_AUDIO_STATE]({state: {audioRef}}, val) {
        val ? audioRef.play() : audioRef.pause()
    },
    // 歌词
    [ActionTypes.SET_AUDIO_LYRIC]({commit}, val) {
        const init = async () => {
            const {lrc, tlyric, klyric} = await listen.getlyric({id: val})
            type FORMATLYRIC = (lyric: string) => LYRIC[]
            const formatLyric: FORMATLYRIC = (lyric) => {
                if (lyric.length === 0) return []
                const arr = lyric.split("\n").filter(v => v)
                const result = new Array()
                for (const str of arr) {
                    const reg = /^\[\d{1,2}:\d{1,2}.\d{1,3}$/
                    const arr = str.split("]")
                    const timeArr = arr.filter(item => reg.test(item)) // 匹配歌词时间
                    const lrc = arr.find(item => !reg.test(item)) // 取出歌词
                    if (!lrc) continue
                    for (const timeStr of timeArr) {
                        const [m, s, ms] = timeStr.substring(1).split(/[:.]/).map(v => parseInt(v))
                        const time = ((m * 60 + s) * 1000 + ms) / 1000
                        result.push({time, text: lrc})
                    }
                }
                return result.sort((a, b) => (a.time - b.time)) // 按时间排序并返回
            }
            const formatLyricK: FORMATLYRIC = (lyric) => {
                if (lyric.length === 0) return []
                const arr = lyric.split("\n").filter(v => v)
                for (const str of arr) {
                    const arr = str.split("]")
                }
                return []
            }
            commit(MutationsTypes.AUDIO_LYRIC, formatLyric(lrc.lyric))
            commit(MutationsTypes.AUDIO_LYRIC_K, formatLyricK(klyric.lyric))
            commit(MutationsTypes.AUDIO_LYRIC_T, formatLyric(tlyric.lyric))
        }
        init()
    },
}
