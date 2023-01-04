import {MutationTree} from "vuex"
import {MutationsTypes} from "./mutations-types"
import {StateTypes, StateTypes_VIDEO as A} from "./state-types"
import type {State} from "./state"

export type Mutations<S = State> = {
    [MutationsTypes.VIDEO_REF](state: S, val: State[StateTypes.VIDEOREF]): void;
    [MutationsTypes.VIDEO_STATE](state: S, val: State[StateTypes.VIDEO][A.STATE]): void;
    [MutationsTypes.VIDEO_SONG](state: S, val: State[StateTypes.VIDEO][A.SONG]): void;
    [MutationsTypes.VIDEO_LIST](state: S, val: State[StateTypes.VIDEO][A.LIST]): void;
    [MutationsTypes.VIDEO_INDEX](state: S, val: State[StateTypes.VIDEO][A.INDEX]): void;
    [MutationsTypes.VIDEO_ORDER](state: S, val: State[StateTypes.VIDEO][A.ORDER]): void;
    [MutationsTypes.VIDEO_VOLUME](state: S, val: State[StateTypes.VIDEO][A.VOLUME]): void;
    [MutationsTypes.VIDEO_FOLD](state: S, val: State[StateTypes.VIDEO][A.FOLD]): void;
    [MutationsTypes.VIDEO_CURRENTTIME](state: S, val: State[StateTypes.VIDEO][A.CURRENTTIME]): void;
    [MutationsTypes.VIDEO_DURATION](state: S, val: State[StateTypes.VIDEO][A.DURATION]): void;
    [MutationsTypes.VIDEO_LYRIC](state: S, val: State[StateTypes.VIDEO][A.LYRIC]): void;
};

export const mutations: MutationTree<State> & Mutations = {
    [MutationsTypes.VIDEO_REF]: (state, val) => state[StateTypes.VIDEOREF] = val,
    [MutationsTypes.VIDEO_STATE]: (state, val) => state[StateTypes.VIDEO][A.STATE] = val,
    [MutationsTypes.VIDEO_SONG]: (state, val) => state[StateTypes.VIDEO][A.SONG] = val,
    [MutationsTypes.VIDEO_LIST]: (state, val) => state[StateTypes.VIDEO][A.LIST] = val,
    [MutationsTypes.VIDEO_INDEX]: (state, val) => state[StateTypes.VIDEO][A.INDEX] = val,
    [MutationsTypes.VIDEO_ORDER]: (state, val) => state[StateTypes.VIDEO][A.ORDER] = val,
    [MutationsTypes.VIDEO_VOLUME]: (state, val) => state[StateTypes.VIDEO][A.VOLUME] = val,
    [MutationsTypes.VIDEO_FOLD]: (state, val) => state[StateTypes.VIDEO][A.FOLD] = val,
    [MutationsTypes.VIDEO_CURRENTTIME]: (state, val) => state[StateTypes.VIDEO][A.CURRENTTIME] = val,
    [MutationsTypes.VIDEO_DURATION]: (state, val) => state[StateTypes.VIDEO][A.DURATION] = val,
    [MutationsTypes.VIDEO_LYRIC]: (state, val) => state[StateTypes.VIDEO][A.LYRIC] = val,
}
