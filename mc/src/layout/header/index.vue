<script lang="ts" setup>
import Left from './left.vue';
import Search from './search.vue';
import Right from './right.vue';
</script>

<template>
  <div class="header">
    <Left />
    <Search />
    <Right />
  </div>
</template>

<style lang="less" scoped>
.header {
  display: flex;
  padding: 12px 20px;
}
</style>
