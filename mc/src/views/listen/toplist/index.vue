<script lang="ts">
export default {
  name: 'ListenToplist',
};
</script>
<script lang="ts" setup>
import { reactive } from 'vue';
import listen from '@/apis/listen';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
import List from './list.vue';

const result = reactive<TYPE.RESULT>(CONSTANT.RESULT);
const result2 = reactive<TYPE.RESULT2>(CONSTANT.RESULT2);

const init = async () => {
  const res = await listen.getToplist();
  result.artistToplist = res.artistToplist;
  result.list = res.list;

  const res2 = await listen.getToplistDetail();
  result2.list = res2.list;
};
init();
</script>

<template>
  <div>
    <List :list="result.list" />
  </div>
</template>

<style lang="less" scoped></style>
