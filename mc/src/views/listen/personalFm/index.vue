<script lang="ts">
export default {
  name: 'ListenPersonalFm',
};
</script>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import listen from '@/apis/listen/index';
import listen_R from '@/apis/listen/typeResult';
import { ActionTypes } from '@/store/modules/listen/action-types';
import { MutationsTypes } from '@/store/modules/listen/mutations-types';

const store = useStore();
const audioRef = computed<HTMLAudioElement>(() => store.state.listen.audioRef);
const list = computed<listen_R.SONG[]>(() => store.state.listen.audio.list);
const song = computed<listen_R.SONG>(() => store.state.listen.audio.song);
const activeIndex = computed<number>(() =>
  list.value.findIndex(({ id }) => id === song.value.id)
);

const result1 = ref<listen_R.RESULT_PERSONAL_FM>();

const init = async () => {
  const timestamp = new Date().getTime();
  const res = await listen.getPersonalFm({ timestamp });
  result1.value = res;
  store.commit(MutationsTypes.AUDIO_LIST, res.data);
  store.dispatch(ActionTypes.SET_AUDIO_URL, res.data[0].id);
  audioRef.value.addEventListener('ended', () => {
    if (activeIndex.value === 2) init();
  });
};
init();
</script>

<template>
  <div>123</div>
</template>

<style lang="less" scoped></style>
