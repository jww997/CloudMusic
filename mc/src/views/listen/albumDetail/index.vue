<script lang="ts">
export default {name: "ListenAlbumDetail"}
</script>
<script lang="ts" setup>
import {reactive} from "vue"
import {useRoute} from "vue-router"
import _ from "lodash"
import * as TYPE from "./_type"
import * as CONSTANT from "./_constant"
import listen from "@/apis/listen"
import List from "../songlistDetail/list.vue"

const route = useRoute()

const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS)
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT)


const getAlubum = async () => {
  const res = await listen.getAlubum(params)
  _.assign(result, {...res})

}

const init = async () => {
  const id = <string>route.query.id
  _.assign(params, {id})
  await getAlubum()

  // const r = await listen.getAlubumDetailDynamic({ id });
  // const r = await listen.getAlubumSub({ id, t: 1 });
  // const r = await listen.getAlubumSublist({});
  // const r = await listen.getAlubumNewest({ id });
  // const r = await listen.getCommentAlubum({id});
  // console.log(r);
}
init()
</script>

<template>
  <div v-if="result">
    <List :list="result.songs" :columns="CONSTANT.COLUMNS" v-if="result.songs"/>
  </div>
</template>

<style lang="less" scoped></style>
