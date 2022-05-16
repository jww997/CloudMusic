<script lang="ts">
export default {
  name: 'ListenSingerDetail',
};
</script>
<script lang="ts" setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import _ from 'lodash';
import listen from '@/apis/listen/index';
import * as TYPE from './_type';
import * as CONSTANT from './_constant';
import List from '../songlistDetail/list.vue';
import MyImage from '@/components/myImage/index.vue';

const route = useRoute();
const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS);
const params2 = reactive<TYPE.PARAMS2>(CONSTANT.PARAMS2);
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT);
const result2 = reactive<TYPE.RESULT2>(CONSTANT.RESULT2);

const init = async () => {
  const id = <string>route.query.id;
  params.id = id;
  params2.id = id;
  const res = await listen.getArtistDetail(params);
  result.artist = res.artist;
  result.hotSongs = res.hotSongs;
  result.more = res.more;

  const res2 = await listen.getArtistSongs(params2);
  result2.more = res2.more;
  result2.songs = res2.songs;
  result2.total = res2.total;

  // await listen.getArtist({ id });
  // await listen.getArtistTopSongs({ id });
  // await listen.getArtistMv({ id });
  // await listen.getArtistAlbum({ id });
  // await listen.getArtistDesc({ id });
  // await listen.getSimiArtists({ id });
  // await listen.getArtistSub({ id, t: 0 });
  // await listen.getTopArtists();
  // await listen.getArtistSublist();
  // await listen.getToplistArtist();
  // await listen.getArtistNewSong();
  // await listen.getArtistNewMv();
  // await listen.getArtistFans({ id });
  // await listen.getArtistFollowCount({ id });
  // await listen.getArtistVideo({ id });
};
init();
</script>

<template>
  <div v-if="result">
    <div class="top">
      <MyImage
        class="cover"
        :width="300"
        :height="300"
        :preview="false"
        :src="result.artist.picUrl"
        :alt="result.artist.name"
      />
      <span>{{ result.artist.name }}</span>
    </div>
    <List
      :list="result.hotSongs"
      :columns="CONSTANT.COLUMNS"
      v-if="result.hotSongs"
    />
  </div>
</template>

<style lang="less" scoped>
.top {
  margin-bottom: 50px;
}
.cover {
  margin-right: 50px;
  border-radius: 50%;
}
</style>
