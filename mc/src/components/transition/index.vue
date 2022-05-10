<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const arr = ref<string[]>(['ListenRecommend', 'ListenSonglist']);

const arr1 = ['ListenRecommend', 'ListenSonglist'];

watch(
  () => route,
  (v) => {
    console.log(v);
  },
  {
    deep: true,
  }
);
</script>

<template>
  <!-- <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view> -->
  <!-- {{ arr1 }} -->
  <router-view v-slot="{ Component, route }">
    <keep-alive :include="arr1">
      <component :is="Component" :key="route.path" />
    </keep-alive>
  </router-view>
  <!-- <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'" mode="out-in">
      <keep-alive :include="arr">
        <component
          :is="Component"
          :key="route.meta.usePathKey ? route.path : undefined"
        />
      </keep-alive>
    </transition>
  </router-view> -->
  <!-- <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive" /> -->
</template>

<style lang="less" scoped></style>
