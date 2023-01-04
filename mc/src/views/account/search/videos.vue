<script lang="ts" setup>
import List from "@/views/see/videos/list.vue"
import * as CONSTANT from "./_constant"
import R from "@/apis/see/typeResult"

defineProps<{
  searchQcReminder: null;
  videoCount: number;
  videos: R.VIDEO[];
}>()
</script>

<template>
  <div v-if="videos">
    <List :list="videos"/>
  </div>
</template>

<style lang="less" scoped></style>
