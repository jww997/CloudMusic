<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Menu from '@/layout/menu/index.vue';
import Header from '@/layout/header/index.vue';
import Footer from '@/layout/footer/index.vue';
import Crumb from './crumb.vue';
import { Icon } from '@arco-design/web-vue';

const store = useStore();

const src: string = 'https://at.alicdn.com/t/font_180975_ue66sq60vyd.js';
const IconFont = Icon.addFromIconFontCn({ src });

const fold = computed(() => store.state.listen.audio.fold);
</script>

<template>
  <a-layout class="layout">
    <a-layout-sider class="sider" collapsible breakpoint="xl">
      <div class="logo">
        <icon-font type="icon-earth" :size="32" />
      </div>
      <Menu></Menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header"><Header></Header></a-layout-header>
      <a-layout class="body">
        <Crumb />
        <a-layout-content>
          <router-view />
        </a-layout-content>
        <transition name="drawer" appear>
          <a-layout-footer v-show="fold"><Footer></Footer></a-layout-footer>
        </transition>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style lang="less" scoped>
.layout {
  height: 100%;
  background: var(--color-fill-2);
  .logo {
    height: calc(64px - 12px * 2);
    margin: 12px 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .body {
    padding: 0 20px;
    box-sizing: border-box;
    .breadcrumb {
      padding: 16px 0;
    }
  }
}
// :deep(.arco-layout-sider) .logo {
//   height: calc(64px - 12px * 2);
//   margin: 12px 8px;
// }
:deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}
:deep(.arco-layout-header),
:deep(.arco-layout-footer) {
  background: var(--color-bg-4);
}
:deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  padding: 0 20px;
}

:deep(.arco-layout) {
  height: 100%;
  position: relative;
  overflow-y: auto;
  background: var(--color-fill-2);
}

:deep(.arco-layout-footer) {
  height: 100px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;

  position: sticky;
  bottom: 0;
  right: 20px;
  left: 20px;
  z-index: 2;
}
:deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}

:deep(.arco-layout-footer),
:deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}
</style>
