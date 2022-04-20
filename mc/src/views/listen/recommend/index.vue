<script lang="ts" setup>
import { ref, computed } from 'vue';
import listen from '@/apis/listen';
import List from '../songlist/list.vue';
import listen_R from '@/apis/listen/typeResult';

const result = ref<listen_R.RESULT_PERSONALIZED>();
const list = computed(() =>
  result.value?.result.map((v) => ({ ...v, coverImgUrl: v.picUrl }))
);

const init = async () => {
  result.value = await listen.getPersonalized();
  
};
init();
</script>

<template>
  <List :list="list" v-if="list" />
</template>

<style lang="less" scoped></style>
