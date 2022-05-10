<script lang="ts">
export default {
  name: 'SeeMv',
};
</script>
<script lang="ts" setup>
import { reactive, watch } from 'vue';
import _ from 'lodash';
import see from '@/apis/see';
import * as C from './_constant';
import type { PARAMS, RESULT } from './_type';
import Tags from './tags.vue';
import List from './list.vue';

const params = reactive<PARAMS>({
  area: '全部',
  type: '全部',
  order: '上升最快',
  limit: 30, // 取出数量
  offset: 0, // 偏移数量
});

const result = reactive<RESULT>({
  count: 0,
  data: [],
  hasMore: false,
  current: 1, // 当前页数
});

const init = async () => {
  console.log('params = ', params);
  const res = await see.getMvAll(params);
  console.log('res = ', res);

  const { count, data, hasMore } = res;

  if (count) result.count = count;
  result.data = result.data.concat(data);
  result.hasMore = hasMore;

  // const mvid = '5436712';
  // const id = '89ADDE33C0AAE8EC14B99F6750DB954D';

  // const r = await see.getMvFirst();
  // const r = await see.getMvExclusiveRcmd();
  // const r = await see.getPersonalizedMv();
  // const r = await see.getTopMv();
  // const r = await see.getMvDetail({ mvid });
  // const r = await see.getMvDetailInfo({ mvid });
  // const r = await see.getVideoGroupList();
  // const r = await see.getVideoCategoryList();
  // const r = await see.getVideoGroup({ id: 11155 });
  // const r = await see.getVideoTimelineAll();
  // const r = await see.getVideoTimelineRecommend();
  // const r = await see.getRelatedAllvideo({ id });
  // const r = await see.getVideoDetail({ id });
  // const r = await see.getVideoDetailInfo({ vid: id });
  // const r = await see.getVideoUrl({ id: id });
  // console.log(r);
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
  <div class="mv"
    ><Tags :list="C.AREA" v-model:active="params.area" title="地区" />
    <Tags :list="C.TYPE" v-model:active="params.type" title="类型" />
    <Tags :list="C.ORDER" v-model:active="params.order" title="排序" />
    <List
      :list="result.data"
      :total="result.count"
      v-model:current="result.current"
      v-if="result"
    />
  </div>
</template>

<style lang="less" scoped>
.mv {
  padding: 30px;
}
</style>
