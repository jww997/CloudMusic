<script lang="ts" setup>
const props = defineProps<{
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

  loadType?: 1; // 1高斯模糊 默认CSS跑马灯动画
  rounded?: boolean; // 一点点的圆角
  roundedFull?: boolean; // 圆圈
}>();
</script>

<template>
  <div
    class="flex"
    :class="{
      rounded,
      roundedFull,
      'mb-24': title && !description,
      'mb-28': title && description,
    }"
  >
    <a-image class="shrink-0 relative" v-bind="props">
      <template #loader v-if="!showLoader">
        <div class="loader w-full h-full" :class="class">
          <img v-if="loadType === 1" class="w-full h-full blur" :src="src" />
          <div v-else class="loader-animate w-full h-full"></div>
        </div>
      </template>
    </a-image>
  </div>
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
.flex :deep(.arco-image-footer) {
  padding-top: 1rem;
}
.rounded :deep(.arco-image),
.roundedFull :deep(.arco-image) {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.rounded :deep(.arco-image),
.rounded .loader {
  border-radius: 0.5rem;
}
.roundedFull .loader {
  border-radius: 50%;
}
.rounded .loader,
.roundedFull .loader {
  overflow: hidden;
}
</style>
