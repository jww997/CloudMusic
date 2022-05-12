<script lang="ts" setup>
import { h, resolveComponent, defineComponent } from 'vue';
import { routes } from '@/router';
import { RouteRecordRaw } from 'vue-router';

const root: RouteRecordRaw = routes[0];

const MenuIcon = defineComponent({
  props: ['name'],
  render() {
    return h(resolveComponent(this.name));
  },
});
</script>

<template>
  <a-menu class="menu" accordion auto-scroll-into-view auto-open-selected>
    <template v-for="item in root.children" :key="item.name">
      <template v-if="item.meta">
        <a-sub-menu>
          <template #icon v-if="item.meta.icon">
            <MenuIcon :name="item.meta.icon" />
          </template>
          <template #title>{{ item.meta.locale }}</template>
          <template v-for="item2 in item.children" :key="item2.name">
            <template v-if="item2.meta">
              <a-menu-item
                v-if="!item2.meta.hideInMenu"
                @click="$router.push({ name: item2.name })"
              >
                <template #icon v-if="item2.meta.icon">
                  <MenuIcon :name="item2.meta.icon" />
                </template>
                <span>{{ item2.meta.locale }}</span>
              </a-menu-item>
            </template>
          </template>
        </a-sub-menu>
      </template>
    </template>
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
