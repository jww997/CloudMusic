<script lang="ts" setup>
import { ref } from 'vue';
import { router } from '@/router';

const include = ref<string[]>([]);

const init = () => {
  const routers = router.getRoutes();
  include.value = routers
    .map((item) => (item.meta.keepAlive ? <string>item.name : ''))
    .filter((v: string) => v);
};
init();
</script>

<template>
  <!-- <Suspense>
    <template #default> -->
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in" appear>
      <keep-alive :include="include">
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
