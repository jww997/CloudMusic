<script lang="ts" setup>
import { h, resolveComponent, defineComponent } from 'vue';
import { router } from '@/router';
import { RouteRecordNormalized } from 'vue-router';

const root = router
  .getRoutes()
  .find((el) => el.name === 'home') as RouteRecordNormalized;

const Icon = defineComponent({
  props: ['name'],
  render() {
    return h(resolveComponent(this.name ?? ''));
  },
});
</script>

<template>
  <a-menu class="menu" accordion auto-scroll-into-view auto-open-selected>
    <a-sub-menu :key="i.path" v-for="i in root.children">
      <template #icon>
        <Icon :name="i.meta?.icon" />
      </template>
      <template #title>{{ i.meta?.locale }}</template>
      <template v-for="ii in i.children" :key="ii.path">
        <a-menu-item
          v-if="!ii.meta?.hideInMenu"
          @click="$router.push({ name: ii.name })"
        >
          <template #icon>
            <Icon :name="ii.meta?.icon" />
          </template>
          <span>{{ ii.meta?.locale }}</span>
        </a-menu-item>
      </template>
    </a-sub-menu>
  </a-menu>
</template>

<style lang="less" scoped>
:deep(.arco-menu-inner) {
  .arco-menu-inline-header {
    display: flex;
    align-items: center;
  }
  .arco-icon {
    &:not(.arco-icon-down) {
      font-size: 18px;
    }
  }
}
</style>
