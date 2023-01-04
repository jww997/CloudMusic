<script lang="ts" setup>
import {ref, computed, watch} from "vue"
import _ from "lodash"

const props = defineProps<{
  src?: string; // 视频获取地址
  // width?: number; // 视频显示宽度
  // height?: number; // 视频显示高度

  class?: string;
  roundedType?: 0 | 1 | 2; // 0无效果 1圆 2圆角
}>()

const {
  roundedType = 0,
} = props
const className = computed(
    () => `
    ${props.class}
    rounded-${roundedType}
  `,
)

</script>

<template>
  <video :class="className" v-bind="_.omit(props, 'class')">您的浏览器不支持video标签。</video>
</template>

<style lang="less" scoped>
.rounded-2,
.rounded-1 {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
  0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
  0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
  var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.rounded-2 {
  border-radius: 1rem !important;
}

.rounded-1 {
  border-radius: 50%;
}

.rounded-2,
.rounded-1 {
  overflow: hidden;
}
</style>
