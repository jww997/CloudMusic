<!--
 * @Description:
 * @Autor: Gavin
 * @Date: 2022-03-03 05:11:51
 * @LastEditors: Gavin
 * @LastEditTime: 2022-03-03 05:11:51
-->
<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
  route: { type: Object, required: true },
});
const { route } = toRefs(props);

// const isHidden = ({}) => [true].includes(props.route.meta.hidden)
</script>

<template>
  {{ route }}
  {{ route.children }}
  <template v-if="false">隐藏</template>
  <template v-else-if="!route.children">
    <el-menu-item :index="route.index">
      {{ route.index }}
      <router-link :to="{ name: route.name }"> </router-link>
    </el-menu-item>
  </template>
  <template v-else>
    <el-submenu :index="route.index">
      <template slot="title">
        <i :class="route.meta.icon || 'el-icon-menu'"></i>
        <span>{{ route.meta.title }}</span>
      </template>
      <nav-item
        v-for="child in route.children"
        :key="child.path"
        :route="child"
      />
    </el-submenu>
  </template>
</template>

<style lang="less" scoped></style>
