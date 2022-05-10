/**
 * @description 视频
 * @author Gavin
 */
import { RouteRecordRaw } from 'vue-router';
import Watch from '@/components/transition/index.vue';
import Mv from '@/views/watch/mv/index.vue';
import VideoDetail from '@/views/watch/videoDetail/index.vue';


const routes: RouteRecordRaw = {
  path: '/watch',
  name: 'Watch',
  component: Watch,
  meta: {
    locale: '影像馆', // 一级菜单名（语言包键名）
    requiresAuth: true, // 是否需要鉴权
    icon: 'icon-dashboard', // 菜单配置icon
  },
  children: [
    {
      path: '/mv',
      name: 'WatchMv',
      component: Mv,
      meta: {
        locale: '视频', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/video/detail',
      name: 'WatchVideoDetail',
      component: VideoDetail,
      meta: {
        locale: '视频详情', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
  ],
};
export default routes;
