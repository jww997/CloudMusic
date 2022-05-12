<script lang="ts">
export default {
  name: 'ListenToplist',
};
</script>
<script lang="ts" setup>
import { reactive } from 'vue';
import listen from '@/apis/listen';
import * as TYPE from './_type';
import List from './list.vue';

const result = reactive<TYPE.RESULT>({
  artistToplist: {
    coverUrl: '',
    name: '',
    position: 0,
    upateFrequency: '',
    updateFrequency: '',
  },
  list: [],
});
const result2 = reactive<TYPE.RESULT2>({
  artistToplist: {
    artists: [],
    coverUrl: '',
    name: '',
    position: 0,
    upateFrequency: '',
    updateFrequency: '',
  },
  list: [],
  rewardToplist: {
    coverUrl: '',
    name: '',
    position: 0,
    songs: [],
  },
});

const init = async () => {
  const res = await listen.getToplist();
  result.artistToplist = res.artistToplist;
  result.list = res.list;

  const res2 = await listen.getToplistDetail();
  result2.list = res2.list;
};
init();
</script>

<template>
  <!-- <div>{{ result.artistToplist }}</div> -->
  <List :list="result.list" />
</template>

<style lang="less" scoped></style>
