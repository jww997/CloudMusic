<script lang="ts" setup>
import List from "@/views/listen/songlist/list.vue"
import * as CONSTANT from "./_constant"
import R from "@/apis/listen/typeResult"

defineProps<{
  searchQcReminder: null;
  playlistCount: number;
  playlists: R.PLAYLIST[];
}>()
</script>

<template>
  <div>
    <List :list="playlists" :columns="CONSTANT.COLUMNS"/>
  </div>
</template>

<style lang="less" scoped></style>
