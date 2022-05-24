<script lang="ts" setup>
import MyImage from '@/components/myImage/index.vue';
import dayjs from 'dayjs'

defineProps({
  detail: {type: Object, default: () => ({})}
});
</script>

<template>
  <div class="h-80">
    <MyImage class="float-left mr-8" :src="detail.coverImgUrl" :width="250" :height="250" rounded/>
    <div class="flex flex-col">
      <a-typography-title class="mt-0">{{ detail.name }}</a-typography-title>
      <a-space class="my-2" v-if="detail.creator">
        <MyImage :width="30" :src="detail.creator.avatarUrl" roundedFull/>
        <span>{{ detail.creator.nickname }}</span>
        <span>{{ dayjs(detail.creator.createTime).format('YYYY-MM-DD') }}创建</span>
      </a-space>
      <a-space class="my-2">
        <a-button class="px-2" rounded>播放全部</a-button>
        <a-button class="px-2" rounded>收藏({{ detail.subscribedCount }})</a-button>
        <a-button class="px-2" rounded>分享({{ detail.shareCount }})</a-button>
        <a-button class="px-2" rounded>下载</a-button>
      </a-space>
      <div class="mt-1">标签：<span v-for="item in  detail.tags ">{{ item }} </span></div>
      <div class="mt-1">歌曲数：{{ detail.trackCount }}&ensp;&ensp;播放数：{{ detail.playCount }}</div>
      <div class="mt-1">简介：{{ detail.description }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
:deep(h1.arco-typography, h2.arco-typography, h3.arco-typography, h4.arco-typography, h5.arco-typography, h6.arco-typography) {
  margin: 0;
}
</style>
