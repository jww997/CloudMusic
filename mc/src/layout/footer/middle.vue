<script lang="ts" setup>
import {computed} from "vue"
import {useStore} from "vuex"
import {ActionTypes} from "@/store/modules/listen/action-types"
import {MutationsTypes} from "@/store/modules/listen/mutations-types"

const store = useStore()

const orderName: string[] = ["列表循环", "单曲循环", "随机循环"]
const order = computed<number>(() => store.state.listen.audio.order)
const state = computed<boolean>(() => store.state.listen.audio.state)
const volume = computed<number>(() => store.state.listen.audio.volume)
const handleOrder = (v: number) => store.commit(MutationsTypes.AUDIO_ORDER, v)
const handleState = (v: boolean) =>
    store.dispatch(ActionTypes.SET_AUDIO_STATE, v)
const handleToggle = (v: -1 | 1) =>
    store.dispatch(ActionTypes.SET_AUDIO_TOGGLE, v)
const handleVolume = (v: number) =>
    store.commit(MutationsTypes.AUDIO_VOLUME, v / 100)
</script>

<template>
  <a-space class="flex-1 flex justify-center">
    <a-popover>
      <icon-redo
          class="cursor-pointer txt-hover txt-noselect"
          size="20"
          @click.stop="handleOrder(order === 3 ? 1 : ++order)"
      />
      <template #content>
        <p>{{ orderName[order - 1] }}</p>
      </template>
    </a-popover>
    <icon-skip-previous-fill
        class="cursor-pointer txt-hover txt-noselect"
        size="30"
        @click.stop="handleToggle(-1)"
    />
    <icon-pause-circle-fill
        class="cursor-pointer txt-hover txt-noselect"
        size="40"
        @click.stop="handleState(false)"
        v-if="state"
    />
    <icon-play-circle-fill
        class="cursor-pointer txt-hover txt-noselect"
        size="40"
        @click.stop="handleState(true)"
        v-else
    />
    <icon-skip-next-fill
        class="cursor-pointer txt-hover txt-noselect"
        size="30"
        @click.stop="handleToggle(1)"
    />
    <a-popover :trigger="'hover'">
      <icon-mute
          size="20"
          class="cursor-pointer txt-hover txt-noselect"
          v-if="volume === 0"
      />
      <icon-sound
          class="cursor-pointer txt-hover txt-noselect"
          size="20"
          v-else
      />
      <template #content>
        <a-slider
            :model-value="volume * 100"
            direction="vertical"
            @change="handleVolume"
        />
      </template>
    </a-popover>
  </a-space>
</template>

<style lang="less" scoped>
:deep(.arco-slider-track.arco-slider-track-vertical) {
  margin: 0 auto;
}
</style>
