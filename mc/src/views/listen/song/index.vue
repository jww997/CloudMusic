<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Lyric from '@/layout/footer/lyric.vue';
import Disc from './disc.vue';

const store = useStore();

const song = computed(() => store.state.listen.audio.song);
</script>

<template>
  <div class="song">
    <Disc />
    <div class="right">
      <Lyric />
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
