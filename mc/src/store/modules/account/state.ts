import {StateTypes} from "./state-types"
import {MutationsTypes} from './mutations-types';
import {storage} from "@/utils/storage"
import {USER} from "@/apis/account/typeResult"
import {settings} from "@/config/default/settings.config"

export type State = {
    [StateTypes.VERSION]: string
    [StateTypes.TOKEN]: string
    [StateTypes.COOKIE]: string
    [StateTypes.PROFILE]: USER | null,
};

export const state: State = {
    [StateTypes.VERSION]: settings.version ?? '',
    [StateTypes.TOKEN]: storage.get(MutationsTypes.ACCOUNT_TOKEN) ?? '',
    [StateTypes.COOKIE]: storage.get(MutationsTypes.ACCOUNT_COOKIE) ?? '',
    [StateTypes.PROFILE]: storage.get(MutationsTypes.ACCOUNT_PROFILE) ?? null,
};
