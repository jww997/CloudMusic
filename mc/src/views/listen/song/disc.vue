<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ImgUrl_1 from '@/assets/images/disc/1.png';
import ImgUrl_2 from '@/assets/images/disc/2.png';
import ImgUrl_3 from '@/assets/images/disc/3.png';
import ImgUrl_4 from '@/assets/images/disc/4.png';

const store = useStore();

const state = computed(() => store.state.listen.audio.state);
const song = computed(() => store.state.listen.audio.song);
</script>

<template>
  <div class="disc" :class="{ active: state }" v-if="song">
    <a-image class="cover" :width="300" :preview="false" :src="ImgUrl_1" />
    <a-image
      class="cover"
      :width="220"
      :height="220"
      :preview="false"
      :src="song.al.picUrl"
      :alt="song.al.name"
      show-loader
    />
    <a-image class="cover" :width="300" :preview="false" :src="ImgUrl_2" />
    <a-image class="cover" :width="300" :preview="false" :src="ImgUrl_3" />
    <a-image class="handle" :width="100" :preview="false" :src="ImgUrl_4" />
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
  position: relative;
  transform: scale(1.2);
  .cover {
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
  .handle {
    left: 50px;
    z-index: 4;
    top: -80px;
    transform-origin: 18px 18px;
    transform: rotate(-45deg);
    transition: 1s;
  }
  &.active {
    .cover {
      animation-play-state: running;
    }
    .handle {
      transform: rotate(0deg);
    }
  }
  :deep(.arco-image-img) {
    width: 100%;
  }
}
</style>
