<script lang="ts" setup>
import type { TAGS } from './_constant';
defineProps<{
  active: string;
  title: string;
  list: TAGS[];
}>();
const emits = defineEmits(['update:active']);

const handleClick = (v: string) => emits('update:active', v);
</script>

<template>
  <div class="tags">
    <span class="left" v-if="title">{{ title }}：</span>
    <a-space>
      <a-tag
        v-for="item in list"
        :key="item.value"
        :checkable="true"
        :checked="item.value === active"
        :color="item.value === active && 'arcoblue'"
        @click="handleClick(item.value)"
      >
        {{ item.title }}
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
