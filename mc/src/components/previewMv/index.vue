<script lang="ts" setup>
import {ref, reactive, watch} from "vue"
import MyImage from "../myImage/index.vue"
import MyVideo from "../myVideo/index.vue"
import _ from "lodash"
import see from "@/apis/see"
import * as TYPE from "./_type"
import * as CONSTANT from "./_constant"

type PROPS = {
  id: string,
  cover: string,
  name: string,
  artistName: string,
}
const props = defineProps<PROPS>()

const params = reactive<TYPE.PARAMS>(CONSTANT.PARAMS)
const result = reactive<TYPE.RESULT>(CONSTANT.RESULT)

const isVideo = ref<boolean>(false)
const height = 250


const init = async () => {
  params.id = props.id
  const res = await see.getMvUrl(params)
  result.data = res.data
}
watch(() => isVideo.value, v => v ? init() : "")
</script>

<template>
  <div class="w-full relative cursor-pointer" @mouseenter="isVideo = true" @mouseleave="isVideo = false">
    <MyVideo class="absolute top-0 z-10 w-full" v-if="isVideo && result.data.url" :src="result.data.url"
             :height="height" :roundedType="2" :autoplay="true" :muted="false" :playbackRate="2"/>
    <MyImage :src="cover" :height="height" :preview="false" footer-position="outer" :title="name"
             :description="artistName" :roundedType="2"/>
  </div>
</template>

<style lang="less" scoped>
</style>
