<script lang="ts">
export default {name: "ListenSong"}
</script>
<script lang="ts" setup>
import {computed} from "vue"
import {useStore} from "vuex"
import {useRoute} from "vue-router"
import Disc from "./disc.vue"
import Lyric from "@/layout/footer/lyric.vue"

const store = useStore()
const route = useRoute()

const song = computed(() => store.state.listen.audio.song)
// if (song !== null) {
//   const id = <string>route.query.id;
//   store.dispatch(ActionTypes.SET_AUDIO_DETAIL, id);
//   store.dispatch(ActionTypes.SET_AUDIO_URL, id);
//   store.dispatch(ActionTypes.SET_AUDIO_LYRIC, id);
// }
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <Disc/>
    <Lyric class="w-1/2 h-100 ml-20" v-if="song"/>
  </div>
</template>

<style lang="less" scoped></style>
