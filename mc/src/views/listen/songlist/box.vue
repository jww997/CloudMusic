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
  <a-space
    direction="vertical"
    class="box"
    @click="$router.push({ name: 'ListenSonglistDetail', query: { id } })"
  >
    <div class="top">
      <MyImage
        class="rounded-lg overflow-hidden"
        :width="200"
        :height="200"
        :src="coverImgUrl"
        :alt="name"
      />
      <div class="rounded-lg mask">
        <icon-play-circle-fill class="play" size="60" />
        <div class="count" v-if="playCount">{{ playCount }}</div>
      </div>
    </div>
    <div class="bot">{{ name }}</div>
  </a-space>
</template>

<style lang="less" scoped>
@mask-close: rgba(0, 0, 0, 0);
@mask-open: rgba(0, 0, 0, 0.5);
.box {
  margin-top: 30px;
  .top,
  .bot {
    cursor: pointer;
    transition: 0.3s;
  }
  .top {
    overflow: hidden;
    position: relative;
    .mask {
      width: 200px;
      height: 200px;
      background-color: @mask-close;
      color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: inherit;
      .play {
        border-radius: 50%;
        overflow: hidden;
        transition: inherit;
        opacity: 0;
      }
      .count {
        padding: 0 10px;
        background-color: @mask-open;
        border-radius: 30px;
        position: absolute;
        bottom: 10px;
        right: 10px;
      }
    }
    &:hover {
      transform: translateY(-5%);
      .mask {
        background-color: @mask-open;
      }
      .play {
        // backdrop-filter: saturate(180%) blur(20px);
        // color: rgba(255, 255, 255, 1);
        opacity: 1;
      }
      .count {
        opacity: 0;
      }
    }
  }
  .bot {
    width: 200px;
    line-height: 22px;
    text-align: left;
  }
}
</style>
