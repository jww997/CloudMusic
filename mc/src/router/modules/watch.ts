/**
 * @description 视频
 * @author Gavin
 */
import { RouteRecordRaw } from 'vue-router';
import Transition from '@/components/transition/index.vue';
import Mv from '@/views/watch/mv/index.vue';
import VideoDetail from '@/views/watch/videoDetail/index.vue';


const routes: RouteRecordRaw = {
  redirect: '/watch/mv',
  path: '/watch',
  name: 'watch',
  component: Transition,
  meta: {
    locale: '影像馆', // 一级菜单名（语言包键名）
    requiresAuth: true, // 是否需要鉴权
    icon: 'icon-dashboard', // 菜单配置icon
  },
  children: [
    {
      path: '/mv',
      name: 'mv',
      component: Mv,
      meta: {
        locale: '视频', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/video/detail',
      name: 'video/detail',
      component: VideoDetail,
      meta: {
        locale: '歌单详情', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
  ],
};
export default routes;
