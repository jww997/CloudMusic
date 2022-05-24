<script lang="ts">
export default {name: 'SeeVideos',};
</script>
<script lang="ts" setup>
import {ref, reactive, watch} from 'vue';
import {IconUp} from "@arco-design/web-vue/es/icon";
import _ from 'lodash';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
import see from '@/apis/see';
import MyTags from '@/components/myTags/index.vue';
import List from './list.vue';

const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS);
const params2 = reactive<TYPE.PARAMS2>(CONSTANT.PARAMS2);
const params3 = reactive<TYPE.PARAMS3>(CONSTANT.PARAMS3);
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT);
const result2 = reactive<TYPE.RESULT2>(CONSTANT.RESULT2);
const result3 = reactive<TYPE.RESULT3>(CONSTANT.RESULT3);

const isTagsExpanded = ref<boolean>(false);

// 遍历字段
const mapTags = (arr: any) => arr.map((v: any) => _.assign(v, {title: v.name, value: v.name}))

const getVideoCategoryList = async () => {
  const res = await see.getVideoCategoryList(params);
  const {data} = res
  _.assign(result, {data: mapTags(data)})
  _.assign(params2, {id: data[0].id})
}

const getVideoGroup = async () => {
  const res = await see.getVideoGroup(params2);
  console.log(res)
  const {datas, hasmore, msg, rcmdLimit} = res
  _.assign(result2, {datas, hasmore, msg, rcmdLimit})
}

const getVideoGroupList = async () => {
  isTagsExpanded.value = !isTagsExpanded.value;
  if (result3.data.length) return false;
  const res = await see.getVideoGroupList(params3);
  const {data} = res
  _.assign(result3, {data: mapTags(data)})
};

const init = async () => {
  await getVideoCategoryList()
  await getVideoGroup()
};
init();

watch(() => params2.id, getVideoGroup);
</script>

<template>
  <div class="videos">
    <MyTags :list="result.data" v-model:active="params2.id"/>
    <a-button class="btn cursor-pointer" @click="getVideoGroupList">
      <icon-up :class="`up ${isTagsExpanded && 'active'}`"/>
    </a-button>
    <MyTags class="more" :list="result3.data" v-model:active="params2.id" v-show="isTagsExpanded"/>
    <List :list="result2.datas"/>
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
