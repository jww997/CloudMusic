<template>
  <a-layout :hasSider="true" :style="{height: '100vh'}">
    <a-layout-sider v-model:collapsed="collapsed" :collapsible="true" :theme="theme" :trigger="null">
      <div class="logo"/>
      <a-menu v-model:selectedKeys="selectedKeys" :theme="theme" class="menu" mode="inline">
        <a-menu-item v-for="item in menuItems" :key="item.key" class="menu-item">
          <span class="nav-text">{{ item.text }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <a-icon type="menu-unfold" @click="handleCollapsed"></a-icon>
      </a-layout-header>
      <a-layout-content>
        <Nuxt/>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const theme = ref<'dark' | 'light'>('dark')
const selectedKeys = ref<string[]>(['1'])
const menuItems = [{key: '1', text: 'nav1'}, {key: '2', text: 'nav2'}, {key: '3', text: 'nav3'}]
const collapsed = ref<boolean>(false)

const handleCollapsed = () => (collapsed.value = !collapsed.value)
</script>

<style scoped>
:deep(.logo) {
  background-color: rgba(0, 0, 0, 0.1);
  height: 32px;
  margin: 16px;
}

:deep(.menu) {
  height: calc(100% - 32px - 16px * 2);
}

:deep(.menu-item) {
  margin-top: 0;
}

:deep(.header) {
  background-color: #fff;
  padding: 0 20px;
}
</style>
