<script lang="ts" setup>
import { ref, reactive } from 'vue';
import watch from '@/apis/watch';
import Personalized from './personalized.vue';
import watch_R from '@/apis/watch/typeResult';

const result = ref<watch_R.RESULT_PERSONALIZED_MV>();

const mvid = '5436712';

const init = async () => {
  // result.value = await watch.getPersonalizedMv();

  // const r = await watch.getMvAll();
  // const r = await watch.getMvFirst();
  // const r = await watch.getMvExclusiveRcmd();
  // const r = await watch.getPersonalizedMv();
  // const r = await watch.getTopMv();
  // const r = await watch.getMvDetail({ mvid });
  // const r = await watch.getMvDetailInfo({ mvid });
  // const r = await watch.getVideoGroupList();
  // const r = await watch.getVideoCategoryList();
  // const r = await watch.getVideoGroup({ id: 11155 });
  // const r = await watch.getVideoTimelineAll();
  // const r = await watch.getVideoTimelineRecommend();
  const r = await watch.getRelatedAllvideo({
    id: '89ADDE33C0AAE8EC14B99F6750DB954D',
  });
  console.log(r);
};
init();
</script>

<template>
  <!-- <Personalized :list="result.result" v-if="result" /> -->
</template>

<style lang="less" scoped></style>
