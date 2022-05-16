<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Lyric from './lyric.vue';
import List from './list.vue';

const store = useStore();

const currentTime = computed<number>(() => store.getters.currentTime);
const duration = computed<number>(() => store.getters.duration);
</script>

<template>
  <a-space class="flex-1 flex justify-end items-center" size="medium">
    <div> {{ currentTime }} / {{ duration }} </div>
    <a-popover :trigger="'click'">
      <span class="cursor-pointer txt-hover txt-noselect">词</span>
      <template #content>
        <Lyric />
      </template>
    </a-popover>
    <a-popover :trigger="'click'">
      <icon-menu class="cursor-pointer txt-hover txt-noselect" />
      <template #content>
        <List />
      </template>
    </a-popover>
  </a-space>
</template>

<style lang="less" scoped>
:deep(.arco-list) {
  width: 800px;
}
</style>
