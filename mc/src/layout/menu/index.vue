<script lang="ts" setup>
import { ref, h, resolveComponent, defineComponent } from 'vue';
import { RouteRecordRaw, onBeforeRouteUpdate } from 'vue-router';
import { routes, router, defaultSelectedKey } from '@/router';

const root: RouteRecordRaw = routes[0];

const MenuIcon = defineComponent({
  props: ['name'],
  render() {
    return h(resolveComponent(this.name));
  },
});

const selectedKey = ref<string[]>([]);
const init = () => {
  selectedKey.value = [router.currentRoute.value.path];
};
init();

onBeforeRouteUpdate((to) => {
  selectedKey.value = [to.path];
});
</script>

<template>
  <a-menu
    class="menu"
    auto-scroll-into-view
    auto-open-selected
    auto-open
    v-model:selected-keys="selectedKey"
    :default-selected-keys="[defaultSelectedKey]"
  >
    <template v-for="item in root.children" :key="item.name">
      <template v-if="item.meta">
        <a-sub-menu :key="item.path">
          <template #icon v-if="item.meta.icon">
            <MenuIcon :name="item.meta.icon" />
          </template>
          <template #title>{{ item.meta.locale }}</template>
          <template v-for="item2 in item.children" :key="item2.name">
            <template v-if="item2.meta">
              <a-menu-item
                v-if="!item2.meta.hideInMenu"
                :key="item2.path"
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
