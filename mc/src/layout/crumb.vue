<script lang="ts" setup>
import { ref } from 'vue';
import { RouteLocationMatched, onBeforeRouteUpdate } from 'vue-router';
import { router } from '@/router';

type CRUMB = { name: string; title: string };
const crumb = ref<CRUMB[]>();
type SETCRUMB = (arr: RouteLocationMatched[]) => void;
const setCrumb: SETCRUMB = (arr) => {
  crumb.value = arr.map((item) => {
    return {
      name: <string>item.name,
      title: <string>item.meta.locale,
    };
  });
};

const init = () => {
  setCrumb(router.currentRoute.value.matched);
  onBeforeRouteUpdate((to, _) => setCrumb(to.matched));
};
init();
</script>

<template>
  <a-breadcrumb class="py-4">
    <a-breadcrumb-item v-for="{ name, title } in crumb" :key="name">
      <router-link :to="{ name }">{{ title }}</router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<style lang="less" scoped></style>
