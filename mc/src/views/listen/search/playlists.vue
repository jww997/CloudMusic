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

const playlists = ref<listen_R.PLAYLIST[]>();

init({ type }, ({ result }) => {
  playlists.value = result.playlists;
});
</script>

<template>
  <div v-if="playlists">
    {{ playlists }}
    <!-- <List :list="songs" :columns="C.COLUMNS" /> -->
  </div>
</template>

<style lang="less" scoped></style>
