/**
 * @description 音乐
 * @author Gavin
 */
import { RouteRecordRaw } from 'vue-router';
import Transition from '@/components/transition/index.vue';
import Recommend from '@/views/listen/recommend/index.vue';
import Songlist from '@/views/listen/songlist/index.vue';
import Station from "@/views/listen/station/index.vue";
import Toplist from "@/views/listen/toplist/index.vue";
import Singer from "@/views/listen/singer/index.vue";
import SonglistDetail from "@/views/listen/songlistDetail/index.vue";
import SingerDetail from "@/views/listen/singerDetail/index.vue";
import Song from "@/views/listen/song/index.vue";
import AlbumDetail from "@/views/listen/albumDetail/index.vue";

const routes: RouteRecordRaw = {
  redirect: '/listen/recommend',
  path: '/listen',
  name: 'listen',
  component: Transition,
  meta: {
    locale: '音乐馆', // 一级菜单名（语言包键名）
    requiresAuth: true, // 是否需要鉴权
    icon: 'icon-dashboard', // 菜单配置icon
  },
  children: [
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend,
      meta: {
        locale: '推荐', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/toplist',
      name: 'toplist',
      component: Toplist,
      meta: {
        locale: '排行', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/songlist',
      name: 'songlist',
      component: Songlist,
      meta: {
        locale: '歌单', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/songlist/detail',
      name: 'songlist/detail',
      component: SonglistDetail,
      meta: {
        locale: '歌单详情', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer,
      meta: {
        locale: '歌手', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/singer/detail',
      name: 'singer/detail',
      component: SingerDetail,
      meta: {
        locale: '歌手详情', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/station',
      name: 'station',
      component: Station,
      meta: {
        locale: '电台', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/listen/song',
      name: 'song',
      component: Song,
      meta: {
        locale: '歌曲', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/album/detail',
      name: 'album/detail',
      component: AlbumDetail,
      meta: {
        locale: '专辑详情', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },

  ],
};
export default routes;
