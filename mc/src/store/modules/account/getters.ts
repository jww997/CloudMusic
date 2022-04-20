import { GetterTree } from 'vuex'
import { RootState } from '@/store';
import type { State } from './state';

export type Getters<S = State> = {
}

export const getters: GetterTree<State, RootState> & Getters = {
}