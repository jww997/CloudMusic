<script setup lang="ts">
import PlaylistBox from '@/views/listen/components/playlistBox.vue';
import FloatingBox from '../components/floatingBox.vue';
// import type { PERSONALIZED } from '@/apis/watch/typeResult';
import watch_R from '@/apis/watch/typeResult';

type Props = { list: watch_R.PERSONALIZED[] };
const props = defineProps<Props>();

const responsive = { xs: 20, sm: 16, md: 12, lg: 8, xl: 6, xxl: 4 };
</script>

<template>
  <a-row class="grid-demo">
    <a-col v-for="item in list" :key="item.id" v-bind="responsive">
      <PlaylistBox :box="{ ...item, coverImgUrl: item.picUrl }" />
    </a-col>
  </a-row>
</template>

<style lang="less" scoped></style>
