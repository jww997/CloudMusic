<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import {
  IconRedo,
  IconPauseCircleFill,
  IconPlayCircleFill,
  IconSkipPreviousFill,
  IconSkipNextFill,
  IconSound,
} from '@arco-design/web-vue/es/icon';
import { ActionTypes } from '@/store/modules/listen/action-types';
import { MutationsTypes } from '@/store/modules/listen/mutations-types';

const store = useStore();

const orderName: string[] = ['列表循环', '单曲循环', '随机循环'];
const order = computed<number>(() => store.state.listen.audio.order);
const state = computed<boolean>(() => store.state.listen.audio.state);
const volume = computed<number>(() => store.state.listen.audio.volume);
const handleOrder = (v: number) => store.commit(MutationsTypes.AUDIO_ORDER, v);
const handleState = (v: boolean) =>
  store.dispatch(ActionTypes.SET_AUDIO_STATE, v);
const handleToggle = (v: -1 | 1) =>
  store.dispatch(ActionTypes.SET_AUDIO_TOGGLE, v);
const handleVolume = (v: number) =>
  store.commit(MutationsTypes.AUDIO_VOLUME, v / 100);
</script>

<template>
  <a-space class="middle" :align="'center'">
    <a-popover>
      <icon-redo
        class="txt-pointer txt-hover txt-noselect"
        size="20"
        @click="handleOrder(order === 3 ? 1 : ++order)"
      />
      <template #content>
        <p>{{ orderName[order - 1] }}</p>
      </template>
    </a-popover>
    <icon-skip-previous-fill
      class="txt-pointer txt-hover txt-noselect"
      size="30"
      @click="handleToggle(-1)"
    />
    <icon-pause-circle-fill
      class="txt-pointer txt-hover txt-noselect"
      size="40"
      @click="handleState(false)"
      v-if="state"
    />
    <icon-play-circle-fill
      class="txt-pointer txt-hover txt-noselect"
      size="40"
      @click="handleState(true)"
      v-else
    />
    <icon-skip-next-fill
      class="txt-pointer txt-hover txt-noselect"
      size="30"
      @click="handleToggle(1)"
    />
    <a-popover :trigger="'click'">
      <icon-sound class="txt-pointer txt-hover txt-noselect" size="20" />
      <template #content>
        <a-slider
          class="center"
          :model-value="volume * 100"
          direction="vertical"
          @change="handleVolume"
        />
      </template>
    </a-popover>
  </a-space>
</template>

<style lang="less" scoped>
.middle {
  flex: 1;
  display: flex;
  justify-content: center;
  :deep(.arco-space-item) {
    display: flex;
    align-items: center;
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
