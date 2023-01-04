<script lang="ts">
export default {
  name: "ListenSearch",
}
</script>
<script lang="ts" setup>
import {ref, reactive, computed, watch} from "vue"
import {useRoute, onBeforeRouteUpdate} from "vue-router"
import {router} from "@/router"
import _ from "lodash"
import listen from "@/apis/listen"
import * as TYPE from "./_type"
import * as CONSTANT from "./_constant"

const route = useRoute()
const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS)
const params2 = reactive<TYPE.PARAMS2>(CONSTANT.PARAMS2)
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT)
const result2 = reactive<TYPE.RESULT2>(CONSTANT.RESULT2)

const activeIndex = ref<number>(0)
const tab = computed<TYPE.TAB>(() => CONSTANT.TAB[activeIndex.value])
const len = ref<number>(0)

const handleSearch = async () => {
  const res = await listen.getCloudsearch(params)
  result.result = res.result
  const key = _.keys(result.result).find((v) => /Count/.test(v)) ?? ""
  len.value = result.result[key] ?? 0
  console.log("result = ", result)

  // const res2 = await listen.getSearch(params2);
  // result2.result = res2.result;
}

const init = async () => {
  const keywords = <string>route.query.keywords
  const index = <string>route.query.index
  console.log(!keywords)
  if (!keywords) router.back()
  params.keywords = keywords
  activeIndex.value = _.toNumber(index)
  params.type = tab.value.type
  handleSearch()
}
init()

onBeforeRouteUpdate((to) => {
  const keywords = <string>to.query.keywords
  const index = <string>to.query.index
  params.keywords = keywords
  activeIndex.value = _.toNumber(index)
  params.type = tab.value.type
  handleSearch()
})

watch(
    () => activeIndex.value,
    (v) => {
      const keywords = <string>route.query.keywords
      if (!keywords && isNaN(v)) return false
      router.push({name: "ListenSearch", query: {keywords, index: v}})
    },
)
</script>

<template>
  <div>
    <a-space class="padding" size="medium">
      <a-typography-title>搜</a-typography-title>
      <a-typography-title class="title">
        {{ params.keywords }}
      </a-typography-title>
    </a-space>
    <a-tabs v-model:active-key="activeIndex" lazy-load justify>
      <template #extra>
        <div class="padding">{{ `找到约${len}${tab?.unit}${tab?.title}` }}</div>
      </template>
      <a-tab-pane
          v-for="(item, index) in CONSTANT.TAB"
          :key="index"
          :title="item.title"
      >
        <div class="context">
          <a-empty v-if="len === 0"/>
          <component
              :key="item.type"
              :is="item.is"
              v-bind="result.result"
              v-else
          />
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style lang="less" scoped>
.title {
  color: rgb(var(--primary-6));
}

.padding {
  padding: 0 15px;
}
</style>
