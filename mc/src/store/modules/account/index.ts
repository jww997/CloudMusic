/**
 * @description 账户
 * @author Gavin
 */

import {
    Store as VuexStore,
    Module,
    CommitOptions,
    DispatchOptions,
} from "vuex"
import type {RootState} from "@/store/index"
import {state, State} from "./state"
import {getters, Getters} from "./getters"
import {mutations, Mutations} from "./mutations"
import {actions, Actions} from "./actions"

export type AudioStore<S = State> = Omit<VuexStore<S>,
    "getters" | "commit" | "dispatch"> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions,
    ): ReturnType<Mutations[K]>;
} & {
    dispatch<K extends keyof Actions>(
        key: K,
        payload: Parameters<Actions[K]>[1],
        options?: DispatchOptions,
    ): ReturnType<Actions[K]>;
};

const store: Module<State, RootState> = {
    state,
    getters,
    mutations,
    actions,
}

export default store
