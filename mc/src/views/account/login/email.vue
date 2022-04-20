<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import md5 from 'md5';
import account from '@/apis/account/index';
import { PARAMS_LOGIN } from '@/apis/account/typeParams';
import { ActionTypes } from '@/store/modules/account/action-types';
import { router } from '@/router';

const store = useStore();

type FORM = {
  email: string;
  password: string;
};

const form = ref<FORM>({
  email: '',
  password: '',
});

const handleSubmit = async ({ values }: { values: PARAMS_LOGIN }) => {
  const res = await account.postLogin({
    ...values,
    md5_password: md5(values.password),
    password: '',
  });
  store.dispatch(ActionTypes.SET_ACCOUNT_LOGIN, res);
  router.removeRoute('/account/login');
  router.back();
};
</script>

<template>
  <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
    <a-form-item field="email" label="邮箱">
      <a-input v-model="form.email" placeholder="请输入邮箱" allow-clear />
    </a-form-item>
    <a-form-item field="password" label="密码">
      <a-input-password
        v-model="form.password"
        placeholder="请输入密码"
        allow-clear
      />
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="!(form.email && form.password)"
        >提交</a-button
      >
    </a-form-item>
  </a-form>
</template>

<style lang="less" scoped></style>
