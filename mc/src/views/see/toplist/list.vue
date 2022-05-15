<script lang="ts" setup>
import { computed } from 'vue';
import type R from '@/apis/see/typeResult';
import MyImage from '@/components/myImage/index.vue';
defineProps<{
  list: R.MV[];
}>();

const col = 2; // 行个数
const span = computed(() => 24 / col);
</script>

<template>
  <div class="list">
    <a-row :gutter="[24, 48]">
      <template v-for="(item, index) in list">
        <a-col class="col" :span="span">
          <span class="key txt-noselect">
            {{ index + 1 }}
          </span>
          <router-link :to="{ name: 'SeeMvDetail', query: { id: item.id } }">
            <MyImage
              class="cursor-pointer"
              width="100%"
              :height="400"
              :src="item.cover"
              footer-position="outer"
              :title="item.name"
              :description="item.artistName"
            />
            <span class="playCount">
              <icon-play-arrow />{{ item.playCount }}
            </span>
          </router-link>
        </a-col>
      </template>
    </a-row>
  </div>
</template>

<style lang="less" scoped>
.list {
  margin-top: 30px;
  .col {
    position: relative;
    :deep(.arco-image-footer-caption-title),
    :deep(.arco-image-footer-caption-description) {
      margin-top: 5px;
    }
    .key {
      font-size: 200px;
      font-weight: bold;
      position: absolute;
      left: 30px;
      top: 30px;
      z-index: 1;
      color: #eee;
      opacity: 0.8;
      pointer-events: none;
    }
    .playCount {
      color: #fff;
      font-size: 16px;
      text-shadow: 2px 2px 5px rgb(var(--arcoblue-6));
      position: absolute;
      right: 30px;
      top: 30px;
    }
  }
  .pagination {
    justify-content: center;
    margin-top: 30px;
  }
}
</style>
