<script lang="ts">
export default {
  name: 'SeeVideoDetail',
};
</script>
<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { toNumber } from 'lodash';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ActionTypes } from '@/store/modules/see/action-types';

const router = useRouter();

const query = computed(() => router.currentRoute.value.query);

const id = toNumber(computed(() => query.value.id).value);

const store = useStore();

const init = async () => {
  // store.state.watch.videoRef = document.getElementById('video');
  store.dispatch(ActionTypes.SET_VIDEO_URL, id);
};
onMounted(() => init());
</script>

<template>
  <video id="video">您的浏览器不支持 video 标签。</video>
</template>

<style lang="less" scoped></style>
