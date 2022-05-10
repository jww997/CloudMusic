<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { SONG } from '@/apis/listen/typeResult';

const store = useStore();

const song = computed<SONG>(() => store.state.listen.audio.song);
</script>

<template>
  <div
    class="left"
    @click="$router.push({ name: 'ListenSong', query: { id: song?.id } })"
  >
    <a-image
      class="cover txt-pointer"
      :width="70"
      :height="70"
      :preview="false"
      :src="song?.al.picUrl"
      :alt="song?.al.name"
    />
    <a-tooltip :content="song?.name" position="tl">
      <div class="name txt-pointer">{{ song?.name }}</div>
    </a-tooltip>
  </div>
</template>

<style lang="less" scoped>
.left {
  flex: 1;
  display: flex;
  align-items: center;
  .cover {
    flex-shrink: 0;
    border-radius: 5px;
    margin-right: 8px;
  }
  .name {
    flex-grow: 1;
    width: 1px;
    text-align: left;
    .text-row(1);
  }
}
</style>
