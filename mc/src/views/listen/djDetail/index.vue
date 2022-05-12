<script lang="ts">
export default {
  name: 'ListenDjDetail',
};
</script>
<script lang="ts" setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import listen from '@/apis/listen';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
// import List from './list.vue';

const route = useRoute();

const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS);

const result = reactive<TYPE.RESULT>(CONSTANT.RESULT);

const init = async () => {
  const id = <string>route.query.id;
  params.rid = id;
  const res = await listen.getDjDetail(CONSTANT.PARAMS);
  result.data = res.data;
  console.log('res = ', res);
};
init();
</script>

<template>
  <div>{{ result.data }}</div>
</template>

<style lang="less" scoped></style>
