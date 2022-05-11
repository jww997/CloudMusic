<script lang="ts">
export default {
  name: 'SeeToplist',
};
</script>
<script lang="ts" setup>
import { reactive, watch } from 'vue';
import _ from 'lodash';
import dayjs from 'dayjs';
import see from '@/apis/see';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
import Tags from './tags.vue';
import List from './list.vue';

const params = reactive<TYPE.PARAMS>({
  area: '内地',
  limit: 30, // 取出数量
  offset: 0, // 偏移数量
});

const result = reactive<TYPE.RESULT>({
  data: [],
  hasMore: false,
  updateTime: 0,
  current: 1, // 当前页数
});

const init = async () => {
  console.log('params = ', params);
  const res = await see.getTopMv(params);
  console.log('res = ', res);
  const { updateTime, data, hasMore } = res;
  result.data = result.data.concat(data);
  result.hasMore = hasMore;
  result.updateTime = updateTime;
};
init();

const reset = () => {
  params.offset = 0;
  _.assign(result, { data: [], hasMore: false });
};

watch(params, init, { deep: true });
watch(() => params.area, reset);
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
  <div class="toplist">
    <Tags :list="CONSTANT.AREA" v-model:active="params.area" />
    <div class="updateTime"
      >更新时间：{{ dayjs(result.updateTime).format('YYYY-MM-DD') }}</div
    >
    <List :list="result.data" v-model:current="result.current" v-if="result" />
  </div>
</template>

<style lang="less" scoped>
.toplist {
  position: relative;

  .updateTime {
    position: absolute;
    right: 30px;
    top: 30px;
  }
}
</style>
