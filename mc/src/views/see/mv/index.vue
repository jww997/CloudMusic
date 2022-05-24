<script lang="ts">
export default {name: 'SeeMv',};
</script>
<script lang="ts" setup>
import {reactive, watch} from 'vue';
import _ from 'lodash';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
import see from '@/apis/see';
import MyTags from '@/components/myTags/index.vue';
import List from './list.vue';

const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS);
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT);

const getMvAll = async () => {
  const res = await see.getMvAll(params);
  const {count, data, hasMore} = res;
  if (count) _.assign(result, {count})
  _.assign(result, {data, hasMore})
}

const reset = () => {
  _.assign(params, {offset: 0})
  _.assign(result, {data: [], hasMore: false});
};

const init = async () => {
  await getMvAll()

  // const r = await see.getMvFirst();
  // const r = await see.getMvExclusiveRcmd();
  // const r = await see.getPersonalizedMv();
  // const r = await see.getVideoTimelineAll();
  // const r = await see.getVideoTimelineRecommend();
};
init();

watch(params, init, {deep: true});
watch(() => params.area, reset);
watch(() => params.type, reset);
watch(() => params.order, reset);
watch(
    () => result.current,
    (v: number) => {
      reset();
      params.offset = (v - 1) * params.limit;
    }
);
</script>

<template>
  <div>
    <MyTags :list="CONSTANT.AREA" v-model:active="params.area" title="地区"/>
    <MyTags :list="CONSTANT.TYPE" v-model:active="params.type" title="类型"/>
    <MyTags :list="CONSTANT.ORDER" v-model:active="params.order" title="排序"/>
    <List :list="result.data" :total="result.count" v-model:current="result.current" v-if="result"/>
  </div>
</template>

<style lang="less" scoped></style>
