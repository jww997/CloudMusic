/**
 * @description 账户
 * @author Gavin
 */
import { RouteRecordRaw } from 'vue-router';
import Transition from '@/components/transition/index.vue';
import Login from '@/views/account/login/index.vue';
import User from '@/views/account/user/index.vue';

const routes: RouteRecordRaw = {
  path: '/account',
  name: 'account',
  redirect: 'recommend',
  component: Transition,
  meta: {
    locale: '账户', // 一级菜单名（语言包键名）
    requiresAuth: true, // 是否需要鉴权
    icon: 'icon-dashboard', // 菜单配置icon
  },
  children: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        locale: '登录', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: {
        locale: '用户', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
      },
    },
  ],
};
export default routes;