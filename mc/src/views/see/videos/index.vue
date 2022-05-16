<script lang="ts">
export default {
  name: 'SeeMv',
};
</script>
<script lang="ts" setup>
import { ref, reactive, watch } from 'vue';
import _ from 'lodash';
import see from '@/apis/see';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
import Tags from './tags.vue';
import List from './list.vue';

const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS);
const params2 = reactive<TYPE.PARAMS2>(CONSTANT.PARAMS2);
const params3 = reactive<TYPE.PARAMS3>(CONSTANT.PARAMS3);
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT);
const result2 = reactive<TYPE.RESULT2>(CONSTANT.RESULT2);
const result3 = reactive<TYPE.RESULT3>(CONSTANT.RESULT3);

const isTagsExpanded = ref<boolean>(false);

const init = async () => {
  const res = await see.getVideoCategoryList(params);
  result.data = res.data;
  params2.id = res.data[0].id;
};
init();

const handleClick = async () => {
  const res = await see.getVideoGroup(params2);
  result2.datas = res.datas;
  result2.hasmore = res.hasmore;
  result2.msg = res.msg;
  result2.rcmdLimit = res.rcmdLimit;
};
const handleClick2 = async () => {
  isTagsExpanded.value = !isTagsExpanded.value;
  if (result3.data.length) return false;
  const res2 = await see.getVideoGroupList(params3);
  result3.data = res2.data;
};

watch(() => params2.id, handleClick);
</script>

<template>
  <div class="videos">
    <Tags :list="result.data" v-model:active="params2.id" />
    <a-button class="btn cursor-pointer" @click="handleClick2">
      <icon-up :class="`up ${isTagsExpanded && 'active'}`" />
    </a-button>
    <Tags
      class="more"
      :list="result3.data"
      v-model:active="params2.id"
      v-show="isTagsExpanded"
    />

    <List :list="result2.datas.map(({ data: v }) => v)" />
  </div>
</template>

<style lang="less" scoped>
.videos {
  position: relative;
  .btn {
    position: absolute;
    right: 30px;
    top: 30px;
    .up {
      transition: 0.3s;

      &.active {
        transform: rotate(180deg);
      }
    }
  }
  .more {
    background-color: var(--color-secondary);
  }
}
</style>
