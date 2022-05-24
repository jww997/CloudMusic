<script lang="ts">
export default {
  name: 'SeeToplist',
};
</script>
<script lang="ts" setup>
import {reactive, watch} from 'vue';
import dayjs from 'dayjs';
import _ from 'lodash';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
import see from '@/apis/see';
import MyTags from '@/components/myTags/index.vue';
import List from './list.vue';

const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS);
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT);

const getTopMv = async () => {
  const res = await see.getTopMv(params);
  const {updateTime, data, hasMore} = res;
  _.assign(result, {data: data.concat(data), hasMore, updateTime})
}

const handleReset = () => {
  _.assign(params, {offset: 0})
  _.assign(result, {data: [], hasMore: false});
};

const init = async () => {
  await getTopMv()
};
init();

watch(params, init, {deep: true});
watch(() => params.area, handleReset);
watch(
    () => result.current,
    (v: number) => {
      handleReset();
      _.assign(params, {offset: (v - 1) * params.limit})
    }
);
</script>

<template>
  <div class="toplist">
    <MyTags v-model:active="params.area" :list="CONSTANT.AREA"/>
    <div class="updateTime">更新时间：{{ dayjs(result.updateTime).format('YYYY-MM-DD') }}</div>
    <List v-if="result" v-model:current="result.current" :list="result.data"/>
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
