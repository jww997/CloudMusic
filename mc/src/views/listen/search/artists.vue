<script lang="ts" setup>
import List from '@/views/listen/singer/list.vue';
import * as CONSTANT from './_constant';
import R from '@/apis/listen/typeResult';

defineProps<{
  searchQcReminder: null;
  artistCount: number;
  artists: R.ARTIST[];
}>();
</script>

<template>
  <div>
    <List :list="artists" />
  </div>
</template>

<style lang="less" scoped></style>
