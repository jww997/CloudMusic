<script lang="ts">
export default {
  name: 'ListenSonglistDetail',
};
</script>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { toNumber } from 'lodash';
import Info from './info.vue';
import List from './list.vue';
import Comment from './comment.vue';
import listen from '@/apis/listen/index';
import listen_R from '@/apis/listen/typeResult';
import { MutationsTypes } from '@/store/modules/listen/mutations-types';
import * as C from './_constant';

const router = useRouter();
const store = useStore();

const query = computed(() => router.currentRoute.value.query);

const id = toNumber(computed(() => query.value.id).value);

const loading = ref<boolean>(false);
const results1 = ref<listen_R.RESULT_PLAYLIST_DETAIL>();
const results2 = ref<listen_R.RESULT_COMMENT_PLAYLIST>();

const len1 = ref<number>(0);
const len2 = ref<number>(0);

const init = async () => {
  loading.value = true;
  results1.value = await listen.getPlaylistDetail({ id });
  const { tracks } = results1.value.playlist;
  len1.value = tracks.length;
  store.commit(MutationsTypes.AUDIO_LIST, tracks);
  results2.value = await listen.getCommentPlaylist({ id });
  const { comments } = results2.value;
  len2.value = comments.length;
  loading.value = false;
};
init();
</script>

<template>
  <div>
    <Info :detail="results1.playlist" v-if="results1" />
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" :title="`歌曲${len1}`">
        <List
          :list="results1.playlist.tracks"
          :columns="C.COLUMNS"
          v-if="results1"
        />
      </a-tab-pane>
      <a-tab-pane key="2" :title="`评论${len2}`">
        <Comment :list="results2.comments" v-if="results2" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style lang="less" scoped></style>
