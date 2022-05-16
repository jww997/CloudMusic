<script lang="ts" setup>
import List from '@/views/listen/dj/list.vue';
import * as CONSTANT from './_constant';
import R from '@/apis/listen/typeResult';

defineProps<{
  searchQcReminder: null;
  djRadiosCount: number;
  djRadios: R.RADIO[];
}>();
</script>

<template>
  <div>
    <List :list="djRadios" />
  </div>
</template>

<style lang="less" scoped></style>
