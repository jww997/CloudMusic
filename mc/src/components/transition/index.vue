<script lang="ts" setup>
import { ref } from 'vue';

const arr = ref<string[]>(['ListenRecommend', 'ListenSonglist']);
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive :include="arr">
      <component :is="Component" :key="route.path" />
    </keep-alive>
  </router-view>
</template>

<style lang="less" scoped></style>
