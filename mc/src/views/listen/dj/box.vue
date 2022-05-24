<script lang="ts" setup>
import MyImage from '@/components/myImage/index.vue';
defineProps<{
  picUrl: string;
  id: number;
  name: string;
  playCount?: number;
}>();
</script>

<template>
  <div
    class="relative hover:-translate-y-4 duration-100 cursor-pointer"
    @click="$router.push({ name: 'ListenDjDetail', query: { id } })"
  >
    <MyImage
      :width="200"
      :height="200"
      :src="picUrl"
      :alt="name"
      :title="name"
      footerPosition="outer"
      rounded
    />
    <div
      style="width: 200px; height: 200px"
      class="absolute top-0 left-0"
      rounded
    >
      <div
        class="mask w-full h-full opacity-0 duration-100 flex justify-center items-center"
      >
        <icon-play-circle-fill size="60" />
      </div>
      <div
        class="mask playCount absolute top-3 right-3 duration-100 rounded-full px-2 py-1 flex items-center"
        v-if="playCount"
      >
        <icon-play-arrow />{{ playCount }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.mask,
.playCount {
  color: #fff;
}
.mask {
  background-color: rgba(0, 0, 0, 0.7);
}
.relative:hover {
  .mask {
    opacity: 1;
  }
  .playCount {
    opacity: 0;
  }
}
</style>
