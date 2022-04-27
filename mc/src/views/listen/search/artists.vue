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

const artists = ref<listen_R.ARTIST[]>();

init({ type }, ({ result }) => {
  artists.value = result.artists;
});
</script>

<template>
  <div v-if="artists">
    {{ artists }}
    <!-- <List :list="songs" :columns="C.COLUMNS" /> -->
  </div>
</template>

<style lang="less" scoped></style>
