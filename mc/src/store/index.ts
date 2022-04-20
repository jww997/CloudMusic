/**
 * @description 状态管理
 * @author Gavin
 */
import { createStore } from 'vuex';
import { filesGlobEager } from '@/utils/modules/format';

const files = import.meta.globEager('./modules/*/index.ts');
const modules = filesGlobEager(files, /(\.\/modules\/|\/index.ts)/g);

import type { State as accountState } from './modules/account/state';
import type { State as audioState } from './modules/listen/state';

export type RootState = {
  account: accountState;
  audio: audioState;
};
export const store = createStore({ modules });
