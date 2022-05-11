<script lang="ts" setup>
import dayjs from 'dayjs';
import type R from '@/apis/see/typeResult';
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
    <a-typography-title :heading="3">
      {{ data.title }}
    </a-typography-title>
    <div class="artists">
      <a-space direction="vertical" v-if="data.creator">
        <a-image
          class="cover"
          width="50"
          height="50"
          :src="data.creator.avatarUrl"
          :preview="false"
          show-loader
        />
        <span>{{ data.creator.nickname }}</span>
      </a-space>
    </div>
    <a-space>
      <span>发布时间：{{ dayjs(data.publishTime).format('YYYY-MM-DD') }}</span>
      <span>播放：{{ data.playTime }}</span>
    </a-space>
    <a-button-group>
      <a-button>
        <icon-thumb-up-fill v-if="liked" /><icon-thumb-up v-else />
        <span class="count">{{ likedCount }}</span>
      </a-button>
      <a-button>
        <icon-star />
        <span class="count">{{ commentCount }}</span>
      </a-button>
      <a-button>
        <icon-share-internal />
        <span class="count">{{ shareCount }}</span>
      </a-button>
    </a-button-group>
  </a-space>
</template>

<style lang="less" scoped>
.info {
  .artists {
    .cover {
      border-radius: 50%;
    }
  }
  .count {
    margin-left: 5px;
  }
}
</style>
