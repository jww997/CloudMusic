<script lang="ts" setup>
import type R from '@/apis/see/typeResult';
defineProps<{
  data: R.MV;

  commentCount: number;
  liked: boolean;
  likedCount: number;
  shareCount: number;
}>();
</script>

<template>
  <a-space class="info" direction="vertical" fill>
    <a-typography-title :heading="3">
      {{ data.name }}
    </a-typography-title>
    <div class="artists">
      <a-space v-for="item in data.artists">
        <a-image
          class="cover"
          width="30"
          height="30"
          :src="item.img1v1Url"
        ></a-image>
        <span>{{ item.name }}</span>
      </a-space>
    </div>
    <a-space>
      <span>发布时间：{{ data.publishTime }}</span>
      <span>播放：{{ data.playCount }}</span>
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
