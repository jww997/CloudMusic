<script lang="ts" setup>
import { ref } from 'vue';

const KeepAlive = ref<string[]>(['listen/recommend', 'listen/songlist']);
</script>

<template>
  <router-view v-slot="{ Component }">
    <!-- <transition name="fade" mode="out-in" appear> -->
    <keep-alive :include="KeepAlive">
      <component :is="Component" />
    </keep-alive>
    <!-- </transition> -->
  </router-view>
</template>

<style lang="less" scoped></style>
