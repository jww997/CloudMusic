<script lang="ts">
export default {
  name: "SeeMvDetail",
}
</script>
<script lang="ts" setup>
import {reactive} from "vue"
import {useStore} from "vuex"
import {useRoute} from "vue-router"
import {router} from "@/router"
import {MutationsTypes} from "@/store/modules/see/mutations-types"
import {ActionTypes} from "@/store/modules/see/action-types"
import _ from "lodash"
import * as TYPE from "./_type"
import * as CONSTANT from "./_constant"
import see from "@/apis/see"
import Info from "./info.vue"
import List from "./list.vue"

const route = useRoute()
const store = useStore()
const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS)
const params2 = reactive<TYPE.PARAMS2>(CONSTANT.PARAMS2)
const params3 = reactive<TYPE.PARAMS3>(CONSTANT.PARAMS3)
const params4 = reactive<TYPE.PARAMS4>(CONSTANT.PARAMS4)
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT)
const result2 = reactive<TYPE.RESULT2>(CONSTANT.RESULT2)
const result3 = reactive<TYPE.RESULT3>(CONSTANT.RESULT3)
const result4 = reactive<TYPE.RESULT4>(CONSTANT.RESULT4)

const getMvDetail = async () => {
  const res = await see.getMvDetail(params)
  const {data} = res
  _.assign(result, {data})
}

const getMvDetailInfo = async () => {
  const res = await see.getMvDetailInfo(params2)
  const {commentCount, liked, likedCount, shareCount} = res
  _.assign(result2, {commentCount, liked, likedCount, shareCount})
}

const getRelatedAllvideo = async () => {
  const res = await see.getRelatedAllvideo(params3)
  const {data} = res
  _.assign(result3, {data})
}

const getMvUrl = async () => {
  const res = await see.getMvUrl(params4)
  const {data} = res
  _.assign(result4, {data})
  const mvRef = document.getElementById("mvRef")
  store.commit(MutationsTypes.VIDEO_REF, mvRef)
  await store.dispatch(ActionTypes.SET_VIDEO_URL, res.data.url)
}

const init = async () => {
  const id = <string>route.query.id
  if (!id) router.back()
  _.assign(params, {mvid: id})
  _.assign(params2, {mvid: id})
  _.assign(params3, {id})
  _.assign(params4, {id})
  await getMvDetail()
  await getMvDetailInfo()
  await getRelatedAllvideo()
  await getMvUrl()
}
init()
</script>

<template>
  <div class="mv-detail">
    <div class="left">
      <Info :data="result.data" v-bind="result2"/>
    </div>
    <div class="right">
      <List :list="result3.data"/>
    </div>
  </div>
</template>

<style lang="less" scoped>
.mv-detail {
  display: flex;
  justify-content: space-between;

  .left {
    flex-grow: 1;
  }

  .right {
    flex-shrink: 0;
    width: 250px;
    padding-left: 30px;
  }
}
</style>
