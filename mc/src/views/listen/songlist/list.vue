<script setup lang="ts">
import Box from './box.vue';

defineProps({
  list: {type: Array, default: () => []}
});
</script>

<template>
  <a-row class="grid-demo">
    <a-col :span="4" v-for="item in list" :key="item.id">
      <slot :item="item">
        <Box :name="item.name" :id="item.id" cover-img-url="item.cover"/>
      </slot>
    </a-col>
  </a-row>
</template>

<style lang="less" scoped></style>
