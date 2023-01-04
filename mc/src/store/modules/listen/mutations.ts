import {MutationTree} from "vuex"
import {MutationsTypes} from "./mutations-types"
import {StateTypes, StateTypes_AUDIO as A} from "./state-types"
import type {State} from "./state"

export type Mutations<S = State> = {
    [MutationsTypes.AUDIO_REF](state: S, val: State[StateTypes.AUDIOREF]): void;
    [MutationsTypes.AUDIO_STATE](state: S, val: State[StateTypes.AUDIO][A.STATE]): void;
    [MutationsTypes.AUDIO_SONG](state: S, val: State[StateTypes.AUDIO][A.SONG]): void;
    [MutationsTypes.AUDIO_LIST](state: S, val: State[StateTypes.AUDIO][A.LIST]): void;
    [MutationsTypes.AUDIO_INDEX](state: S, val: State[StateTypes.AUDIO][A.INDEX]): void;
    [MutationsTypes.AUDIO_ORDER](state: S, val: State[StateTypes.AUDIO][A.ORDER]): void;
    [MutationsTypes.AUDIO_VOLUME](state: S, val: State[StateTypes.AUDIO][A.VOLUME]): void;
    [MutationsTypes.AUDIO_FOLD](state: S, val: State[StateTypes.AUDIO][A.FOLD]): void;
    [MutationsTypes.AUDIO_CURRENTTIME](state: S, val: State[StateTypes.AUDIO][A.CURRENTTIME]): void;
    [MutationsTypes.AUDIO_DURATION](state: S, val: State[StateTypes.AUDIO][A.DURATION]): void;
    [MutationsTypes.AUDIO_LYRIC](state: S, val: State[StateTypes.AUDIO][A.LYRIC]): void;
    [MutationsTypes.AUDIO_LYRIC_K](state: S, val: State[StateTypes.AUDIO][A.LYRICK]): void;
    [MutationsTypes.AUDIO_LYRIC_T](state: S, val: State[StateTypes.AUDIO][A.LYRICT]): void;
    [MutationsTypes.AUDIO_NETWORK](state: S, val: State[StateTypes.AUDIO][A.NETWORK]): void;
};

export const mutations: MutationTree<State> & Mutations = {
    [MutationsTypes.AUDIO_REF]: (state, val) => state[StateTypes.AUDIOREF] = val,
    [MutationsTypes.AUDIO_STATE]: (state, val) => state[StateTypes.AUDIO][A.STATE] = val,
    [MutationsTypes.AUDIO_SONG]: (state, val) => state[StateTypes.AUDIO][A.SONG] = val,
    [MutationsTypes.AUDIO_LIST]: (state, val) => state[StateTypes.AUDIO][A.LIST] = val,
    [MutationsTypes.AUDIO_INDEX]: (state, val) => state[StateTypes.AUDIO][A.INDEX] = val,
    [MutationsTypes.AUDIO_ORDER]: (state, val) => state[StateTypes.AUDIO][A.ORDER] = val,
    [MutationsTypes.AUDIO_VOLUME]: (state, val) => state[StateTypes.AUDIO][A.VOLUME] = val,
    [MutationsTypes.AUDIO_FOLD]: (state, val) => state[StateTypes.AUDIO][A.FOLD] = val,
    [MutationsTypes.AUDIO_CURRENTTIME]: (state, val) => state[StateTypes.AUDIO][A.CURRENTTIME] = val,
    [MutationsTypes.AUDIO_DURATION]: (state, val) => state[StateTypes.AUDIO][A.DURATION] = val,
    [MutationsTypes.AUDIO_LYRIC]: (state, val) => state[StateTypes.AUDIO][A.LYRIC] = val,
    [MutationsTypes.AUDIO_LYRIC_K]: (state, val) => state[StateTypes.AUDIO][A.LYRICK] = val,
    [MutationsTypes.AUDIO_LYRIC_T]: (state, val) => state[StateTypes.AUDIO][A.LYRICT] = val,
    [MutationsTypes.AUDIO_NETWORK]: (state, val) => state[StateTypes.AUDIO][A.NETWORK] = val,
}
