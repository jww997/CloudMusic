<script lang="ts" setup>
import { ref } from 'vue';
import List from '@/views/listen/songlistDetail/list.vue';
import * as C from './_constant';
import see_R from '@/apis/see/typeResult';
import { INIT } from './_type';

const props = defineProps<{
  init: INIT;
  type: number;
}>();

const { init, type } = props;

const videos = ref<see_R.PERSONALIZED>();

init({ type }, ({ result }) => {
  videos.value = result.videos;
});
</script>

<template>
  <div v-if="videos">
    {{ videos }}
    <!-- <List :list="songs" :columns="C.COLUMNS" /> -->
  </div>
</template>

<style lang="less" scoped></style>
