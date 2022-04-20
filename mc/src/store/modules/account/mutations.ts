import { MutationTree } from 'vuex';
import { MutationsTypes } from './mutations-types';
import { StateTypes } from "./state-types"
import type { State } from './state';
import { storage } from "@/utils/modules/storage"

export type Mutations<S = State> = {
  [MutationsTypes.ACCOUNT_VERSION](state: S, val: State[StateTypes.VERSION]): void;
  [MutationsTypes.ACCOUNT_TOKEN](state: S, val: State[StateTypes.TOKEN]): void;
  [MutationsTypes.ACCOUNT_COOKIE](state: S, val: State[StateTypes.COOKIE]): void;
  [MutationsTypes.ACCOUNT_PROFILE](state: S, val: State[StateTypes.PROFILE]): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationsTypes.ACCOUNT_VERSION]: (state, val) => {
    state[StateTypes.VERSION] = val
  },
  [MutationsTypes.ACCOUNT_TOKEN]: (state, val) => {
    storage.set(MutationsTypes.ACCOUNT_TOKEN, val)
    state[StateTypes.TOKEN] = val
  },
  [MutationsTypes.ACCOUNT_COOKIE]: (state, val) => {
    storage.set(MutationsTypes.ACCOUNT_COOKIE, val)
    storage.setCookie(MutationsTypes.ACCOUNT_COOKIE, val)
    state[StateTypes.COOKIE] = val
  },
  [MutationsTypes.ACCOUNT_PROFILE]: (state, val) => {
    storage.set(MutationsTypes.ACCOUNT_PROFILE, val)
    state[StateTypes.PROFILE] = val
  },
};
