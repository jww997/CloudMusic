<script lang="ts" setup>
import { ref } from 'vue';
import List from '@/views/listen/songlistDetail/list.vue';
import * as C from './_constant';
import listen_R from '@/apis/listen/typeResult';
import { INIT } from './_type';

const props = defineProps<{
  init: INIT;
  type: number;
}>();

const { init, type } = props;

const songs = ref<listen_R.SONG[]>();

init({ type }, ({ result }) => {
  songs.value = result.songs;
});
</script>

<template>
  <div v-if="songs">
    <List :list="songs" :columns="C.COLUMNS" />
  </div>
</template>

<style lang="less" scoped></style>
