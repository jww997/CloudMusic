/**
 * @description 账户
 * @author Gavin
 */
import {RouteRecordRaw} from "vue-router"

const routes: RouteRecordRaw = {
    path: "/account",
    name: "Account",
    redirect: "/account/recommend",
    component: import("@/components/transition/index.vue"),
    meta: {
        locale: "账户", // 一级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        icon: "icon-user", // 菜单配置icon
    },
    children: [
        {
            path: "/login",
            name: "AccountLogin",
            component: import("@/views/account/login/index.vue"),
            meta: {
                locale: "登录", // 二级菜单名（语言包键名）
                requiresAuth: true, // 是否需要鉴权
                hideInMenu: true,
            },
        },
        {
            path: "/user",
            name: "AccountUser",
            component: import("@/views/account/user/index.vue"),
            meta: {
                locale: "用户", // 二级菜单名（语言包键名）
                requiresAuth: true, // 是否需要鉴权
                keepAlive: true,
                hideInMenu: true,
            },
        },
        {
            path: "/edit",
            name: "AccountEdit",
            component: import("@/views/account/edit/index.vue"),
            meta: {
                locale: "编辑个人信息", // 二级菜单名（语言包键名）
                requiresAuth: true, // 是否需要鉴权
                keepAlive: true,
                hideInMenu: true,
            },
        },
        {
            path: "/personal/fm",
            name: "ListenPersonalFm",
            component: import("@/views/account/personalFm/index.vue"),
            meta: {
                locale: "私人FM", // 二级菜单名（语言包键名）
                requiresAuth: true, // 是否需要鉴权
                hideInMenu: true,
            },
        },
        {
            path: "/search",
            name: "ListenSearch",
            component: import("@/views/account/search/index.vue"),
            meta: {
                locale: "搜索", // 二级菜单名（语言包键名）
                requiresAuth: true, // 是否需要鉴权
                hideInMenu: true,
                keepAlive: true,
            },
        },
        {
            path: "/recommend",
            name: "ListenRecommend",
            component: import("@/views/account/recommend/index.vue"),
            meta: {
                locale: "推荐", // 二级菜单名（语言包键名）
                requiresAuth: true, // 是否需要鉴权
                keepAlive: true,
            },
        },
    ],
}
export default routes
