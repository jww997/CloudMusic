<script lang="ts" setup>
import { onUnmounted, ref, reactive } from 'vue';
import { useStore } from 'vuex';
import { MutationsTypes } from '@/store/modules/account/mutations-types';
import account from '@/apis/account/index';
import { router } from '@/router';
import image_1 from '@/assets/images/qr/1.png';
import image_2 from '@/assets/images/qr/2.png';
import MyImage from '@/components/myImage/index.vue';

const login = ref<{
  timestamp: number;
  key: string;
  qr: string;
  message: string;
}>({
  timestamp: 0,
  key: '',
  qr: '',
  message: '',
});

const store = useStore();

const init = async () => {
  login.value.timestamp = new Date().getTime();
  const {
    data: { unikey },
  } = await account.getLoginQrKey({ timestamp: login.value.timestamp });
  login.value.key = unikey;
  const {
    data: { qrimg },
  } = await account.getLoginQrCreate({
    timestamp: login.value.timestamp,
    key: unikey,
    qrimg: 1,
  });
  login.value.qr = qrimg;
  checkQr();
};
const timer = ref();
const clearTimer = () => clearInterval(timer.value);
const checkQr = () => {
  timer.value = setInterval(async () => {
    login.value.timestamp = new Date().getTime();
    // 800二维码过期 801等待扫码 802待确认 803授权登录成功
    const { code, message, cookie } = await account.getLoginQrCheck({
      timestamp: login.value.timestamp,
      key: login.value.key,
    });
    login.value.message = message;
    if (code === 803) {
      store.commit(MutationsTypes.ACCOUNT_COOKIE, cookie);
      clearTimer();
      router.removeRoute('/account/login');
      router.back();
    } else if (code === 800) {
      clearTimer();
      init();
    }
  }, 1000);
};
init();
onUnmounted(clearTimer);
</script>

<template>
  <div class="qr">
    <MyImage :src="image_1" width="auto" :height="300" class="tip" />
    <MyImage :src="login.qr" :width="200" :height="200" class="code" />
  </div>
</template>

<style lang="less" scoped>
.qr {
  height: 300px;
  display: flex;
  .tip,
  .code {
    transition: 0.5s;
    transform-origin: 50% 0%;
  }
  .tip {
    margin-right: -170px;
    opacity: 0;
  }
  .code {
    transform: scale(1.5);
    margin-top: -15px;
  }
  &:hover {
    .tip {
      margin-right: 0;
      opacity: 1;
    }
    .code {
      transform: scale(1);
    }
  }
}
</style>
