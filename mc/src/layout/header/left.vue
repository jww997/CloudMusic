<script lang="ts" setup></script>

<template>
  <div class="shrink-0 pr-4 flex items-center">
    <icon-left
      class="cursor-pointer txt-hover"
      size="25"
      @click="$router.back()"
    />
    <div class="w-6"></div>
    <icon-right
      class="cursor-pointer txt-hover"
      size="25"
      @click="$router.go(1)"
    />
  </div>
</template>

<style lang="less" scoped></style>
