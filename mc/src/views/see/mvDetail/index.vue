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
import see from '@/apis/see';
import * as TYPE from './_type';
import Info from './info.vue';
import List from './list.vue';

const route = useRoute();
const store = useStore();

const result = reactive<TYPE.RESULT>({
  bufferPic: '',
  bufferPicFS: '',
  data: {},
  loadingPic: '',
  loadingPicFS: '',
  mp: {
    cp: 0,
    dl: 0,
    fee: 0,
    id: 0,
    msg: null,
    mvFee: 0,
    normal: false,
    payed: 0,
    pl: 0,
    sid: 0,
    st: 0,
    unauthorized: false,
  },
  subed: false,
});

const result2 = reactive<TYPE.RESULT2>({
  commentCount: 0,
  liked: false,
  likedCount: 0,
  shareCount: 0,
});

const result3 = reactive<TYPE.RESULT3>({
  data: [],
});

const init = async () => {
  const id = <string>route.query.id;
  if (!id) router.back();
  const res = await see.getMvDetail({ mvid: id });
  result.data = res.data;

  const res2 = await see.getMvDetailInfo({ mvid: id });
  result2.commentCount = res2.commentCount;
  result2.liked = res2.liked;
  result2.likedCount = res2.likedCount;
  result2.shareCount = res2.shareCount;

  const res3 = await see.getRelatedAllvideo({ id });
  result3.data = res3.data;

  const res4 = await see.getMvUrl({ id });
  const mvRef = document.getElementById('mvRef') as HTMLVideoElement;
  store.commit(MutationsTypes.VIDEO_REF, mvRef);
  store.dispatch(ActionTypes.SET_VIDEO_URL, res4.data.url);
};
init();
</script>

<template>
  <div class="mv">
    <div class="left">
      <video id="mvRef" controls>您的浏览器不支持video标签。</video>
      <Info :data="result.data" v-bind="result2" />
    </div>
    <div class="right">
      <List :list="result3.data" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.mv {
  display: flex;
  justify-content: space-between;
  .left {
    flex-grow: 1;
    #mvRef {
      max-width: 90%;
      height: 450px;
      border-radius: 10px;
      box-shadow: 0 0 30px #aaa;
    }
  }
  .right {
    flex-shrink: 0;
    width: 250px;
    padding-left: 30px;
  }
}
</style>
