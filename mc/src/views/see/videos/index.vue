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
import Tags from './tags.vue';
import List from './list.vue';

const result = reactive<TYPE.RESULT>({ data: [] });

const result2 = reactive<TYPE.RESULT2>({ data: [] });

const params3 = reactive<TYPE.PARAMS3>({ id: 0, offset: 0 });

const result3 = reactive<TYPE.RESULT3>({
  datas: [],
  hasmore: false,
  msg: '',
  rcmdLimit: 0,
});

const isTagsExpanded = ref<boolean>(false);

const init = async () => {
  const res = await see.getVideoCategoryList();
  result.data = res.data;
  params3.id = res.data[0].id;
};
init();

const handleClick = async () => {
  const res = await see.getVideoGroup({ id: params3.id });
  result3.datas = res.datas;
  result3.hasmore = res.hasmore;
  result3.msg = res.msg;
  result3.rcmdLimit = res.rcmdLimit;
};
watch(() => params3.id, handleClick);

const handleClick2 = async () => {
  isTagsExpanded.value = !isTagsExpanded.value;
  if (result2.data.length) return false;
  const res2 = await see.getVideoGroupList();
  result2.data = res2.data;
};
</script>

<template>
  <div class="videos">
    <Tags :list="result.data" v-model:active="params3.id" />
    <a-button class="btn txt-pointer" @click="handleClick2">
      <icon-up :class="`up ${isTagsExpanded && 'active'}`" />
    </a-button>
    <Tags
      class="more"
      :list="result2.data"
      v-model:active="params3.id"
      v-show="isTagsExpanded"
    />

    <List :list="result3.datas" />
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
