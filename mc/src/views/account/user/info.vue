<script lang="ts" setup>
import MyImage from "@/components/myImage/index.vue"

defineProps<{
  avatarUrl: string
  nickname: string
  eventCount: number
  follows: number
  followeds: number
  signature: string
  userId: string
}>()

</script>

<template>
  <div class="flex pb-4">
    <MyImage class="flex-shrink" :height="200" :src="avatarUrl" :width="200" roundedFull/>
    <div class="ml-8 flex-grow">
      <div class="text-2xl flex justify-between items-center">
        <div>{{ nickname }}</div>
        <a-button class="ml-6" @click="$router.push({ name: 'AccountEdit', query: {id: userId} })">编辑个人信息</a-button>
      </div>
      <div class="pt-6 flex text-center">
        <div class="pr-10">
          <div class="text-xl font-medium">{{ eventCount }}</div>
          <div>动态</div>
        </div>
        <div class="pr-10">
          <div class="text-xl font-medium">{{ follows }}</div>
          <div>关注</div>
        </div>
        <div class="pr-10">
          <div class="text-xl font-medium">{{ followeds }}</div>
          <div>粉丝</div>
        </div>
      </div>
      <div class="pt-6">个人介绍：{{ signature }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
</style>
