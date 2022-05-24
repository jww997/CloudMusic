<script lang="ts" setup>
import {IconLeft, IconRight} from "@arco-design/web-vue/es/icon";


</script>

<template>
  <div class="shrink-0 pr-4 flex items-center">
    <iconLeft class="cursor-pointer txt-hover" size="25" @click="$router.back()"/>
    <div class="w-6"></div>
    <iconRight class="cursor-pointer txt-hover" size="25" @click="$router.go(1)"/>
  </div>
</template>

<style lang="less" scoped></style>

