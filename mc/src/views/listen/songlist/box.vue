<script lang="ts" setup>
import MyImage from "@/components/myImage/index.vue"

defineProps({
  coverImgUrl: {type: String, required: true, default: ""},
  id: {type: Number, required: true, default: 0},
  name: {type: String, required: true, default: ""},
  playCount: {type: Number, default: 0},
})
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
        class="absolute top-0 left-0 flex items-center"
    >
      <div class="mask w-full h-full opacity-0 duration-100 flex justify-center items-center text-white">
        <icon-play-circle-fill size="60"/>
      </div>
      <div
          class="mask playCount absolute top-3 right-3 duration-100 rounded-full px-2 py-1 flex items-center text-white"
          v-if="playCount"
      >
        <icon-play-arrow/>
        {{ playCount }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.mask {
  border-radius: 0.7rem !important;
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
