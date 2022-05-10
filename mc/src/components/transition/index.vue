<script lang="ts" setup>
import { ref } from 'vue';

const arr = ref<string[]>(['ListenRecommend']);
</script>

<template>
  <!-- <Suspense>
    <template #default> -->
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in" appear>
      <keep-alive :include="arr">
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
  <!-- </template>
    <template #fallback> Loading... </template>
  </Suspense> -->
</template>

<style lang="less" scoped></style>
