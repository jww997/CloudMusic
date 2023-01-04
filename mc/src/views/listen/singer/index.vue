<script lang="ts">
export default {name: "ListenSinger"}
</script>
<script lang="ts" setup>
import {reactive, watch} from "vue"
import _ from "lodash"
import * as TYPE from "./_type"
import * as CONSTANT from "./_constant"
import listen from "@/apis/listen"
import MyTags from "@/components/myTags/index.vue"
import List from "./list.vue"

const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS)
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT)

const getArtistList = async () => {
  const res = await listen.getArtistList(params)
  const {artists, more} = res
  _.assign(result, {artists, more})

}

const init = async () => {
  await getArtistList()
}
init()

const handleReset = () => {
  _.assign(params, {offset: 0})
  _.assign(result, {artists: [], more: false})
}

watch(params, init)
watch(() => params.area, handleReset)
watch(() => params.type, handleReset)
watch(() => params.initial, handleReset)
</script>

<template>
  <div>
    <MyTags v-model:active="params.area" :list="CONSTANT.LANGUAGE" title="语种"/>
    <MyTags v-model:active="params.type" :list="CONSTANT.CLASSIFICATION" title="分类"/>
    <MyTags v-model:active="params.initial" :list="CONSTANT.FILTER" title="筛选"/>
    <List :list="result.artists"/>
  </div>
</template>

<style lang="less" scoped></style>
