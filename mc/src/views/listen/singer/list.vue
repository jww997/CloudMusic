<script lang="ts" setup>
import { computed } from 'vue';
import type R from '@/apis/listen/typeResult';
import MyImage from '@/components/myImage/index.vue';
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
        <a-col :span="span">
          <router-link
            :to="{ name: 'ListenSingerDetail', query: { id: item.id } }"
          >
            <MyImage
              class="cursor-pointer shadow-xl hover:-translate-y-4 duration-100"
              :width="200"
              :height="200"
              :src="item.picUrl"
              :title="item.name"
              footer-position="outer"
            />
          </router-link>
        </a-col>
      </template>
    </a-row>
  </div>
</template>

<style lang="less" scoped>
.list {
  :deep(.arco-image),
  :deep(.loader-img) {
    border-radius: 50%;
  }
  :deep(.arco-image-footer) {
    text-align: center;
  }
}
</style>
