<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { ActionTypes } from '@/store/modules/account/action-types';
import { router } from '@/router';

const store = useStore();

const darkMode = ref<boolean>(false);

const logout = () => {
  store.dispatch(ActionTypes.SET_ACCOUNT_LOGOUT);
  router.push({ name: 'AccountLogin' });
};

const profile = computed(() => store.state.account.profile);
const cookie = computed(() => store.state.account.cookie);

const handleDark = () => {
  if (darkMode.value) {
    document.body.removeAttribute('arco-theme');
  } else {
    document.body.setAttribute('arco-theme', 'dark');
  }
  darkMode.value = !darkMode.value;
};
</script>

<template>
  <div class="right">
    <a-space class="other">
      <icon-sun size="30" @click="handleDark" />
    </a-space>
    <a-popover>
      <a-space
        class="txt-pointer"
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

<style lang="less" scoped>
.right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .other {
    margin-right: 15px;
  }
  :deep(.arco-avatar) {
    overflow: hidden;
  }
}
</style>
