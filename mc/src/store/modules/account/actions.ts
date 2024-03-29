import {ActionTree, ActionContext} from "vuex"
import {MutationsTypes} from "./mutations-types"
import {ActionTypes} from "./action-types"
import {RootState} from "@/store"
import {Message} from "@arco-design/web-vue"
import type {RESULT_LOGIN} from "@/apis/account/typeResult"
import type {State} from "./state"
import {storage} from "@/utils/storage"
import account from "@/apis/account/index"
import {settings} from "@/config/default/settings.config"


export type Actions<S = State, R = RootState> = {
    [ActionTypes.SET_ACCOUNT_LOGIN](context: ActionContext<S, R>, val: RESULT_LOGIN): void;
    [ActionTypes.SET_ACCOUNT_LOGOUT](context: ActionContext<S, R>): void;
};

export const actions: ActionTree<State, RootState> & Actions = {
    // 接口版本
    [ActionTypes.SET_ACCOUNT_VERSION]: async ({commit}) => {
        const {data} = await account.getInnerVersion()
        if (data.version !== settings.version) {
            console.log(`版本号有差异，文档版本${data.version}，项目版本${settings.version}～～!`)
            console.log(`具体查看：https://github.com/Binaryify/NeteaseCloudMusicApi/releases`)
            commit(MutationsTypes.ACCOUNT_VERSION, data.version)
        }
    },
    // 登入
    [ActionTypes.SET_ACCOUNT_LOGIN]({commit}, val) {
        const {cookie, token, profile} = val
        commit(MutationsTypes.ACCOUNT_COOKIE, cookie)
        commit(MutationsTypes.ACCOUNT_TOKEN, token)
        commit(MutationsTypes.ACCOUNT_PROFILE, profile)
        Message.success("登录成功")
    },
    // 登出
    [ActionTypes.SET_ACCOUNT_LOGOUT]: async ({commit}) => {
        try {
            await account.getLogout()
            commit(MutationsTypes.ACCOUNT_COOKIE, "")
            commit(MutationsTypes.ACCOUNT_TOKEN, "")
            commit(MutationsTypes.ACCOUNT_PROFILE, null)
            storage.remove(MutationsTypes.ACCOUNT_COOKIE)
            storage.remove(MutationsTypes.ACCOUNT_TOKEN)
            storage.remove(MutationsTypes.ACCOUNT_PROFILE)
            storage.removeCookie(MutationsTypes.ACCOUNT_COOKIE)
            Message.success("登出成功")
        } catch (err) {
        }
    },
    // 登录状态
    [ActionTypes.SET_ACCOUNT_STATUS]: ({dispatch}) => {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await account.getLoginStatus()
                const uid = res.data.account?.id + ""
                // console.log(uid)
                // const res2 = await account.getUserDetail({uid})
                // console.log(123, res)
                // console.log(123, res2)
                resolve(res)
            } catch (err) {
                reject(err)
            }
        })
    },

}
