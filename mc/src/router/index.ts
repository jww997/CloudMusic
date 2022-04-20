/**
 * @description 路由
 * @author Gavin
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import _, { toString } from 'lodash'
import Layout from '@/layout/index.vue';
import { filesGlobEager } from '@/utils/modules/format';

const files = import.meta.globEager('./modules/*.ts');
const children: RouteRecordRaw[] = Object.values(filesGlobEager(files, /.\/modules\/|.ts/g));

type DEALCHILDREN = (children: RouteRecordRaw[], name?: string) => RouteRecordRaw[]
const _dealChildren: DEALCHILDREN = (children, name = "") => children.map(item => _.assign(item, { children: item.children ? _dealChildren(item.children, toString(item.name)) : null, path: `${name && '/'}${name}/${toString(item.name)}` })
)

export type META = {
  locale: string
  requiresAuth?: boolean
  roles?: string[]
  icon?: string
}

declare module 'vue-router' {
  interface RouteMeta extends META { }
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/listen',
    component: Layout,
    meta: {
      locale: '首页'
    },
    children: _dealChildren(children),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log('to = ', to)
  console.log('from = ', from)

  next();
})