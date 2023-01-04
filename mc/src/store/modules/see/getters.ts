import {GetterTree} from "vuex"
import dayjs from "dayjs"
import {RootState} from "@/store"
import type {State} from "./state"

export type Getters<S = State> = {
    // percent(state: S): number
    // currentTime(state: S): string
    // duration(state: S): string
}

// const format = 'mm:ss'

export const getters: GetterTree<State, RootState> & Getters = {
    // percent: (state) => Math.round((state.video.currentTime / state.video.duration) * 100),
    // currentTime: (state) => dayjs(state.video.currentTime * 1000).format(format),
    // duration: (state) => dayjs(state.video.duration * 1000).format(format),
}
