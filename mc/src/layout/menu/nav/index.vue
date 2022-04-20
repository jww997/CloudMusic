<!--
 * @Description:
 * @Autor: Gavin
 * @Date: 2022-03-03 05:11:51
 * @LastEditors: Gavin
 * @LastEditTime: 2022-03-03 05:11:51
-->
<script setup lang="ts">
import { navMenus } from '@/router'
import NavItem from './NavItem.vue'
// const { getters } = useStore()
// const isCollapse = computed(() => getters.isCollapse)
const isCollapse = false
</script>

<template>
  <el-scrollbar>
    <!-- <el-menu :collapse="isCollapse" :unique-opened="true">
      <NavItem
        v-for="navMenu in navMenus"
        :key="navMenu.path"
        :route="navMenu"
        :is-collapse="isCollapse"
      />
    </el-menu> -->

    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<style lang="less" scoped>
.nav {
  background-color: transparent;
}
.mine {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .cover {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
  }
  .name,
  .triangle {
    margin-left: 10px;
  }
  .name {
    font-size: 20px;
  }
  .triangle {
    width: 0;
    height: 0;
    border-width: 7px 10px;
    border-color: transparent transparent transparent #8e8e8f;
    border-style: solid;
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
