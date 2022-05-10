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

const query = computed(() => router.currentRoute.value.query);

const song = computed(() => store.state.listen.audio.song);

if (song !== null) {
  const id = toNumber(computed(() => query.value.id).value);
  store.dispatch(ActionTypes.SET_AUDIO_DETAIL, id);
  store.dispatch(ActionTypes.SET_AUDIO_URL, id);
  store.dispatch(ActionTypes.SET_AUDIO_LYRIC, id);
}
</script>

<template>
  <div class="song">
    <Disc />
    <Lyric class="right" v-if="song" />
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
