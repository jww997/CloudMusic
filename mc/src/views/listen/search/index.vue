<script lang="ts">
export default {
  name: 'ListenSearch',
};
</script>
<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import _, { toString } from 'lodash';
import * as C from './_constant';
import listen from '@/apis/listen/index';
import { INIT } from './_type';

const router = useRouter();
const store = useStore();

const query = computed(() => router.currentRoute.value.query);
const keywords = toString(computed(() => query.value.keywords).value);
const title = computed(() => C.TABS[activeIndex.value].title);
const unit = computed(() => C.TABS[activeIndex.value].unit);
const activeIndex = ref<number>(0);
const len = ref<number>(0);

const init: INIT = async (params, callback) => {
  // 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
  const result1 = await listen.getCloudsearch(_.assign({ keywords }, params));
  const { result } = result1;
  const key = _.keys(result).find((v) => /Count/.test(v));
  len.value = key ? result[key] : 0;
  // const result2 = await listen.getSearch({ keywords });
  callback && callback(result1);
};
</script>

<template>
  <div>
    <a-space class="padding" size="medium">
      <a-typography-title>搜</a-typography-title>
      <a-typography-title class="title">{{ keywords }}</a-typography-title>
    </a-space>
    <a-tabs v-model:active-key="activeIndex" lazy-load justify>
      <template #extra>
        <div class="padding">{{ `找到约${len}${unit}${title}` }}</div>
      </template>
      <a-tab-pane
        v-for="({ title, type, is }, index) in C.TABS"
        :key="index"
        :title="title"
      >
        <div class="context">
          <!-- component标签创建动态组件，is属性指向谁，就显示哪个组件 -->
          <component :key="index" :is="is" :init="init" :type="type" />
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style lang="less" scoped>
.title {
  color: rgb(var(--primary-6));
}
.padding {
  padding: 0 15px;
}
</style>
