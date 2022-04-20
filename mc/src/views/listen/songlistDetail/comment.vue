<script lang="ts" setup>
import dayjs from 'dayjs';
import listen_R from '@/apis/listen/typeResult';

const props = defineProps<{ list: listen_R.COMMENT[] }>();
</script>

<template>
  <a-list>
    <template #header>精彩评论</template>
    <a-list-item v-for="item in list">
      <div>{{ dayjs(item.time).format('YYYY年MM月DD日 HH:mm') }}</div>
      <div>{{ item.content }}</div>
    </a-list-item>
  </a-list>
</template>

<style lang="less" scoped></style>
