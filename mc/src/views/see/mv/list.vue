<script lang="ts" setup>
import MyImage from '@/components/myImage/index.vue';

defineProps({
  list: {type: Array, default: () => []},
  total: {type: Number, default: 0},
  current: {type: Number, default: 0},
});

const emits = defineEmits(['update:current']);

const handleChange = (v: string) => emits('update:current', v);
</script>

<template>
  <div class="list">
    <a-row :gutter="[24, 48]">
      <template v-for="item in list">
        <a-col class="col" :span="24 / 3">
          <router-link :to="{ name: 'SeeMvDetail', query: { id: item.id } }">
            <MyImage class="cursor-pointer" width="100%" :height="250" :src="item.cover" :preview="false" footer-position="outer" :title="item.name" :description="item.artistName" rounded/>
            <span class="playCount">
              <icon-play-arrow/>{{ item.playCount }}
            </span>
          </router-link>
        </a-col>
      </template>
    </a-row>
    <a-pagination class="pagination" :total="total" :current="current" @change="handleChange"/>
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
