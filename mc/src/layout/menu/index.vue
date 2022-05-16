<script lang="ts" setup>
import { ref, h, resolveComponent, defineComponent, computed } from 'vue';
import { RouteRecordRaw, onBeforeRouteUpdate } from 'vue-router';
import { routes, router, defaultSelectedKey } from '@/router';

const children = computed<RouteRecordRaw[]>(() => routes[0].children ?? []);
const defaultOpenKeys = ref<string[]>([]);
const openKeys = ref<string[]>([]);
const selectedKey = ref<string[]>([]);

const handleOpen = (path: string) => {
  const temp = children.value.some((v) =>
    v.children?.some((v2) => !v2.meta?.hideInMenu && v2.path === path)
  );
  openKeys.value = temp ? defaultOpenKeys.value : [];
};

const init = () => {
  const path = router.currentRoute.value.path;
  children.value.map((item) => defaultOpenKeys.value.push(item.path));
  selectedKey.value = [path];
  handleOpen(path);
};
init();

onBeforeRouteUpdate((to) => {
  selectedKey.value = [to.path];
  handleOpen(to.path);
});

const MenuIcon = defineComponent({
  props: ['name'],
  render() {
    return h(resolveComponent(this.name));
  },
});
</script>

<template>
  <a-menu
    class="menu"
    auto-scroll-into-view
    auto-open-selected
    auto-open
    :accordion="openKeys.length"
    v-model:open-keys="openKeys"
    :default-open-keys="defaultOpenKeys"
    v-model:selected-keys="selectedKey"
    :default-selected-keys="[defaultSelectedKey]"
  >
    <template v-for="item in children" :key="item.name">
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
