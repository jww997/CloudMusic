/**
 * @description 视频
 * @author Gavin
 */
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw = {
  path: '/see',
  name: 'See',
  component: () => import('@/components/transition/index.vue'),
  meta: {
    locale: '影像馆', // 一级菜单名（语言包键名）
    requiresAuth: true, // 是否需要鉴权
    icon: 'icon-video-camera', // 菜单配置icon
  },
  children: [
    {
      path: '/toplist',
      name: 'SeeToplist',
      component: () => import('@/views/see/toplist/index.vue'),
      meta: {
        locale: '排行', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
        keepAlive: true,
      },
    },
    {
      path: '/mv',
      name: 'SeeMv',
      component: () => import('@/views/see/mv/index.vue'),
      meta: {
        locale: 'MV', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
        keepAlive: true,
      },
    },
    {
      path: '/mv/detail',
      name: 'SeeMvDetail',
      component: () => import('@/views/see/mvDetail/index.vue'),
      meta: {
        locale: 'MV详情', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
        hideInMenu: true
      },
    },
    {
      path: '/videos',
      name: 'SeeVideos',
      component: () => import('@/views/see/videos/index.vue'),
      meta: {
        locale: '视频', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
        keepAlive: true,
      },
    },
    {
      path: '/video/detail',
      name: 'SeeVideoDetail',
      component: () => import('@/views/see/videoDetail/index.vue'),
      meta: {
        locale: '视频详情', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
        hideInMenu: true
      },
    },
  ],
};
export default routes;
