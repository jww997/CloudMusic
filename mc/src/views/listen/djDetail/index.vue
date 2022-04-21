<script lang="ts" setup>
import listen from '@/apis/listen/index';

const init = async () => {
  // const res = await listen.getPersonalizedDjprogram();
  // const res = await listen.getDjBanner();
  // const res = await listen.getDjPersonalizeRecommend();
  // const res = await listen.getDjSubscriber({ id: 335425050 });
  // const res = await listen.getUserAudio({ uid: 344460908 });
  // const res = await listen.getDjHot();
  // const res = await listen.getDjProgramToplist();
  // const res = await listen.getDjToplistPay();
  // const res = await listen.getDjProgramToplistHours();
  // const res = await listen.getDjToplistHours();
  // const res = await listen.getDjToplistNewcomer();
  // const res = await listen.getDjToplistPopular();
  // const res = await listen.getDjToplist();
  // const res = await listen.getRadioHot({ cateId: 2001 });
  // const res = await listen.getDjRecommend();
  // const res = await listen.getDjCatelist();
  // const res = await listen.getDjRecommendType({ type: 1 });
  // const res = await listen.getDjSub({ rid: 336355127 });
  // const res = await listen.getDjSublist();
  // const res = await listen.getDjPaygift();
  // const res = await listen.getDjCategoryExcludehot();
  // const res = await listen.getDjCategoryRecommend();
  // const res = await listen.getDjTodayPerfered();
  // const res = await listen.getDjDetail({ rid: 336355127 });
  // const res = await listen.getDjProgram({ rid: 336355127 });
  // const res = await listen.getDjProgramDetail({ id: 1367665101 });
  const res = await listen.getCommentDj({ id: 1367665101 });
  console.log(res);
};
init();
</script>

<template>
  <div>123</div>
</template>

<style lang="less" scoped></style>
