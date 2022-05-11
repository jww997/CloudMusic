<script lang="ts">
export default {
  name: 'ListenRecommend',
};
</script>
<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import listen from '@/apis/listen';
import List from '../songlist/list.vue';
import listen_R from '@/apis/listen/typeResult';

const result1 = ref<listen_R.RESULT_PERSONALIZED>();
const result2 = ref<listen_R.RESULT_HOMEPAGE_DRAGON_BALL>();
const list = computed(() =>
  result1.value?.result.map((v) => ({ ...v, coverImgUrl: v.picUrl }))
);

const init = async () => {
  result1.value = await listen.getPersonalized();
  result2.value = await listen.getHomepageDragonBall();
};
init();

</script>

<template>
  <div v-if="result2">
    <a-space v-for="item in result2.data">
      <div class="frame">
        <img :width="50" :src="item.iconUrl" />
      </div>
    </a-space>
  </div>
  <List :list="list" v-if="list" />
</template>

<style lang="less" scoped>
.frame {
  position: relative;
  width: 80px;
  border-radius: 50%;
  height: 80px;
  background-color: #fdf4f6;
  margin: 0 auto;
  overflow: hidden;
  img {
    position: absolute;
    left: -80px;
    width: 80px;
    height: 80px;
    filter: drop-shadow(80px 0px #f9343d);
  }
}
</style>
