<script lang="ts">
export default {
  name: 'ListenSong',
};
</script>
<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { ActionTypes } from '@/store/modules/listen/action-types';
import _ from 'lodash';
import listen from '@/apis/listen';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
import Disc from './disc.vue';
import Lyric from '@/layout/footer/lyric.vue';

const route = useRoute();
const store = useStore();

const song = computed(() => store.state.listen.audio.song);
if (song !== null) {
  const id = <string>route.query.id;
  //   store.dispatch(ActionTypes.SET_AUDIO_DETAIL, id);
  //   store.dispatch(ActionTypes.SET_AUDIO_URL, id);
  //   store.dispatch(ActionTypes.SET_AUDIO_LYRIC, id);
}
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <Disc />
    <Lyric class="w-1/2 h-100 ml-20" v-if="song" />
  </div>
</template>

<style lang="less" scoped>
.song {
  display: flex;
  justify-content: center;
  align-items: center;
  .right {
    width: 50%;
    margin-left: 150px;
  }
}
</style>
