<script lang="ts" setup>
import MyImage from '@/components/myImage/index.vue';

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
    <MyImage
      :src="detail.coverImgUrl"
      :width="250"
      :height="250"
      rounded
    />
    <div>
      <a-typography-title>{{ detail.name }}</a-typography-title>
      <a-typography-title :heading="6">
        {{ detail.description }}
      </a-typography-title>
    </div>
  </a-space>
</template>

<style lang="less" scoped></style>
