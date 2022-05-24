<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ActionTypes } from '@/store/modules/listen/action-types';
import Left from './left.vue';
import Middle from './middle.vue';
import Right from './right.vue';
import { SONG } from '@/apis/listen/typeResult';

import listen from '@/apis/listen/index';

const store = useStore();

const percent = computed<number>(() => store.getters.percent);
const currentTime = computed<number>(() => store.getters.currentTime);
const song = computed<SONG>(() => store.state.listen.audio.song);

const changePercentage = (v: number) =>
  store.dispatch(ActionTypes.SET_AUDIO_SCHEDULE, v);

const init = async () => {
  const res = await listen.getListenTogetherStatus();
  console.log('res = ', res);
};
init();
</script>

<template>
  <div
    class="h-24 px-6 flex items-center relative z-50"
    @click="$router.push({ name: 'ListenSong', query: { id: song?.id } })"
  >
    <a-slider
      class="absolute -top-1.5 left-0"
      v-model="percent"
      :format-tooltip="() => currentTime"
      @change="changePercentage"
    ></a-slider>
    <Left :song="song"></Left>
    <Middle></Middle>
    <Right></Right>
  </div>
</template>

<style lang="less" scoped>
:deep(.arco-slider-btn::after) {
  display: none;
}
</style>
