<script lang="ts" setup>
import { useRouter, RouteRecordNormalized } from 'vue-router';

const router = useRouter();

const root = router
  .getRoutes()
  .find((el) => el.name === 'home') as RouteRecordNormalized;
</script>

<template>
  <a-menu>
    <a-sub-menu key="0" v-for="i in root.children">
      <template #icon><icon-apps></icon-apps></template>
      <template #title>{{ i.meta?.locale }}</template>
      <a-menu-item
        :key="ii.path"
        v-for="ii in i.children"
        @click="$router.push({ name: ii.name })"
      >
        <template #icon><icon-apps></icon-apps></template>
        <span>{{ ii.meta?.locale }}</span>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<style lang="less" scoped>
:deep(.arco-menu-inner) {
  .arco-menu-inline-header {
    display: flex;
    align-items: center;
  }
  .arco-icon {
    &:not(.arco-icon-down) {
      font-size: 18px;
    }
  }
}
</style>
