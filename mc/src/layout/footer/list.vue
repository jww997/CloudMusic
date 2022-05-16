<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ActionTypes } from '@/store/modules/listen/action-types';
import { SONG } from '@/apis/listen/typeResult';
import MyImage from '@/components/myImage/index.vue';
import Left from './left.vue';
const store = useStore();

const list = computed<SONG[]>(() => store.state.listen.audio.list);
const song = computed<SONG>(() => store.state.listen.audio.song);
const index = computed<number>(() =>
  list.value.findIndex(({ id }: SONG) => id === song.value.id)
);
const handleClick = (v: number) => store.dispatch(ActionTypes.SET_AUDIO_URL, v);
</script>

<template>
  <a-list :max-height="500">
    <template #header>播放列表</template>
    <a-list-item
      v-for="(item, i) in list"
      :key="item.id"
      @click="handleClick(item.id)"
    >
      <Left :song="item" :class="index === i ? 'active' : ''"></Left>
    </a-list-item>
  </a-list>
</template>

<style lang="less" scoped></style>
