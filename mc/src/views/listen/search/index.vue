<script lang="ts">
export default {
  name: 'ListenSearch',
};
</script>
<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import _ from 'lodash';
import listen from '@/apis/listen';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';

const route = useRoute();
const router = useRouter();
const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS);
const params2 = reactive<TYPE.PARAMS2>(CONSTANT.PARAMS2);
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT);
const result2 = reactive<TYPE.RESULT2>(CONSTANT.RESULT2);

const activeIndex = ref<number>(0);
const tab = computed<TYPE.TAB>(() => CONSTANT.TAB[activeIndex.value]);
const len = ref<number>(0);

const handleSearch = async () => {
  console.log('tab = ', tab);
  console.log('tab.value.type = ', tab.value.type);
  // 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
  params.type = tab.value.type;
  const res = await listen.getCloudsearch(params);
  result.result = res.result;
  const key = _.keys(result.result).find((v) => /Count/.test(v)) ?? '';
  len.value = result.result[key] ?? 0;
  console.log('result = ', result);

  // const res2 = await listen.getSearch(params2);
  // result2.result = res2.result;
};

const init = async () => {
  const keywords = <string>route.query.keywords;
  const index = <string>route.query.index;
  params.keywords = keywords;
  activeIndex.value = _.toNumber(index);
  handleSearch();
};
init();

watch(
  () => activeIndex.value,
  (v) => {
    if (isNaN(v)) return false;
    const keywords = <string>route.query.keywords;
    router.push({ name: 'ListenSearch', query: { keywords, index: v } });
  }
);
router.beforeEach((to) => {
  const keywords = <string>to.query.keywords;
  const index = <string>to.query.index;
  params.keywords = keywords;
  activeIndex.value = _.toNumber(index);
  handleSearch();
});
</script>

<template>
  <div>
    <a-space class="padding" size="medium">
      <a-typography-title>搜</a-typography-title>
      <a-typography-title class="title">
        {{ params.keywords }}
      </a-typography-title>
    </a-space>
    <a-tabs v-model:active-key="activeIndex" lazy-load justify>
      <template #extra>
        <div class="padding">{{ `找到约${len}${tab.unit}${tab.title}` }}</div>
      </template>
      <a-tab-pane
        v-for="(item, index) in CONSTANT.TAB"
        :key="index"
        :title="item.title"
      >
        <div class="context">
          <a-empty v-if="len === 0" />
          <component
            :key="item.type"
            :is="item.is"
            v-bind="result.result"
            v-else
          />
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
