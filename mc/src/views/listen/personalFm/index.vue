<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import listen from '@/apis/listen/index';
import listen_R from '@/apis/listen/typeResult';
import { ActionTypes } from '@/store/modules/listen/action-types';
import { MutationsTypes } from '@/store/modules/listen/mutations-types';

const store = useStore();

const result1 = ref<listen_R.RESULT_PERSONAL_FM>();

const init = async () => {
  const res = await listen.getPersonalFm();
  result1.value = res;
  const { data } = res;
  store.commit(MutationsTypes.AUDIO_LIST, data);
  store.dispatch(ActionTypes.SET_AUDIO_URL, data[0].id);
};
init();
</script>

<template>
  <div>123</div>
</template>

<style lang="less" scoped></style>
