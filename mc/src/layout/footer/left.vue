<script lang="ts" setup>
import MyImage from "@/components/myImage/index.vue"
import {SONG} from "@/apis/listen/typeResult"

defineProps<{
  class?: string;
  song: SONG;
}>()
</script>

<template>
  <div class="flex-1 flex items-center" :class="class">
    <MyImage
        class="flex-shrink-0 cursor-pointer"
        :width="70"
        :height="70"
        :src="song?.al.picUrl"
        :alt="song?.al.name"
        rounded
    />
    <!-- <a-tooltip :content="song?.name" position="tl"> -->
    <div class="flex-grow cursor-pointer mx-4 w-4 truncate">
      {{ song?.name }}
    </div>
    <!-- </a-tooltip> -->
  </div>
</template>

<style lang="less" scoped>
.active {
  color: rgb(var(--primary-6));
}
</style>
