<script lang="ts" setup>
import { computed } from 'vue';
import type R from '@/apis/listen/typeResult';
defineProps<{
  list: R.ARTIST[];
}>();

const col = 6; // 行个数
const span = computed(() => 24 / col);
</script>

<template>
  <div class="list">
    <a-row :gutter="[24, 48]">
      <template v-for="item in list">
        <a-col class="col" :span="span">
          <router-link
            :to="{ name: 'ListenSingerDetail', query: { id: item.id } }"
          >
            <a-image
              class="cover txt-pointer"
              width="150px"
              height="150px"
              :src="item.picUrl"
              :preview="false"
              show-loader
              footer-position="outer"
              :title="item.name"
            />
          </router-link>
        </a-col>
      </template>
    </a-row>
  </div>
</template>

<style lang="less" scoped>
.list {
  .col {
    :deep(.arco-image-img) {
      border-radius: 50%;
      overflow: hidden;
    }
  }
}
</style>
