<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useStore } from 'vuex';
import dayjs from 'dayjs';
import { ActionTypes } from '@/store/modules/account/action-types';
import { router } from '@/router';

const store = useStore();

const hour = computed<number>(() => dayjs().get('hour'));
const darkMode = ref<boolean>(false);

const logout = () => {
  store.dispatch(ActionTypes.SET_ACCOUNT_LOGOUT);
  router.push({ name: 'AccountLogin' });
};

const profile = computed(() => store.state.account.profile);
const cookie = computed(() => store.state.account.cookie);

const init = () => {
  darkMode.value = hour.value < 6 || 18 < hour.value;
};
setTimeout(() => init());

watch(
  () => hour.value,
  (v) => (darkMode.value = v < 6 || 18 < v)
);

watch(
  () => darkMode.value,
  () =>
    darkMode.value
      ? document.body.setAttribute('arco-theme', 'dark')
      : document.body.removeAttribute('arco-theme')
);
</script>

<template>
  <div class="flex-1 flex justify-end items-center">
    <a-space class="mr-4">
      <icon-moon-fill v-if="darkMode" size="30" @click="darkMode = !darkMode" />
      <icon-moon v-else size="30" @click="darkMode = !darkMode" />
    </a-space>
    <a-popover>
      <a-space
        class="cursor-pointer"
        @click="$router.push({ name: 'AccountUser' })"
      >
        <a-avatar>
          <img :src="profile?.avatarUrl" v-if="profile" />
        </a-avatar>
        <div>{{ profile?.nickname }}</div>
      </a-space>
      <template #content>
        <a-button @click="logout" v-if="cookie">退出登录</a-button>
        <a-button @click="$router.push({ name: 'AccountUser' })" v-else
          >立即登录</a-button
        >
      </template>
    </a-popover>
  </div>
</template>

<style lang="less" scoped></style>
