<script lang="ts" setup>
import { Icon } from '@arco-design/web-vue';
// import image_1 from '@/assets/images/logo/1.png';
import MyImage from '@/components/myImage/index.vue';

const src: string = 'https://at.alicdn.com/t/font_180975_ue66sq60vyd.js';
const IconFont = Icon.addFromIconFontCn({ src });
</script>

<template>
  <div class="logo h-10 mx-6 my-4 flex content-center items-center">
    <!-- <icon-font type="icon-earth" :size="32" /> -->
    <!-- <MyImage :src="image_1" :width="60" height="auto"></MyImage> -->
  </div>
</template>

<style lang="less" scoped>
.logo {
  background-color: var(--color-neutral-2);
}
</style>
