<script lang="ts" setup>
import List from '@/views/listen/songlistDetail/list.vue';
import * as CONSTANT from './_constant';
import R from '@/apis/listen/typeResult';

defineProps<{
  searchQcReminder: null;
  songCount: number;
  songs: R.SONG[];
}>();
</script>

<template>
  <div>
    <List :list="songs" :columns="CONSTANT.COLUMNS" />
  </div>
</template>

<style lang="less" scoped></style>
