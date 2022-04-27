<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { toNumber } from 'lodash';
import Lyric from '@/layout/footer/lyric.vue';
import Disc from './disc.vue';
import { ActionTypes } from '@/store/modules/listen/action-types';

const router = useRouter();
const store = useStore();

const song = computed(() => store.state.listen.audio.song);

const id = toNumber(computed(() => router.currentRoute.value.query.id).value);
if (song.value.id !== id) {
  store.dispatch(ActionTypes.SET_AUDIO_DETAIL, id);
  store.dispatch(ActionTypes.SET_AUDIO_URL, id);
  store.dispatch(ActionTypes.SET_AUDIO_LYRIC, id);
}
</script>

<template>
  <div class="song">
    <Disc />
    <div class="right">
      <Lyric v-if="song" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.song {
  display: flex;
  justify-content: center;
  align-items: center;
  .right {
    width: 50%;
    margin-left: 60px;
  }
}
</style>
