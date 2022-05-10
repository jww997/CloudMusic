<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useStore } from 'vuex';
import { ActionTypes } from '@/store/modules/listen/action-types';
import { MutationsTypes } from '@/store/modules/listen/mutations-types';
import { SONG } from '@/apis/listen/typeResult';
import { LYRIC } from '@/store/modules/listen/state';

const store = useStore();

const lyric = computed<LYRIC[]>(() => store.state.listen.audio.lyric);
const lyrict = computed<LYRIC[]>(() => store.state.listen.audio.lyrict);
const song = computed<SONG>(() => store.state.listen.audio.song);
const lyricTLen = computed<number>(() => lyrict.value.length);
const findTLyric = (item: LYRIC) =>
  lyrict.value.find(({ time }) => time === item.time);
const lyricIndex = computed<number>(() => store.getters.lyricIndex);
const marginTop = computed<string>(
  () =>
    `-${
      (lyricIndex.value - 1.2) * (34 * (lyricTLen.value ? 2 : 1) + 26) + 48
    }px`
);

const handleClick = (v: number) =>
  (store.state.listen.audioRef.currentTime = v);
const lyricRef = ref();
const toTop = () => (lyricRef.value.scrollTop = 0);
const getLyric = () => {
  toTop();
  store.dispatch(ActionTypes.SET_AUDIO_LYRIC, song.value.id);
};
watch(() => lyricIndex.value, toTop);
watch(
  () => song.value,
  () => {
    toTop();
    song.value === null
      ? store.commit(MutationsTypes.AUDIO_LYRIC, [])
      : getLyric();
  },
  {
    deep: true,
  }
);
onMounted(() => getLyric());
</script>

<template>
  <div
    class="lyric"
    :class="{
      'mask-top': 3 <= lyricIndex && lyricIndex <= 6,
      'mask-bot':
        lyric.length - 1 - 3 <= lyricIndex && lyricIndex <= lyric.length - 1,
      'mask': 6 < lyricIndex && lyricIndex < lyric.length - 1 - 3,
    }"
    ref="lyricRef"
  >
    <a-list
      class="list"
      :style="{ marginTop }"
      :bordered="false"
      :split="false"
    >
      <template #header>歌词</template>
      <a-list-item
        v-for="(item, index) in lyric"
        :key="item.time"
        @click="handleClick(item.time)"
      >
        <div class="list-item txt-pointer txt-noselect">
          <!-- {{ currentTime / (lyric[index + 1].time ?? duration - item.time) }} -->
          <!-- <div>{{ currentTime - item.time }}</div> -->
          <!-- {{ lyric[index + 1] ? lyric[index + 1].time : duration }} -->
          <div
            :class="{
              active: lyricIndex === index,
              big: lyricIndex === index,
              hidden: !item.text,
              omit: lyricIndex > index,
            }"
          >
            {{ item.text ? item.text : 0 }}
          </div>
          <!-- {{lyricTLen}} -->
          <div
            class="translate"
            :class="{
              active: lyricIndex === index,
              hidden: !findTLyric(item),
              omit: lyricIndex > index,
            }"
            v-if="lyricTLen"
          >
            {{ findTLyric(item) ? findTLyric(item).text : 0 }}
          </div>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<style lang="less" scoped>
@mask-a: rgba(255, 255, 255, 0);
@mask-b: #fff;
@mask-l: 10%;
.lyric {
  width: 100%;
  height: 500px;
  overflow-y: auto;
  text-align: left;
  // touch-action: pan-y;
  // -webkit-overflow-scrolling: touch;
  &.mask-top {
    mask-image: linear-gradient(@mask-a, @mask-b @mask-l);
    -webkit-mask-image: linear-gradient(@mask-a, @mask-b @mask-l);
  }
  &.mask-bot {
    mask-image: linear-gradient(@mask-b 100%-@mask-l);
    -webkit-mask-image: linear-gradient(@mask-a);
  }
  &.mask {
    mask-image: linear-gradient(
      @mask-a,
      @mask-b @mask-l,
      @mask-b 100%-@mask-l,
      @mask-a
    );
    -webkit-mask-image: linear-gradient(
      @mask-a,
      @mask-b @mask-l,
      @mask-b 100%-@mask-l,
      @mask-a
    );
  }
  .list {
    .list-item {
      line-height: 34px;
      font-size: 20px;
      .translate {
        font-size: 16px;
      }
      > .hidden {
        visibility: hidden;
      }
      > .omit {
        .text-row(1);
      }
      > .active {
        color: rgb(var(--primary-6));
        &.big {
          margin-left: -5px;
          font-size: 30px;
          font-weight: bold;
        }
      }
    }
  }
}
:deep(.arco-list-item-main) {
  width: 100%;
}

:deep(.arco-list-item),
.lyric,
.list {
  transition: 1s;
}
.list .list-item,
.list .list-item .big {
  transition: ease-in-out 0.3s;
}
</style>
