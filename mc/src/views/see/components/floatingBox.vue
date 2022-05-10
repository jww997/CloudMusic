<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { IconPlayCircleFill } from '@arco-design/web-vue/es/icon';
const props = defineProps<{
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
}>();

const router = useRouter();
</script>

<template>
  <a-space
    direction="vertical"
    class="floating"
    @click="router.push({ name: 'WatchVideoDetail', query: { id } })"
  >
    <div class="cover">
      <a-image
        width="250px"
        height="150px"
        :src="picUrl"
        :alt="name"
        :preview="false"
        show-loader
      />
      <div class="mask">
        <icon-play-circle-fill class="play" size="60" />
        <div class="count">{{ playCount }}</div>
      </div>
    </div>
    <div class="txt-pointer name">{{ name }}</div>
  </a-space>
</template>

<style lang="less" scoped>
@mask-close: rgba(0, 0, 0, 0);
@mask-open: rgba(0, 0, 0, 0.5);
.floating {
  margin-top: 30px;
  .cover,
  .name {
    transition: 0.3s;
  }
  .cover {
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    .mask {
      width: 100%;
      height: 100%;
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
        opacity: 1;
      }
      .count {
        opacity: 0;
      }
    }
  }
  .name {
    width: 200px;
    line-height: 22px;
    text-align: left;
  }
}
</style>
