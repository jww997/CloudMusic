<script lang="ts" setup>
import type R from '@/apis/see/typeResult';
defineProps<{
  active: number;
  title?: string;
  list: R.GRUOP[];
}>();
const emits = defineEmits(['update:active']);

const handleClick = (v: number) => emits('update:active', v);
</script>

<template>
  <div class="tags">
    <span class="left" v-if="title">{{ title }}：</span>
    <a-space wrap>
      <a-tag
        v-for="item in list"
        :key="item.id"
        :checkable="true"
        :checked="item.id === active"
        :color="item.id === active && 'arcoblue'"
        @click="handleClick(item.id)"
      >
        {{ item.name }}
      </a-tag>
    </a-space>
  </div>
</template>

<style lang="less" scoped>
.tags {
  width: 100%;
  margin-bottom: 15px;
  font-size: 12px;
  display: flex;
  .left {
    margin-right: 15px;
    margin-top: 5px;
    flex-shrink: 0;
  }
}
</style>
