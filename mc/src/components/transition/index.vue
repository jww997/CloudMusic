<script lang="ts" setup>
import { ref } from 'vue';

const arr = ref<string[]>(['ListenRecommend', 'SeeMv']);
</script>

<template>
  <!-- <Suspense>
    <template #default> -->
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in" appear>
      <keep-alive :include="arr">
        <component class="wrap" :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
  <!-- </template>
    <template #fallback> Loading... </template>
  </Suspense> -->
</template>

<style lang="less" scoped>
.wrap {
  padding: 30px;
}
</style>
