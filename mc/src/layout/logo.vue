<script lang="ts" setup>
import MyImage from '@/components/myImage/index.vue';
import { Icon } from '@arco-design/web-vue';
// import image_1 from '@/assets/images/logo/1.png';

const src: string = 'https://at.alicdn.com/t/font_180975_ue66sq60vyd.js';
const IconFont = Icon.addFromIconFontCn({ src });
</script>

<template>
  <div class="logo">
    <!-- <icon-font type="icon-earth" :size="32" /> -->
    <!-- <MyImage :src="image_1" :width="60" height="auto"></MyImage> -->
  </div>
</template>

<style lang="less" scoped>
.logo {
  height: calc(64px - 12px * 2);
  background-color: var(--color-neutral-2);
  margin: 12px 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(var(--gray-10));
}
</style>
