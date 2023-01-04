<script lang="ts" setup>
import MyImage from "@/components/myImage/index.vue"

defineProps<{
  profile: any
}>()

</script>

<template>
  <div>
    <MyImage :src="profile.avatarUrl" :width="200" :height="200" :roundedType="1" v-if="profile"/>
    <a-button @click="$router.push({ name: 'accountEdit' })">编辑个人资料</a-button>
  </div>
</template>

<style lang="less" scoped>
</style>
