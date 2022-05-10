<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { toNumber } from 'lodash';
import listen from '@/apis/listen/index';
import listen_R from '@/apis/listen/typeResult';
import List from '../songlistDetail/list.vue';
import * as C from './constant';

const router = useRouter();

const query = computed(() => router.currentRoute.value.query);

const id = toNumber(computed(() => query.value.id).value);

const result1 = ref<listen_R.RESULT_ALUBUM>();
const init = async () => {
  result1.value = await listen.getAlubum({ id });

  // const r = await listen.getAlubumDetailDynamic({ id });
  // const r = await listen.getAlubumSub({ id, t: 1 });
  // const r = await listen.getAlubumSublist({});
  // const r = await listen.getAlubumNewest({ id });
  const r = await listen.getCommentAlubum({ id });
  console.log(r);
};
init();
</script>

<template>
  <div v-if="result1">
    <List :list="result1.songs" :columns="C.COLUMNS" v-if="result1.songs" />
  </div>
</template>

<style lang="less" scoped></style>
