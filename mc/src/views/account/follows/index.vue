<script lang="ts" setup>
import {Notification} from "@arco-design/web-vue"
import {ref, onMounted} from "vue"
import {useRoute} from "vue-router";
import {useStore} from "vuex"
import _ from "lodash"
import dayjs from "dayjs"
import {router} from "@/router"
import account from "@/apis/account/index"
import * as TYPE from "./_type"
import * as CONSTANT from "./_constant"
import MyImage from "@/components/myImage/index.vue"

const store = useStore()
const route = useRoute()

const id = <string>route.query.id

const results1 = ref<TYPE.RESULT>(CONSTANT.RESULT)
const results2 = ref<TYPE.RESULT2>(CONSTANT.RESULT2)

onMounted(async () => {
  try {
    const res = await account.getUserFollows({uid: id});
    const res2 = await account.getUserFolloweds({uid: id});

    console.log(res)
    console.log(res2)
  } catch (err) {
  }
})
</script>

<template>
  <div class="flex">
    <div></div>

  </div>
</template>

<style lang="less" scoped>
</style>
