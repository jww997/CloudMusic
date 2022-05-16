<script lang="ts">
export default {
  name: 'ListenSonglistDetail',
};
</script>
<script lang="ts" setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { MutationsTypes } from '@/store/modules/listen/mutations-types';
import _ from 'lodash';
import listen from '@/apis/listen';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
import Info from './info.vue';
import List from './list.vue';
import Comment from './comment.vue';

const route = useRoute();
const store = useStore();
const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS);
const params2 = reactive<TYPE.PARAMS2>(CONSTANT.PARAMS2);
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT);
const result2 = reactive<TYPE.RESULT2>(CONSTANT.RESULT2);

const init = async () => {
  const id = <string>route.query.id;
  params.id = id;
  params2.id = id;
  const res = await listen.getPlaylistDetail(params);
  result.playlist = res.playlist;
  store.commit(MutationsTypes.AUDIO_LIST, res.playlist.tracks);

  const res2 = await listen.getCommentPlaylist(params2);
  result2.comments = res2.comments;
};
init();
</script>

<template>
  <div>
    <Info :detail="result.playlist" />
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" :title="`歌曲${result.playlist.trackCount}`">
        <List :list="result.playlist.tracks" :columns="CONSTANT.COLUMNS" />
      </a-tab-pane>
      <a-tab-pane key="2" :title="`评论${result2.total}`">
        <Comment :list="result2.comments" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style lang="less" scoped></style>
