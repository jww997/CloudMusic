<script lang="ts" setup>
import listen from '@/apis/listen/index';

const init = async () => {
  // const r = await listen.getPersonalizedDjprogram();
  // const r = await listen.getDjBanner();
  // const r = await listen.getDjPersonalizeRecommend();
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
  // const r = await listen.getDjDetail({ rid: 336355127 });
  // const r = await listen.getDjProgram({ rid: 336355127 });
  // const r = await listen.getDjProgramDetail({ id: 1367665101 });
  const r = await listen.getCommentDj({ id: 1367665101 });
  console.log(r);
};
init();
</script>

<template>
  <div>123</div>
</template>

<style lang="less" scoped></style>
