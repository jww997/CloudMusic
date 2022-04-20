<script lang="ts" setup>
import { reactive } from 'vue';
import listen from '@/apis/listen/index';

const config = reactive<{
  realkeyword: string;
  showKeyword: string;
  hots: {
    first: string;
    iconType: number;
    second: number;
    third: null;
  }[];
}>({
  realkeyword: '',
  showKeyword: '',
  hots: [],
});
const handleInput = async (keywords: string) => {
  if (!keywords) return false;
  const res = await listen.getSearchSuggest({ keywords });
  // const res = await listen.getSearchMultimatch({ keywords });
};
const handleSearch = async (keywords: string) => {
  if (!keywords) keywords = config.realkeyword;
  const res = await listen.getSearch({ keywords });
  // const res = await listen.getCloudsearch({ keywords });
};
const init = async () => {
  const {
    data: { realkeyword, showKeyword },
  } = await listen.getSearchDefault();
  Object.assign(config, { realkeyword, showKeyword });

  const {
    result: { hots },
  } = await listen.getSearchHot();
  // const res = await listen.getSearchHotDetail();
  config.hots = hots;
};
init();
</script>

<template>
  <a-space class="search">
    <a-dropdown>
      <a-input-search
        :style="{ width: '320px' }"
        :placeholder="config.showKeyword"
        search-button
        @input="handleInput"
        @search="handleSearch"
      />
      <template #content>
        <a-space>
          <a-button
            v-for="item in config.hots"
            @click="handleSearch(item.first)"
            >{{ item.first }}</a-button
          >
        </a-space>
      </template>
    </a-dropdown>
  </a-space>
</template>

<style lang="less" scoped>
.search {
  flex: 1;
}
</style>
