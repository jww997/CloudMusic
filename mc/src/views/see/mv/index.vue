<script lang="ts">
export default {
  name: 'SeeMv',
};
</script>
<script lang="ts" setup>
import { reactive, watch } from 'vue';
import _ from 'lodash';
import see from '@/apis/see';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
import Tags from './tags.vue';
import List from './list.vue';

const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS);

const result = reactive<TYPE.RESULT>(CONSTANT.RESULT);

const init = async () => {
  const res = await see.getMvAll(params);
  const { count, data, hasMore } = res;
  if (count) result.count = count;
  result.data = result.data.concat(data);
  result.hasMore = hasMore;

  // const r = await see.getMvFirst();
  // const r = await see.getMvExclusiveRcmd();
  // const r = await see.getPersonalizedMv();
  // const r = await see.getVideoTimelineAll();
  // const r = await see.getVideoTimelineRecommend();
};
init();

const reset = () => {
  params.offset = 0;
  _.assign(result, { data: [], hasMore: false });
};

watch(params, init, { deep: true });
watch(() => params.area, reset);
watch(() => params.type, reset);
watch(() => params.order, reset);
watch(
  () => result.current,
  (v: number) => {
    reset();
    const offset = (v - 1) * params.limit;
    params.offset = offset;
  }
);
</script>

<template>
  <div>
    <Tags :list="CONSTANT.AREA" v-model:active="params.area" title="地区" />
    <Tags :list="CONSTANT.TYPE" v-model:active="params.type" title="类型" />
    <Tags :list="CONSTANT.ORDER" v-model:active="params.order" title="排序" />
    <List
      :list="result.data"
      :total="result.count"
      v-model:current="result.current"
      v-if="result"
    />
  </div>
</template>

<style lang="less" scoped></style>
