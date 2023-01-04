<script setup lang="ts">
import {useStore} from "vuex"
import {MutationsTypes} from "./store/modules/listen/mutations-types"
import {ActionTypes as ActionTypes_L} from "@/store/modules/listen/action-types"
import {ActionTypes as ActionTypes_A} from "@/store/modules/account/action-types"

const store = useStore()
// 接口版本
store.dispatch(ActionTypes_A.SET_ACCOUNT_VERSION)
// 按键监听
document.addEventListener("keydown", ({key}) => {
  const step = 0.05
  const {state, volume} = store.state.listen.audio
  switch (key) {
    case " ": // 播放 & 暂停
      store.dispatch(ActionTypes_L.SET_AUDIO_STATE, !state)
      break
    case "ArrowLeft":
      store.dispatch(ActionTypes_L.SET_AUDIO_TOGGLE, -1)
      break
    case "ArrowRight":
      store.dispatch(ActionTypes_L.SET_AUDIO_TOGGLE, 1)
      break
    case "ArrowUp":
      const volume1: number = volume < 1 - step ? volume + step : 1
      store.commit(MutationsTypes.AUDIO_VOLUME, volume1)
      break
    case "ArrowDown":
      const volume2: number = volume > step ? volume - step : 0
      store.commit(MutationsTypes.AUDIO_VOLUME, volume2)
      break
  }
})
</script>

<template>
  <router-view/>
</template>

<style lang="less">
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
p {
  margin: 0;
  padding: 0;
}
</style>
