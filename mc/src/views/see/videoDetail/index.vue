<script lang="ts">
export default {
  name: 'SeeVideoDetail',
};
</script>
<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import see from '@/apis/see';
import * as TYPE from './_type';
import { MutationsTypes } from '@/store/modules/see/mutations-types';
import { ActionTypes } from '@/store/modules/see/action-types';
import Info from './info.vue';
import List from './list.vue';

const route = useRoute();
const store = useStore();

const result = reactive<TYPE.RESULT>({
  data: {},
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
  const res = await see.getVideoDetail({ id });
  console.log('res = ', res);
  result.data = res.data;

  const res2 = await see.getVideoDetailInfo({ vid: id });
  result2.commentCount = res2.commentCount;
  result2.liked = res2.liked;
  result2.likedCount = res2.likedCount;
  result2.shareCount = res2.shareCount;

  const res3 = await see.getRelatedAllvideo({ id });
  result3.data = res3.data;

  const res4 = await see.getVideoUrl({ id });
  const videoRef = document.getElementById('videoRef') as HTMLVideoElement;
  store.commit(MutationsTypes.VIDEO_REF, videoRef);
  store.dispatch(ActionTypes.SET_VIDEO_URL, res4.urls[0].url);
};
init();
watch(() => route.query, init);
</script>

<template>
  <div class="video">
    <div class="left">
      <video id="videoRef" controls>您的浏览器不支持video标签。</video>
      <Info :data="result.data" v-bind="result2" />
    </div>
    <div class="right">
      <List :list="result3.data" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.video {
  display: flex;
  justify-content: space-between;
  .left {
    flex-grow: 1;
    #videoRef {
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
