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

const albums = ref<listen_R.ALBUM[]>();

init({ type }, ({ result }) => {
  albums.value = result.albums;
});
</script>

<template>
  <div v-if="albums">
    {{ albums }}
    <!-- <List :list="songs" :columns="C.COLUMNS" /> -->
  </div>
</template>

<style lang="less" scoped></style>
