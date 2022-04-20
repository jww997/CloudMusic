<script setup lang="ts">
import FloatingBox from '../components/floatingBox.vue';
import type { PERSONALIZED } from '@/apis/watch/typeResult';

const props = defineProps<{
  list: PERSONALIZED[];
}>();

const responsive = { xs: 20, sm: 16, md: 12, lg: 8, xl: 6, xxl: 4 };
</script>

<template>
  <a-row class="grid-demo">
    <a-col v-for="item in list" :key="item.id" v-bind="responsive">
      <FloatingBox v-bind="item" />
    </a-col>
  </a-row>
</template>

<style lang="less" scoped></style>
