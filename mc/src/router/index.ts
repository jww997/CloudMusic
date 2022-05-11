/**
 * @description 路由
 * @author Gavin
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import _ from 'lodash'
import Layout from '@/layout/index.vue';
import { filesGlobEager } from '@/utils/modules/format';

const files = import.meta.globEager('./modules/*.ts');
const children: RouteRecordRaw[] = Object.values(filesGlobEager(files, /.\/modules\/|.ts/g));
type CHILDREN = (children: RouteRecordRaw[], path?: string) => RouteRecordRaw[]
const _children: CHILDREN = (children, path = "") => children.map(item => _.assign(item, { children: item.children ? _children(item.children, item.path) : null }, { path: `${path}${item.path}` })
)

export type META = {
  locale: string
  requiresAuth?: boolean
  roles?: string[]
  icon?: string
  keepAlive?: boolean
}

declare module 'vue-router' {
  interface RouteMeta extends META { }
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/listen/recommend',
    component: Layout,
    meta: {
      locale: '首页'
    },
    children: _children(children),
  },
];

export const router = createRouter({
  history: createWebHashHistory(''),
  routes,
});
// scrollBehavior() {
//   return { top: 0 };
// },

router.beforeEach((to, from, next) => {
  // console.log('to.meta = ', to.meta)
  // console.log('to.name = ', to.name)


  next();
})