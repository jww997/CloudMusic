<script lang="ts">
export default {name: 'ListenSonglistDetail',};
</script>
<script lang="ts" setup>
import {reactive} from 'vue';
import {useStore} from 'vuex';
import {useRoute} from 'vue-router';
import {MutationsTypes} from '@/store/modules/listen/mutations-types';
import _ from 'lodash';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
import listen from '@/apis/listen';
import Info from './info.vue';
import List from './list.vue';
import Comment from './comment.vue';

const store = useStore();
const route = useRoute();

const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS);
const params2 = reactive<TYPE.PARAMS2>(CONSTANT.PARAMS2);
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT);
const result2 = reactive<TYPE.RESULT2>(CONSTANT.RESULT2);

const getPlaylistDetail = async () => {
  const res = await listen.getPlaylistDetail(params);
  result.playlist = res.playlist;
  const {playlist} = res
  _.assign(result, {playlist})
  store.commit(MutationsTypes.AUDIO_LIST, res.playlist.tracks);
}

const getCommentPlaylist = async () => {
  const res = await listen.getCommentPlaylist(params2);
  _.assign(result2, {...res})
}

const init = async () => {
  const id = <string>route.query.id;
  _.assign(params, {id})
  _.assign(params2, {id})
  await getPlaylistDetail()
  await getCommentPlaylist()
};
init();
</script>

<template>
  <div>
    <Info :detail="result.playlist"/>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" :title="`歌曲${result.playlist.trackCount}`">
        <List :columns="CONSTANT.COLUMNS" :list="result.playlist.tracks"/>
      </a-tab-pane>
      <a-tab-pane key="2" :title="`评论${result.playlist.commentCount}`">
        <Comment :list="result2.hotComments" title="热门评论"/>
        <Comment :list="result2.comments" :title="`精彩评论(${result2.total})`"/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style lang="less" scoped></style>
