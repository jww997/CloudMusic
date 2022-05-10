<script lang="ts">
export default {
  name: 'ListenSinger',
};
</script>
<script lang="ts" setup>
import { ref } from 'vue';
import listen from '@/apis/listen/index';
import listen_R from '@/apis/listen/typeResult';
import * as C from './_constant';

const result1 = ref<listen_R.RESULT_ARTIST_LIST>();

const responsive = { xs: 20, sm: 16, md: 12, lg: 8, xl: 6, xxl: 4 };

const init = async () => {
  result1.value = await listen.getArtistList();
};
init();
</script>

<template>
  <div v-if="result1">
    <div>
      {{ C.AREA }}
      {{ C.TYPE }}
      {{ C.INITIAL }}
    </div>
    <a-row>
      <a-col
        v-for="(item, index) in result1.artists"
        :key="item.id"
        v-bind="responsive"
      >
        <div
          class="txt-pointer"
          @click="
            $router.push({
              name: 'ListenSingerDetail',
              query: { id: item.id },
            })
          "
        >
          <a-space class="pad" direction="vertical">
            <div class="cover">
              <a-image
                :src="item.picUrl"
                :alt="item.name"
                height="100%"
                show-loader
              ></a-image>
            </div>
            <span class="name">{{ item.name }}</span>
          </a-space>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="less" scoped>
.pad {
  width: 100%;
  padding-top: 15px;
  padding-bottom: 50px;
  position: relative;
  .cover {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .name {
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }
}
</style>
