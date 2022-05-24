<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import MyImage from '@/components/myImage/index.vue';
import image_1 from '@/assets/images/disc/1.png';
import image_2 from '@/assets/images/disc/2.png';
import image_3 from '@/assets/images/disc/3.png';
import image_4 from '@/assets/images/disc/4.png';

const store = useStore();

const active = computed(() => store.state.listen.audio.state);
const song = computed(() => store.state.listen.audio.song);
</script>

<template>
  <div class="flex-shrink-0 w-96 h-96 relative" v-if="song">
    <MyImage
      class="w-96 h-96 absolute bottom-0 top-0 right-0 left-0 m-auto z-0"
      :class="active ? 'running' : 'paused'"
      :src="image_1"
      roundedFull
    />
    <MyImage
      class="w-80 h-80 absolute bottom-0 top-0 right-0 left-0 m-auto z-10"
      :class="active ? 'running' : 'paused'"
      :src="song.al.picUrl"
      roundedFull
      :alt="song.al.name"
    />
    <MyImage
      class="w-96 h-96 absolute bottom-0 top-0 right-0 left-0 m-auto z-20"
      :class="active ? 'running' : 'paused'"
      :src="image_2"
      roundedFull
    />
    <MyImage
      class="w-96 h-96 absolute bottom-0 top-0 right-0 left-0 m-auto z-30"
      :class="active ? 'running' : 'paused'"
      :src="image_3"
      roundedFull
    />
    <MyImage
      class="handle w-28 absolute right-0 left-14 -top-24 mx-auto z-40 -rotate-45 duration-700"
      :class="{ 'rotate-0': active }"
      :src="image_4"
      loadType="0"
    />
  </div>
</template>

<style lang="less" scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
:deep(.running) {
  animation: spin 20s linear infinite running;
}
:deep(.paused) {
  animation: spin 20s linear infinite paused;
}
:deep(.handle) {
  transform-origin: 18px 18px;
}
</style>
