<script lang="ts">
export default {name: "ListenToplist"}
</script>
<script lang="ts" setup>
import {reactive} from "vue"
import _ from "lodash"
import listen from "@/apis/listen"
import * as TYPE from "./_type"
import * as CONSTANT from "./_constant"
import List from "../songlist/list.vue"

const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS)
const params2 = reactive<TYPE.PARAMS2>(CONSTANT.PARAMS2)
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT)
const result2 = reactive<TYPE.RESULT2>(CONSTANT.RESULT2)

const getToplist = async () => {
  const res = await listen.getToplist(params)
  const {artistToplist, list} = res
  _.assign(result, {artistToplist, list})

}
const getToplistDetail = async () => {
  const res = await listen.getToplistDetail(params2)
  const {list} = res
  _.assign(result2, {list})
}

const init = async () => {
  await getToplist()
  await getToplistDetail()
}
init()
</script>

<template>
  <div>
    <List :list="result.list"/>
  </div>
</template>

<style lang="less" scoped></style>
