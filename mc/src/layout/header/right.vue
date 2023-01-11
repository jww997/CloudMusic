<script lang="ts" setup>
import {ref, computed, watch} from "vue"
import {useStore} from "vuex"
import {IconBgColors, IconMoonFill, IconMoon} from "@arco-design/web-vue/es/icon"
import dayjs from "dayjs"
import {ActionTypes} from "@/store/modules/account/action-types"
import {router} from "@/router"
import {toggleTheme} from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils.js"

const store = useStore()

const hour = computed<number>(() => dayjs().get("hour"))
const darkMode = ref<boolean>(false)


const logout = () => {
  store.dispatch(ActionTypes.SET_ACCOUNT_LOGOUT)
  router.push({name: "AccountLogin"})
}

const profile = computed(() => store.state.account.profile)
const cookie = computed(() => store.state.account.cookie)

const init = () => {
  darkMode.value = hour.value < 6 || 18 < hour.value
}
setTimeout(() => init())

watch(() => hour.value, (v) => (darkMode.value = v < 6 || 18 < v),)

watch(() => darkMode.value, () => darkMode.value ? document.body.setAttribute("arco-theme", "dark") : document.body.removeAttribute("arco-theme"),)

// 暗黑模式
const handleDark = () => {
  darkMode.value = !darkMode.value
}
// 切换主题
const themeIndex = ref<number>(0)
const handleTheme = () => {
  const theme = ["theme-default", "theme-green"]
  const len = theme.length - 1
  const index = len > themeIndex.value ? themeIndex.value + 1 : 0
  toggleTheme({scopeName: theme[index]})
  themeIndex.value = index
}
</script>

<template>
  <div class="flex-1 flex justify-end items-center">
    <a-space class="mr-4">
      <IconBgColors size="30" @click="handleTheme"/>
      <IconMoonFill v-if="darkMode" size="30" @click="handleDark"/>
      <IconMoon v-else size="30" @click="handleDark"/>
    </a-space>
    <a-popover>
      <a-space
          class="cursor-pointer"
          @click="$router.push({ name: 'AccountUser', query: {id:'344460908'} })"
      >
        <a-avatar>
          <img v-if="profile" :alt="profile?.nickname" :src="profile?.avatarUrl"/>
        </a-avatar>
        <div>{{ profile?.nickname }}</div>
      </a-space>
      <template #content>
        <a-button v-if="cookie" @click="logout">退出登录</a-button>
        <a-button v-else @click="$router.push({ name: 'AccountUser', query: {id:'344460908'} })"
        >立即登录
        </a-button
        >
      </template>
    </a-popover>
  </div>
</template>

<style lang="less" scoped></style>
