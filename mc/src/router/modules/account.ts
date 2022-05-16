/**
 * @description 账户
 * @author Gavin
 */
import { RouteRecordRaw } from 'vue-router';
import Account from '@/components/transition/index.vue';
import Login from '@/views/account/login/index.vue';
import User from '@/views/account/user/index.vue';
import PersonalFm from "@/views/account/personalFm/index.vue";
import Search from "@/views/account/search/index.vue";
import Recommend from '@/views/account/recommend/index.vue';


const routes: RouteRecordRaw = {
  path: '/account',
  name: 'Account',
  redirect: '/account/recommend',
  component: Account,
  meta: {
    locale: '账户', // 一级菜单名（语言包键名）
    requiresAuth: true, // 是否需要鉴权
    icon: 'icon-user', // 菜单配置icon
  },
  children: [
    {
      path: '/login',
      name: 'AccountLogin',
      component: Login,
      meta: {
        locale: '登录', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
        hideInMenu: true
      },
    },
    {
      path: '/user',
      name: 'AccountUser',
      component: User,
      meta: {
        locale: '用户', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
        keepAlive: true,
        hideInMenu: true
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
        hideInMenu: true
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
        hideInMenu: true,
        keepAlive: true
      },
    },
    {
      path: '/recommend',
      name: 'ListenRecommend',
      component: Recommend,
      meta: {
        locale: '推荐', // 二级菜单名（语言包键名）
        requiresAuth: true, // 是否需要鉴权
        roles: ['admin'], // 权限角色
        keepAlive: true
      },
    },
  ],
};
export default routes;
