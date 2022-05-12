<script setup lang="ts">
import PlaylistBox from '../components/playlistBox.vue';

defineProps<{
  list: {
    coverImgUrl: string;
    id: number;
    name: string;
    playCount?: number;
  }[];
}>();
</script>

<template>
  <a-row  class="grid-demo" v-if="list">
    <a-col span="4" v-for="item in list" :key="item.id">
      <PlaylistBox :box="item" />
    </a-col>
  </a-row>
</template>

<style lang="less" scoped></style>
