<script lang="ts" setup>
import { reactive } from 'vue';
import _ from 'lodash'
import listen from '@/apis/listen/index';
import { router } from '@/router';

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
const handleInput = async (keywords: string = config.realkeyword) => {
  config.realkeyword = keywords;
};
const handleSearch = async () => {
  const keywords: string = config.realkeyword;
  router.push({ name: 'ListenSearch', query: { keywords } });
};
const handleClick = (v: string) => {
  config.realkeyword = v;
  handleSearch();
};
const init = async () => {
  const {
    data: { realkeyword, showKeyword },
  } = await listen.getSearchDefault();
  _.assign(config, { realkeyword, showKeyword });

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
        @press-enter="handleSearch"
      />
      <template #content>
        <a-space>
          <a-button
            v-for="item in config.hots"
            @click="() => handleClick(item.first)"
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
