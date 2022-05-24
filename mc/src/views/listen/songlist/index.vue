<script lang="ts">
export default {name: 'ListenSonglist',};
</script>
<script lang="ts" setup>
import {reactive, watch} from 'vue';
import _ from 'lodash';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
import listen from '@/apis/listen';
import MyTags from '@/components/myTags/index.vue';
import List from './list.vue';

const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS);
const params2 = reactive<TYPE.PARAMS2>(CONSTANT.PARAMS2);
const params3 = reactive<TYPE.PARAMS3>(CONSTANT.PARAMS3);
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT);
const result2 = reactive<TYPE.RESULT2>(CONSTANT.RESULT2);
const result3 = reactive<TYPE.RESULT3>(CONSTANT.RESULT3);


// 遍历字段
const mapTags = (arr: any) => arr.map((v: any) => _.assign(v, {title: v.name, value: v.name}))

const getPlaylistHot = async () => {
  const res = await listen.getPlaylistHot(params);
  const {tags} = res
  _.assign(result, {tags: mapTags(tags)})
}

const getPlaylistCatlist = async () => {
  const res = await listen.getPlaylistCatlist(params2);
  const {all, categories, sub} = res
  _.assign(result2, {all, categories, sub: mapTags(sub)})
}

const getTopPlaylist = async () => {
  const res = await listen.getTopPlaylist(params3);
  const {playlists} = res
  _.assign(result3, {playlists})
};

const init = async () => {

  await getPlaylistHot()
  await getPlaylistCatlist()
  await getTopPlaylist();

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

watch(params3, getTopPlaylist, {deep: true});
</script>

<template>
  <div>
    <MyTags v-model:active="params3.cat" :list="result.tags"/>
    <MyTags v-model:active="params3.cat" :list="result2.sub"/>
    <List :list="result3.playlists"/>
  </div>
</template>

<style lang="less" scoped></style>
