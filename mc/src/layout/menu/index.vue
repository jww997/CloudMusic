<!-- <script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    Icon: {
      props: ['name'],
      render() {
        return h('icon-apps');
      },
    },
  },
});
</script> -->
<script lang="ts" setup>
import { h, compile, defineComponent } from 'vue';
import { router } from '@/router';
import { RouteRecordNormalized } from 'vue-router';

const root = router
  .getRoutes()
  .find((el) => el.name === 'home') as RouteRecordNormalized;

const Icon = defineComponent({
  props: ['name'],
  render() {
    const name: string = this.name ?? 'icon-apps';
    console.log(`<${name}/>`);
    return h(compile(`<${name}/>`));
  },
});
</script>

<template>
  <a-menu>
    <a-sub-menu key="0" v-for="i in root.children">
      <template #icon>
        <Icon :name="i.meta?.icon"></Icon>
      </template>
      <template #title>{{ i.meta?.locale }}</template>
      <template v-for="ii in i.children" :key="ii.path">
        <a-menu-item
          v-if="!ii.meta?.hideInMenu"
          @click="$router.push({ name: ii.name })"
        >
          <template #icon>
            <Icon :name="i.meta?.icon"></Icon>
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
