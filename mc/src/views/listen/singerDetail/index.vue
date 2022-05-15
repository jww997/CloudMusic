<script lang="ts">
export default {
  name: 'ListenSingerDetail',
};
</script>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { toNumber } from 'lodash';
import listen from '@/apis/listen/index';
import listen_R from '@/apis/listen/typeResult';
import List from '../songlistDetail/list.vue';
import * as C from './_constant';
import MyImage from '@/components/myImage/index.vue';

const router = useRouter();

const query = computed(() => router.currentRoute.value.query);

const id = toNumber(computed(() => query.value.id).value);

const result1 = ref<listen_R.RESULT_ARTIST_DETAIL>();
// const result2 = ref<listen_R.RESULT_ARTIST_SONGS>();
const init = async () => {
  result1.value = await listen.getArtistDetail({ id });
  // result2.value = await listen.getArtistSongs({ id });

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
  <div v-if="result1">
    <div class="top">
      <MyImage
        class="cover"
        :width="300"
        :height="300"
        :preview="false"
        :src="result1.artist.picUrl"
        :alt="result1.artist.name"
      />
      <span>{{ result1.artist.name }}</span>
    </div>
    <List
      :list="result1.hotSongs"
      :columns="C.COLUMNS"
      v-if="result1.hotSongs"
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
