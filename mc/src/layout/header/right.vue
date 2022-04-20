<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ActionTypes } from '@/store/modules/account/action-types';
import { router } from '@/router';

const store = useStore();

const logout = () => {
  store.dispatch(ActionTypes.SET_ACCOUNT_LOGOUT);
  router.push('/account/login');
};

const profile = computed(() => store.state.account.profile);
const cookie = computed(() => store.state.account.cookie);
</script>

<template>
  <div class="right">
    <a-popover>
      <a-space class="txt-pointer" @click="$router.push('/account/user')">
        <a-avatar>
          <img :src="profile?.avatarUrl" v-if="profile" />
        </a-avatar>
        <div>{{ profile?.nickname }}</div>
      </a-space>
      <template #content>
        <a-button @click="logout" v-if="cookie">退出登录</a-button>
        <a-button @click="$router.push('/account/user')" v-else
          >立即登录</a-button
        >
      </template>
    </a-popover>
  </div>
</template>

<style lang="less" scoped>
.right {
  flex: 1;
  text-align: right;
  :deep(.arco-avatar) {
    overflow: hidden;
  }
}
</style>
