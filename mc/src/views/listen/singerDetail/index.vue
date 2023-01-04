<script lang="ts">
export default {name: "ListenSingerDetail"}
</script>
<script lang="ts" setup>
import {reactive} from "vue"
import {useRoute} from "vue-router"
import _ from "lodash"
import * as TYPE from "./_type"
import * as CONSTANT from "./_constant"
import listen from "@/apis/listen/index"
import List from "../songlistDetail/list.vue"
import Info from "./info.vue"

const route = useRoute()

const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS)
const params2 = reactive<TYPE.PARAMS2>(CONSTANT.PARAMS2)
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT)
const result2 = reactive<TYPE.RESULT2>(CONSTANT.RESULT2)

const getArtistDetail = async () => {
  const res = await listen.getArtistDetail(params)
  const {artist, hotSongs, more} = res
  console.log(artist)
  _.assign(result, {artist, hotSongs, more})
}

const getArtistSongs = async () => {
  const res = await listen.getArtistSongs(params2)
  const {more, songs, total} = res
  _.assign(result2, {more, songs, total})
}

const init = async () => {
  const id = <string>route.query.id
  _.assign(params, {id})
  _.assign(params2, {id})
  await getArtistDetail()
  await getArtistSongs()


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
}
init()
</script>

<template>
  <div>
    <Info :detail="result.artist"/>
    <List :list="result.hotSongs" :columns="CONSTANT.COLUMNS"/>
  </div>
</template>

<style lang="less" scoped></style>
