<script lang="ts" setup>
import { ref, computed } from 'vue';
import Phone from './phone.vue';
import Email from './email.vue';
import Qr from './qr.vue';
import ImgUrl_1 from '@/assets/images/bg/3.jpg';

// 密码加密 jsencrypt / md5
const loginType = ref<number>(1);
const title = computed(() =>
  loginType.value === 1
    ? '手机号登录'
    : loginType.value === 2
    ? '邮箱登录'
    : loginType.value === 3
    ? '扫码登录'
    : '重置密码'
);
const reset = () => (loginType.value = 4);
</script>

<template>
  <!-- <div class="login" :style="{ backgroundImage: `url(${ImgUrl_1})` }"> -->
  <div class="login">
    <a-typography-title class="title" :heading="3">{{
      title
    }}</a-typography-title>
    <Phone v-if="loginType === 1 || loginType === 4" @reset="reset" />
    <Email v-else-if="loginType === 2" />
    <Qr v-else-if="loginType === 3" />
    <a-space class="other" direction="vertical">
      <p>选择其他登录方式</p>
      <a-space>
        <icon-phone
          size="40"
          class="txt-pointer txt-hover"
          @click="loginType = 1"
          v-if="loginType !== 1"
        />
        <icon-email
          size="40"
          class="txt-pointer txt-hover"
          @click="loginType = 2"
          v-if="loginType !== 2"
        />
        <icon-qrcode
          size="40"
          class="txt-pointer txt-hover"
          @click="loginType = 3"
          v-if="loginType !== 3"
        />
      </a-space>
    </a-space>
  </div>
</template>

<style lang="less" scoped>
.login {
  height: 100%;
  // background: center no-repeat;
  background-size: auto 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    margin-bottom: 30px;
  }
  .other {
    margin-top: 30px;
  }
}
</style>
