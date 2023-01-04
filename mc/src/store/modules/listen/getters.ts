import {GetterTree} from "vuex"
import dayjs from "dayjs"
import {RootState} from "@/store"
import type {State} from "./state"

export type Getters<S = State> = {
    percent(state: S): number
    currentTime(state: S): string
    duration(state: S): string
    lyricIndex(state: S): Number
}

const format = "mm:ss"

export const getters: GetterTree<State, RootState> & Getters = {
    percent: (state) => Math.round((state.audio.currentTime / state.audio.duration) * 100),
    currentTime: (state) => dayjs(state.audio.currentTime * 1000).format(format),
    duration: (state) => dayjs(state.audio.duration * 1000).format(format),
    lyricIndex: (state) => state.audio.lyric.filter(({time}) => time < state.audio.currentTime).length - 1,
}
