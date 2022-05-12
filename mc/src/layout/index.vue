<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Header from './header/index.vue';
import Footer from './footer/index.vue';
import Menu from './menu/index.vue';
import Crumb from './crumb.vue';
import Logo from './logo.vue';

const store = useStore();
const fold = computed(() => store.state.listen.audio.fold);
</script>

<template>
  <a-layout class="layout">
    <a-layout-sider collapsible><Logo /><Menu /></a-layout-sider>
    <a-layout>
      <a-layout-header><Header /></a-layout-header>
      <a-layout class="body">
        <Crumb class="body-crumb" />
        <a-layout-content><router-view /></a-layout-content>
        <a-layout-footer v-show="fold"><Footer /></a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style lang="less" scoped>
.layout {
  height: 100%;
  .body {
    padding: 0 20px;
    box-sizing: border-box;
    overflow-y: auto;
    &-crumb {
      background-color: var(--color-neutral-2);
      position: sticky;
      top: 0;
      z-index: 2;
    }
  }
  :deep(.arco-layout) {
    background-color: var(--color-neutral-2);
  }
  :deep(.arco-layout-header),
  :deep(.arco-layout-content),
  :deep(.arco-layout-footer) {
    background-color: var(--color-bg-3);
    color: rgb(var(--gray-10));
  }
  :deep(.arco-layout-footer) {
    position: sticky;
    bottom: 0;
    z-index: 2;
  }
}
</style>
