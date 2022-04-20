<script lang="ts" setup>
import { ref, reactive } from 'vue';
import watch from '@/apis/watch';
import Personalized from './personalized.vue';
import watch_R from '@/apis/watch/typeResult';

const result = ref<watch_R.RESULT_PERSONALIZED_MV>();

const init = async () => {
  result.value = await watch.getPersonalizedMv();
};
init();
</script>

<template>
  <!-- <Personalized :list="result.result" v-if="result" /> -->
</template>

<style lang="less" scoped></style>
