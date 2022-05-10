/**
 * @description 音乐
 * @author Gavin
 */
import { RouteRecordRaw } from 'vue-router';
import Listen from '@/components/transition/index.vue';
import Recommend from '@/views/listen/recommend/index.vue';
import Songlist from '@/views/listen/songlist/index.vue';
import Station from "@/views/listen/station/index.vue";
import Toplist from "@/views/listen/toplist/index.vue";
import Singer from "@/views/listen/singer/index.vue";
import SonglistDetail from "@/views/listen/songlistDetail/index.vue";
import SingerDetail from "@/views/listen/singerDetail/index.vue";
import Song from "@/views/listen/song/index.vue";
import AlbumDetail from "@/views/listen/albumDetail/index.vue";
import DjDetail from "@/views/listen/djDetail/index.vue";
import PersonalFm from "@/views/listen/personalFm/index.vue";
import Search from "@/views/listen/search/index.vue";

const routes: RouteRecordRaw = {
  path: '/listen',
  name: 'Listen',
  component: Listen,
  meta: {
    locale: '音乐馆', // 一级菜单名（语言包键名）
    requiresAuth: true, // 是否需要鉴权
    icon: 'icon-dashboard', // 菜单配置icon
  },
  children: [
    {
      path: '/recommend',
      name: 'ListenRecommend',
      component: Recommend,
      meta: {
        locale: '推荐', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
        // keepAlive: true
      },
    },
    {
      path: '/toplist',
      name: 'ListenToplist',
      component: Toplist,
      meta: {
        locale: '排行', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/songlist',
      name: 'ListenSonglist',
      component: Songlist,
      meta: {
        locale: '歌单', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/songlist/detail',
      name: 'ListenSonglistDetail',
      component: SonglistDetail,
      meta: {
        locale: '歌单详情', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
        // keepAlive: true
      },
    },
    {
      path: '/singer',
      name: 'ListenSinger',
      component: Singer,
      meta: {
        locale: '歌手', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/singer/detail',
      name: 'ListenSingerDetail',
      component: SingerDetail,
      meta: {
        locale: '歌手详情', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/station',
      name: 'ListenStation',
      component: Station,
      meta: {
        locale: '电台', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/song',
      name: 'ListenSong',
      component: Song,
      meta: {
        locale: '歌曲', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/album/detail',
      name: 'ListenAlbumDetail',
      component: AlbumDetail,
      meta: {
        locale: '专辑详情', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/dj/detail',
      name: 'ListenDjDetail',
      component: DjDetail,
      meta: {
        locale: '电台详情', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/personal/fm',
      name: 'ListenPersonalFm',
      component: PersonalFm,
      meta: {
        locale: '私人FM', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/search',
      name: 'ListenSearch',
      component: Search,
      meta: {
        locale: '搜索', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },

  ],
};
export default routes;
