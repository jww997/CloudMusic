<script lang="ts" setup>
import { computed } from 'vue';
import type R from '@/apis/see/typeResult';
import MyImage from '@/components/myImage/index.vue';
defineProps<{
  list: R.VIDEO[];
}>();

const col = 1; // 行个数
const span = computed(() => 24 / col);
</script>

<template>
  <div class="list">
    <a-row :gutter="[24, 48]">
      <template v-for="item in list">
        <a-col class="col" :span="span">
          <router-link
            :to="{ name: 'SeeVideoDetail', query: { id: item.vid } }"
          >
            <MyImage
              class="cursor-pointer"
              width="100%"
              :height="150"
              :src="item.coverUrl"
              footer-position="outer"
              :title="item.title"
              rounded
            />
            <span class="playTime">
              <icon-play-arrow />{{ item.playTime }}
            </span>
            <span class="durationms">
              {{ item.durationms }}
            </span>
          </router-link>
          <a-space class="creator">
            <span>by</span>
            <template
              v-for="(item2, index) in item.creator"
              :key="item2.userId"
            >
              <!-- <router-link
                :to="{ name: 'SeeVideoDetail', query: { id: item2.userId } }"
              > -->
              <span> {{ index !== 0 ? ' / ' : '' }}{{ item2.userName }} </span>
              <!-- </router-link> -->
            </template>
          </a-space>
        </a-col>
      </template>
    </a-row>
  </div>
</template>

<style lang="less" scoped>
.list {
  .col {
    position: relative;
    :deep(.arco-image-footer-caption-title),
    :deep(.arco-image-footer-caption-description) {
      margin-top: 5px;
    }
    .playTime {
      color: #fff;
      font-size: 16px;
      text-shadow: 2px 2px 5px rgb(var(--arcoblue-6));
      position: absolute;
      right: 30px;
      top: 30px;
    }
    .durationms {
      color: #fff;
      font-size: 16px;
      text-shadow: 2px 2px 5px rgb(var(--arcoblue-6));
      position: absolute;
      right: 30px;
      top: 130px;
    }
    .creator {
      margin-top: 30px;
      font-size: 12px;
    }
  }
}
</style>
