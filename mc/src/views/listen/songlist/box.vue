<script lang="ts" setup>
import MyImage from '@/components/myImage/index.vue';
defineProps<{
  coverImgUrl: string;
  id: number;
  name: string;
  playCount?: number;
}>();
</script>

<template>
  <div
    class="relative hover:-translate-y-4 duration-100 cursor-pointer"
    @click="$router.push({ name: 'ListenSonglistDetail', query: { id } })"
  >
    <MyImage
      :width="200"
      :height="200"
      :src="coverImgUrl"
      :alt="name"
      :title="name"
      footerPosition="outer"
      rounded
    />
    <div
      style="width: 200px; height: 200px"
      class="absolute top-0 left-0 rounded-lg overflow-hidden"
    >
      <div
        class="mask w-full h-full opacity-0 duration-100 flex justify-center items-center"
      >
        <icon-play-circle-fill size="60" />
      </div>
      <div
        class="playCount absolute top-4 right-4 duration-100"
        v-if="playCount"
        >{{ playCount }}</div
      >
    </div>
  </div>
</template>

<style lang="less" scoped>
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
