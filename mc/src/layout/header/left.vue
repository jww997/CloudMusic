<script lang="ts" setup></script>

<template>
  <div class="left">
    <icon-left
      class="txt-pointer txt-hover"
      size="25"
      @click="$router.back()"
    />
    <div class="space"></div>
    <icon-right
      class="txt-pointer txt-hover"
      size="25"
      @click="$router.go(1)"
    />
  </div>
</template>

<style lang="less" scoped>
.left {
  flex-shrink: 0;
  padding-right: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .space {
    width: 20px;
  }
}
</style>
