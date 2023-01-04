<script lang="ts" setup>
import MyImage from "@/components/myImage/index.vue"

defineProps({
  detail: {type: Object, default: () => ({})},
})
</script>

<template>
  <div class="h-80">
    <MyImage class="float-left mr-8" :src="detail.picUrl" :width="250" :height="250" roundedFull/>
    <div class="flex flex-col">
      <a-typography-title class="mt-0">{{ detail.name }}</a-typography-title>
      <div class="mt-1"><span v-for="item in  detail.alias ">{{ item }} </span></div>
      <a-space class="my-2">
        <a-button class="px-2" rounded>收藏</a-button>
      </a-space>
      <div class="mt-1">单曲数：{{ detail.musicSize }}&ensp;&ensp;专辑数：{{ detail.albumSize }}&ensp;&ensp;MV数：{{ detail.mvSize }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
:deep(h1.arco-typography, h2.arco-typography, h3.arco-typography, h4.arco-typography, h5.arco-typography, h6.arco-typography) {
  margin: 0;
}
</style>
