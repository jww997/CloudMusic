<script lang="ts">
export default {
  name: 'ListenSinger',
};
</script>
<script lang="ts" setup>
import { reactive, watch } from 'vue';
import _ from 'lodash';
import listen from '@/apis/listen';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
import Tags from './tags.vue';
import List from './list.vue';

const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS);
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT);

const init = async () => {
  const res = await listen.getArtistList(params);
  result.artists = res.artists;
  result.more = res.more;
};
init();

const handleReset = () => {
  params.offset = 0;
  _.assign(result, { artists: [], more: false });
};

watch(params, init);
watch(() => params.area, handleReset);
watch(() => params.type, handleReset);
watch(() => params.initial, handleReset);
</script>

<template>
  <div v-if="result">
    <Tags
      :list="CONSTANT.LANGUANGE"
      v-model:active="params.area"
      title="语种"
    />
    <Tags
      :list="CONSTANT.CLASSIFICATION"
      v-model:active="params.type"
      title="分类"
    />
    <Tags
      :list="CONSTANT.FILTER"
      v-model:active="params.initial"
      title="筛选"
    />
    <List :list="result.artists" />
  </div>
</template>

<style lang="less" scoped>
.pad {
  width: 100%;
  padding-top: 15px;
  padding-bottom: 50px;
  position: relative;
}
</style>
