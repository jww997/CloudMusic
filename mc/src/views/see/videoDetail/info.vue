<script lang="ts" setup>
import dayjs from 'dayjs';
import type R from '@/apis/see/typeResult';
import MyImage from '@/components/myImage/index.vue';
defineProps<{
  data: R.VIDEO2;

  commentCount: number;
  liked: boolean;
  likedCount: number;
  shareCount: number;
}>();
</script>

<template>
  <a-space class="info" direction="vertical" fill>
    <video id="videoRef" controls>您的浏览器不支持video标签。</video>
    <a-typography-title :heading="3">{{ data.title }}</a-typography-title>
    <!-- <div class="artists">
      <a-space direction="vertical" v-if="data.creator">
        <MyImage
          class="cover"
          width="50"
          height="50"
          :src="data.creator.avatarUrl"
        />
        <span>{{ data.creator.nickname }}</span>
      </a-space>
    </div> -->
    <a-space size="large" :align="'baseline'">
      <a-button-group>
        <a-button>
          <a-space>
            <icon-thumb-up-fill v-if="liked" />
            <icon-thumb-up v-else />
            <span>{{ likedCount }}</span>
          </a-space>
        </a-button>
        <a-button>
          <a-space>
            <icon-star />
            <span>{{ commentCount }}</span>
          </a-space>
        </a-button>
        <a-button>
          <a-space>
            <icon-share-internal />
            <span>{{ shareCount }}</span>
          </a-space>
        </a-button>
      </a-button-group>
      <a-space>
        <span
          >发布时间：{{ dayjs(data.publishTime).format('YYYY-MM-DD') }}</span
        >
        <span>播放：{{ data.playTime }}</span>
      </a-space>
    </a-space>
  </a-space>
</template>

<style lang="less" scoped>
.info {
  max-width: 90%;
  #videoRef {
    height: 450px;
    border-radius: 10px;
    box-shadow: 0 0 30px #aaa;
  }
  .artists .cover {
    border-radius: 50%;
  }
}
</style>
