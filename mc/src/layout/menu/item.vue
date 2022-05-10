<script lang="ts" setup>
import { RouteRecordNormalized } from 'vue-router';
import { META } from '@/router/index';

// import { IconHome, IconCalendar } from '@arco-design/web-vue/es/icon';

type Props = { root: any };
const props = defineProps<Props>();
</script>

<template>
  <a-sub-menu v-for="item1 in root">
    <!-- <template #icon><components :is="item1?.meta?.icon" /></template> -->
    <template #title>{{ item1?.meta?.locale }}</template>
    <a-menu-item :key="item2.path" v-for="item2 in item1?.children">
      123
    </a-menu-item>
  </a-sub-menu>
</template>

<style lang="less" scoped></style>
