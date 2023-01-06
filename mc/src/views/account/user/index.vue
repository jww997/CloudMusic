<script lang="ts" setup>
import {ref, onMounted} from "vue"
import {useStore} from "vuex"
import account from "@/apis/account/index"
import * as TYPE from "./_type"
import * as CONSTANT from "./_constant"

import Info from "./info.vue"
import List from "@/views/listen/songlist/list.vue"

const store = useStore()

const uid = "344460908"
const results1 = ref<TYPE.RESULT>(CONSTANT.RESULT)
const results2 = ref<TYPE.RESULT2>(CONSTANT.RESULT2)

onMounted(async () => {
  try {
    results1.value = await account.getUserDetail({uid})
    results2.value = await account.getUserPlaylist({uid})

    console.log(123, results1.value.profile)
  } catch (err) {
  }

  // await account.getUserAccount();
  // await account.getUserSubcount();
  // await account.getUserLevel();
  // await account.getUserBinding({ uid });
  // await account.getUserPeplacephone({
  //   phone: '15812811722',
  //   oldcaptcha: 1234,
  //   captcha: 1234,
  // });
  // await account.getUserCommentHistory({ uid });
  // await account.getUserDj({ uid });
  // await account.getUserFollows({ uid });
  // await account.getUserFolloweds({ uid });
  // await account.getUserEvent({ uid });
  // await account.getEventForward({
  //   uid,
  //   evId: 20582519574,
  //   forwards: '测试内容',
  // });
  // await account.getEventDel({ evId: 21447285184 });
  // await account.getFollow({ id: 21447485184, t: 1 });
  // await account.getUserRecord({ uid, type: 1 });
})
</script>

<template>
  <div>
    <Info v-bind="results1.profile"/>
    <List v-if="results2" :list="results2?.playlist"/>
  </div>
</template>

<style lang="less" scoped>
:deep(.arco-avatar) {
  overflow: hidden;
}
</style>
