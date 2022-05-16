<script lang="ts">
export default {
  name: 'SeeMvDetail',
};
</script>
<script lang="ts" setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { router } from '@/router';
import { MutationsTypes } from '@/store/modules/see/mutations-types';
import { ActionTypes } from '@/store/modules/see/action-types';
import _ from 'lodash';
import see from '@/apis/see';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
import Info from './info.vue';
import List from './list.vue';

const route = useRoute();
const store = useStore();
const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS);
const params2 = reactive<TYPE.PARAMS2>(CONSTANT.PARAMS2);
const params3 = reactive<TYPE.PARAMS3>(CONSTANT.PARAMS3);
const params4 = reactive<TYPE.PARAMS4>(CONSTANT.PARAMS4);
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT);
const result2 = reactive<TYPE.RESULT2>(CONSTANT.RESULT2);
const result3 = reactive<TYPE.RESULT3>(CONSTANT.RESULT3);
const result4 = reactive<TYPE.RESULT4>(CONSTANT.RESULT4);

const init = async () => {
  const id = <string>route.query.id;
  if (!id) router.back();
  params.mvid = id;
  params2.mvid = id;
  params3.id = id;
  params4.id = id;
  const res = await see.getMvDetail(params);
  result.data = res.data;

  const res2 = await see.getMvDetailInfo(params2);
  result2.commentCount = res2.commentCount;
  result2.liked = res2.liked;
  result2.likedCount = res2.likedCount;
  result2.shareCount = res2.shareCount;

  const res3 = await see.getRelatedAllvideo(params3);
  result3.data = res3.data;

  const res4 = await see.getMvUrl(params4);
  result4.data = res4.data;
  const mvRef = document.getElementById('mvRef');
  store.commit(MutationsTypes.VIDEO_REF, mvRef);
  store.dispatch(ActionTypes.SET_VIDEO_URL, res4.data.url);
};
init();
</script>

<template>
  <div class="mv-detail">
    <div class="left">
      <Info :data="result.data" v-bind="result2" />
    </div>
    <div class="right">
      <List :list="result3.data" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.mv-detail {
  display: flex;
  justify-content: space-between;
  .left {
    flex-grow: 1;
  }
  .right {
    flex-shrink: 0;
    width: 250px;
    padding-left: 30px;
  }
}
</style>
