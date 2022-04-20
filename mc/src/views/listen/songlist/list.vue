<script setup lang="ts">
import listen_R from '@/apis/listen/typeResult';
import PlaylistBox from '../components/playlistBox.vue';

const props = defineProps<{
  list: {
    coverImgUrl: string;
    id: number;
    name: string;
    playCount?: number;
  }[];
}>();

const responsive = { xs: 20, sm: 16, md: 12, lg: 8, xl: 6, xxl: 4 };
</script>

<template>
  <a-row class="grid-demo" v-if="list">
    <a-col v-for="item in list" :key="item.id" v-bind="responsive">
      <PlaylistBox :box="item" />
    </a-col>
  </a-row>
</template>

<style lang="less" scoped></style>
