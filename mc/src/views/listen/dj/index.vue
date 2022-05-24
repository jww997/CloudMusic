<script lang="ts">
export default {name: 'ListenDj',};
</script>
<script lang="ts" setup>
import {reactive} from 'vue';
import _ from 'lodash';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
import listen from '@/apis/listen';
import List from '../songlist/list.vue';
import Box from './box.vue';

const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS);
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT);

const getDjPersonalizeRecommend = async () => {
  const res = await listen.getDjPersonalizeRecommend(params);
  const {data} = res
  _.assign(result, {data})
}

const init = async () => {
  await getDjPersonalizeRecommend()

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
  <List :list="result.data">
    <template v-slot="{item}">
      <Box :name="item.name" :id="item.id" picUrl="item.cover"/>
    </template>
  </List>
</template>

<style lang="less" scoped></style>
