<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import MyImage from '@/components/myImage/index.vue';
import image_1 from '@/assets/images/disc/1.png';
import image_2 from '@/assets/images/disc/2.png';
import image_3 from '@/assets/images/disc/3.png';
import image_4 from '@/assets/images/disc/4.png';

const store = useStore();

const state = computed(() => store.state.listen.audio.state);
const song = computed(() => store.state.listen.audio.song);
</script>

<template>
  <div class="disc" :class="{ active: state }" v-if="song">
    <MyImage class="cover" :width="300" :src="image_1" />
    <MyImage
      class="cover"
      :width="220"
      :height="220"
      :src="song.al.picUrl"
      :alt="song.al.name"
      show-loader
    />
    <MyImage class="cover" :width="300" :src="image_2" />
    <MyImage class="cover" :width="300" :src="image_3" />
    <MyImage class="handle" :width="100" :src="image_4" />
  </div>
</template>

<style lang="less" scoped>
@width: 300px;
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.disc {
  width: @width;
  height: @width;
  margin-top: 80px;
  position: relative;
  transform: scale(1.2);
  :deep(.cover) {
    margin: auto;
    position: absolute;
    box-shadow: 0 0 30px 0 #eee;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    border-radius: 50%;
    overflow: hidden;
    animation: rotate 20s linear infinite paused;
    -webkit-animation: rotate 20s linear infinite paused;
    &:first-child {
      z-index: 1;
    }
    &:nth-child(2) {
      z-index: 2;
    }
    &:nth-child(3) {
      z-index: 3;
    }
    &:nth-child(4) {
      z-index: 4;
    }
  }
  :deep(.handle) {
    display: block;
    margin: 0 auto;
    top: -80px;
    left: 30px;
    right: 0;
    z-index: 4;
    transform-origin: 18px 18px;
    transform: rotate(-45deg);
    transition: 1s;
  }
  &.active {
    :deep(.cover) {
      animation-play-state: running;
    }
    :deep(.handle) {
      transform: rotate(0deg);
    }
  }
}
</style>
