<script lang="ts" setup>
import { computed } from 'vue';
import type R from '@/apis/see/typeResult';
import MyImage from '@/components/myImage/index.vue';
defineProps<{
  list: R.VIDEO[];
}>();

const emits = defineEmits(['update:current']);

const col = 3; // 行个数
const span = computed(() => 24 / col);

const handleChange = (v: string) => emits('update:current', v);
</script>

<template>
  <div class="list">
    <a-row :gutter="[24, 48]">
      <template v-for="item in list">
        <a-col class="col" :span="span">
          <router-link
            :to="{
              name: item.type === 0 ? 'SeeMvDetail' : 'SeeVideoDetail',
              query: { id: item.vid },
            }"
          >
            <MyImage
              class="cursor-pointer"
              width="100%"
              :height="250"
              :src="item.coverUrl"
              footer-position="outer"
              :title="item.title"
              :description="item.description"
              rounded
            />
            <span class="playCount">
              <icon-play-arrow />{{ item.playTime }}
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
