<script lang="ts">
export default {
  name: 'ListenSonglist',
};
</script>
<script lang="ts" setup>
import { reactive, watch } from 'vue';
import listen from '@/apis/listen';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
import Tags from './tags.vue';
import List from './list.vue';

const params3 = reactive<TYPE.PARAMS3>(CONSTANT.PARAMS3);

const result = reactive<TYPE.RESULT>(CONSTANT.RESULT);
const result2 = reactive<TYPE.RESULT2>(CONSTANT.RESULT2);
const result3 = reactive<TYPE.RESULT3>(CONSTANT.RESULT3);

const init = async () => {
  const res = await listen.getPlaylistHot();
  result.tags = res.tags;

  const res2 = await listen.getPlaylistCatlist();
  result2.all = res2.all;
  result2.categories = res2.categories;
  result2.sub = res2.sub;
  handleClick();

  // await listen.getPlaylistHighqualityTags();
  // await listen.getTopPlaylistHighquality();
  // await listen.getRelatedPlaylist({ id: 740666719 });
  // await listen.getPlaylistDetailDynamic({ id: 740666719 });
  // await listen.getPlaylistUpdatePlaycount({ id: 740666719 });
  // await listen.getPlaylistCreate({ name: '测试歌单' });
  // await listen.getPlaylistDelete({ id: 7382946153 });
  // await listen.getPlaylistSubscribe({ id: 4991155974, t: 1 });
  // await listen.getPlaylistSubscribers({ id: 4991155974 });
  // await listen.getPlaylistTracks({ op: 'del', pid: 7383267040, tracks: 115131 });
  // await listen.getPlaylistTrackAdd({ pid: 7383317701, ids: 186041 });
  // await listen.getPlaylistTrackDelete({ pid: 7383317701, ids: 186041 });
  // await listen.getSimiPlaylist({ id: 2829816518 });
  // await listen.getRecommendResource();
};
init();

const handleClick = async () => {
  const res3 = await listen.getTopPlaylist(params3);
  result3.playlists = res3.playlists;
};

watch(params3, handleClick, { deep: true });
</script>

<template>
  <div class="songlist">
    <Tags :list="result.tags" v-model:active="params3.cat" />
    <Tags :list="result2.sub" v-model:active="params3.cat" />
    <List :list="result3.playlists" />
  </div>
</template>

<style lang="less" scoped></style>
