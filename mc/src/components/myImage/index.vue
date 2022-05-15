<script lang="ts" setup>
defineProps<{
  class?: string;
  src: string;
  width: number | string;
  height?: number | string;
  preview?: boolean;
  alt?: string;
  showLoader?: boolean;
  title?: string;
  description?: string;
  footerPosition?: 'outer' | 'inner';
  loadType?: 1; //  1高斯模糊 默认CSS跑马灯动画
}>();
</script>

<template>
  <a-image
    :class="class"
    :width="width"
    :height="height"
    :src="src"
    :alt="alt"
    :preview="preview"
    :show-loader="showLoader"
    :title="title"
    :description="description"
    :footer-position="footerPosition"
  >
    <template #loader v-if="!showLoader">
      <div class="w-full h-full" :class="class">
        <img v-if="loadType === 1" class="w-full h-full blur" :src="src" />
        <div v-else class="loader-animate w-full h-full"></div>
      </div>
    </template>
  </a-image>
</template>

<style lang="less" scoped>
@keyframes loop-circle {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
.loader-animate {
  background: linear-gradient(
    -60deg,
    var(--color-fill-2) 25%,
    var(--color-neutral-3) 40%,
    var(--color-fill-3) 55%
  );
  background-size: 400% 100%;
  animation: loop-circle 1.5s cubic-bezier(0.34, 0.69, 0.1, 1) infinite;
}
</style>
