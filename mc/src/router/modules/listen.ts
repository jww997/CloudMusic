/**
 * @description 音乐
 * @author Gavin
 */
import {RouteRecordRaw} from "vue-router"
import Listen from "@/components/transition/index.vue"
import Songlist from "@/views/listen/songlist/index.vue"
import Toplist from "@/views/listen/toplist/index.vue"
import Singer from "@/views/listen/singer/index.vue"
import SonglistDetail from "@/views/listen/songlistDetail/index.vue"
import SingerDetail from "@/views/listen/singerDetail/index.vue"
import Song from "@/views/listen/song/index.vue"
import AlbumDetail from "@/views/listen/albumDetail/index.vue"
import Dj from "@/views/listen/dj/index.vue"
import DjDetail from "@/views/listen/djDetail/index.vue"


const routes: RouteRecordRaw = {
    path: "/listen",
    name: "Listen",
    redirect: "/listen/songlist",
    component: Listen,
    meta: {
        locale: "音乐馆", // 一级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        icon: "icon-music", // 菜单配置icon
    },
    children: [
        {
            path: "/toplist",
            name: "ListenToplist",
            component: Toplist,
            meta: {
                locale: "排行", // 二级菜单名（语言包键名）
                requiresAuth: true, // 是否需要鉴权
                roles: ["admin"], // 权限角色
                keepAlive: true,
            },
        },
        {
            path: "/songlist",
            name: "ListenSonglist",
            component: Songlist,
            meta: {
                locale: "歌单", // 二级菜单名（语言包键名）
                requiresAuth: true, // 是否需要鉴权
                roles: ["admin"], // 权限角色
                keepAlive: true,
            },
        },
        {
            path: "/songlist/detail",
            name: "ListenSonglistDetail",
            component: SonglistDetail,
            meta: {
                locale: "歌单详情", // 二级菜单名（语言包键名）
                requiresAuth: true, // 是否需要鉴权
                roles: ["admin"], // 权限角色
                hideInMenu: true,
            },
        },
        {
            path: "/singer",
            name: "ListenSinger",
            component: Singer,
            meta: {
                locale: "歌手", // 二级菜单名（语言包键名）
                requiresAuth: true, // 是否需要鉴权
                roles: ["admin"], // 权限角色
                keepAlive: true,
            },
        },
        {
            path: "/singer/detail",
            name: "ListenSingerDetail",
            component: SingerDetail,
            meta: {
                locale: "歌手详情", // 二级菜单名（语言包键名）
                requiresAuth: true, // 是否需要鉴权
                roles: ["admin"], // 权限角色
                hideInMenu: true,
            },
        },
        {
            path: "/dj",
            name: "ListenDj",
            component: Dj,
            meta: {
                locale: "电台", // 二级菜单名（语言包键名）
                requiresAuth: true, // 是否需要鉴权
                roles: ["admin"], // 权限角色
                keepAlive: true,
            },
        },
        {
            path: "/dj/detail",
            name: "ListenDjDetail",
            component: DjDetail,
            meta: {
                locale: "电台详情", // 二级菜单名（语言包键名）
                requiresAuth: true, // 是否需要鉴权
                roles: ["admin"], // 权限角色
                hideInMenu: true,
            },
        },


        {
            path: "/album/detail",
            name: "ListenAlbumDetail",
            component: AlbumDetail,
            meta: {
                locale: "专辑详情", // 二级菜单名（语言包键名）
                requiresAuth: true, // 是否需要鉴权
                roles: ["admin"], // 权限角色
                hideInMenu: true,
            },
        },
        {
            path: "/song",
            name: "ListenSong",
            component: Song,
            meta: {
                locale: "歌曲", // 二级菜单名（语言包键名）
                requiresAuth: true, // 是否需要鉴权
                roles: ["admin"], // 权限角色
                hideInMenu: true,
            },
        },


    ],
}
export default routes
