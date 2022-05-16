<script lang="ts">
export default {
  name: 'ListenDj',
};
</script>
<script lang="ts" setup>
import { reactive } from 'vue';
import listen from '@/apis/listen';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
import List from './list.vue';

const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS);

const result = reactive<TYPE.RESULT>(CONSTANT.RESULT);

const init = async () => {
  const res = await listen.getDjPersonalizeRecommend(params);
  console.log(res);
  result.data = res.data;

  // const r = await listen.getPersonalizedDjprogram();
  // const r = await listen.getDjBanner();
  // const r = await listen.getDjSubscriber({ id: 335425050 });
  // const r = await listen.getUserAudio({ uid: 344460908 });
  // const r = await listen.getDjHot();
  // const r = await listen.getDjProgramToplist();
  // const r = await listen.getDjToplistPay();
  // const r = await listen.getDjProgramToplistHours();
  // const r = await listen.getDjToplistHours();
  // const r = await listen.getDjToplistNewcomer();
  // const r = await listen.getDjToplistPopular();
  // const r = await listen.getDjToplist();
  // const r = await listen.getRadioHot({ cateId: 2001 });
  // const r = await listen.getDjRecommend();
  // const r = await listen.getDjCatelist();
  // const r = await listen.getDjRecommendType({ type: 1 });
  // const r = await listen.getDjSub({ rid: 336355127 });
  // const r = await listen.getDjSublist();
  // const r = await listen.getDjPaygift();
  // const r = await listen.getDjCategoryExcludehot();
  // const r = await listen.getDjCategoryRecommend();
  // const r = await listen.getDjTodayPerfered();
  // const r = await listen.getDjProgram({ rid: 336355127 });
  // const r = await listen.getDjProgramDetail({ id: 1367665101 });
};
init();
</script>

<template>
  <List :list="result.data" />
</template>

<style lang="less" scoped></style>
