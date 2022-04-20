<script lang="ts" setup>
import { ref } from 'vue';
import listen from '@/apis/listen';
import listen_R from '@/apis/listen/typeResult';
import List from './list.vue';

const results1 = ref<listen_R.RESULT_PLAYLIST_CATLIST>();
const results2 = ref<listen_R.RESULT_TOP_PLAYLIST>();

const init = async () => {
  results1.value = await listen.getPlaylistCatlist();
  // await listen.getPlaylistHot();
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

const responsive = { xs: 20, sm: 16, md: 12, lg: 8, xl: 6, xxl: 4 };
const handleClick = async (cat: string) =>
  (results2.value = await listen.getTopPlaylist({ cat }));
</script>

<template>
  <div v-if="results1">
    <a-button v-for="item in results1?.sub" @click="handleClick(item.name)">
      {{ item.name }}
    </a-button>
  </div>
  <List :list="results2.playlists" v-if="results2" />
</template>

<style lang="less" scoped></style>
