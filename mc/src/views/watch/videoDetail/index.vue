<script lang="ts" setup>
import { computed, watchEffect } from 'vue';
import { toNumber } from 'lodash';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ActionTypes } from '@/store/modules/watch/action-types';

const router = useRouter();
const id = computed(() => router.currentRoute.value.query.id);
watchEffect(() => {
  if (!id.value) router.go(-2);
});

const store = useStore();

const init = async () => {
  store.dispatch(ActionTypes.SET_VIDEO_URL, toNumber(id.value));
};
init();
</script>

<template>
  <video id="video"></video>
</template>

<style lang="less" scoped></style>
