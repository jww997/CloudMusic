<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ActionTypes } from '@/store/modules/listen/action-types';
import Left from './left.vue';
import Middle from './middle.vue';
import Right from './right.vue';

const store = useStore();

const percent = computed<number>(() => store.getters.percent);
const currentTime = computed<number>(() => store.getters.currentTime);

const changePercentage = (v: number) =>
  store.dispatch(ActionTypes.SET_AUDIO_SCHEDULE, v);
</script>

<template>
  <div class="footer">
    <a-slider
      v-model="percent"
      :format-tooltip="() => currentTime"
      @change="changePercentage"
    ></a-slider>
    <Left></Left>
    <Middle></Middle>
    <Right></Right>
  </div>
</template>

<style lang="less" scoped>
.footer {
  height: 100%;
  padding: 0 15px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :deep(.arco-slider) {
    position: absolute;
    top: -6px;
    left: 0;
  }
  :deep(.arco-slider-btn::after) {
    display: none;
  }
}
</style>
