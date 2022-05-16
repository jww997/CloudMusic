<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { SONG } from '@/apis/listen/typeResult';
import MyImage from '@/components/myImage/index.vue';

const store = useStore();

const song = computed<SONG>(() => store.state.listen.audio.song);
</script>

<template>
  <div
    class="flex-1 flex items-center"
    @click="$router.push({ name: 'ListenSong', query: { id: song?.id } })"
  >
    <MyImage
      class="flex-shrink-0 rounded-lg shadow-lg cursor-pointer"
      :width="70"
      :height="70"
      :src="song?.al.picUrl"
      :alt="song?.al.name"
    />
    <a-tooltip :content="song?.name" position="tl">
      <div class="flex-grow cursor-pointer mx-4 w-4 truncate">
        {{ song?.name }}
      </div>
    </a-tooltip>
  </div>
</template>

<style lang="less" scoped></style>
