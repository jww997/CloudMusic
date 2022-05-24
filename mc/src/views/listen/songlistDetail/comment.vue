<script lang="ts" setup>
import MyImage from '@/components/myImage/index.vue';

defineProps({
  list: {type: Array, default: () => []},
  title: {type: String, default: ''}
});
</script>

<template>
  <div>
    <a-typography-title heading="5">{{ title }}</a-typography-title>
    <a-list class="ml-14" style="overflow: visible" :bordered="false">
      <a-list-item class="relative overflow-visible" v-for="item in list">
        <MyImage class="absolute -left-14" :width="50" :src="item.user.avatarUrl" roundedFull v-if="item.user"/>
        <div><span class="text-red-600" v-if="item.user">{{ item.user.nickname }}:</span>{{ item.content }}</div>
        <div class="mt-2">
          <span class="leading-8">{{ item.timeStr }}</span>
          <a-space class="float-right">
            <a-button class="px-2" rounded>点赞<span v-if="item.likedCount">({{ item.likedCount }})</span></a-button>
            <a-button class="px-2" rounded>分享</a-button>
            <a-button class="px-2" rounded>评论</a-button>
          </a-space>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<style lang="less" scoped>
:deep(.arco-list-split .arco-list-header) {
  border: none;
}

:deep(.arco-list-wrapper),
:deep(.arco-list-spin),
:deep(.arco-list) {
  overflow: visible !important;
}
</style>
