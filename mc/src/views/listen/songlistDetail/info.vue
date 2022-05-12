<script lang="ts" setup>
import listen_R from '@/apis/listen/typeResult';

type Props = {
  detail: {
    coverImgUrl: string;
    name: string;
    description: string;
  };
};
const props = defineProps<Props>();
</script>

<template>
  <a-space class="detail" size="large">
    <a-image class="cover" :src="detail.coverImgUrl" width="200"></a-image>
    <div class="txt">
      <a-typography-title>{{ detail.name }}</a-typography-title>
      <a-typography-title :heading="6">
        {{ detail.description }}
      </a-typography-title>
    </div>
  </a-space>
</template>

<style lang="less" scoped>
.detail {
  display: flex;
  .cover {
    border-radius: 10px;
  }
  .txt {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
  }
}
</style>
