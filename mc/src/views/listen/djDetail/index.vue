<script lang="ts">
export default {name: "ListenDjDetail"}
</script>
<script lang="ts" setup>
import {reactive} from "vue"
import {useRoute} from "vue-router"
import _ from "lodash"
import * as TYPE from "./_type"
import * as CONSTANT from "./_constant"
import listen from "@/apis/listen"

const route = useRoute()

const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS)
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT)

const getDjDetail = async () => {
  const res = await listen.getDjDetail(CONSTANT.PARAMS)
  const {data} = res
  _.assign(result, {data})
}

const init = async () => {
  const id = <string>route.query.id
  _.assign(params, {rid: id})
  await getDjDetail()
}
init()
</script>

<template>
  <div>{{ result.data }}</div>
</template>

<style lang="less" scoped></style>
