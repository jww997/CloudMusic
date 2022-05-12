<script setup lang="ts">
import * as R from '@/apis/listen/typeResult';
import Box from './box.vue';

defineProps<{
  list: R.RADIO[];
}>();
</script>

<template>
  <a-row class="grid-demo" v-if="list">
    <a-col :span="4" v-for="item in list" :key="item.id">
      <Box v-bind="item" />
    </a-col>
  </a-row>
</template>

<style lang="less" scoped></style>
