import { watch, watchEffect } from 'vue';
import { ActionTree, ActionContext } from 'vuex';
import { toNumber } from 'lodash';
import { Notification } from '@arco-design/web-vue'
import { MutationsTypes } from './mutations-types';
import { ActionTypes } from './action-types';
import { RootState } from '@/store';
import type { State } from './state';
import myWatch from '@/apis/watch';


export type Actions<S = State, R = RootState> = {
  [ActionTypes.SET_VIDEO_URL](context: ActionContext<S, R>, val: number): void;
  // [ActionTypes.SET_VIDEO_DETAIL](context: ActionContext<S, R>, val: string): void;
  // [ActionTypes.SET_VIDEO_TOGGLE](context: ActionContext<S, R>, val: 1 | 0 | -1): void;
  [ActionTypes.SET_VIDEO_SCHEDULE](context: ActionContext<S, R>, val: number): void;
  [ActionTypes.SET_VIDEO_STATE](context: ActionContext<S, R>, val: boolean): void;
};

export const actions: ActionTree<State, RootState> & Actions = {
  [ActionTypes.SET_VIDEO_URL]({ state, commit }, val) {
    state.videoRef = document.getElementById('video') as HTMLVideoElement;
    const init = async () => {
      const res = await myWatch.getMvUrl({ id: val });
      const { data: { url } } = res;
      if (!url) return false
      state.videoRef.src = url
      state.videoRef.autoplay = true

      const { videoRef, video } = state
      // dispatch(ActionTypes.SET_VIDEO_DETAIL, val)
      // const index = video.list.findIndex((v: TRACK) => v.id === val)
      // commit(MutationsTypes.VIDEO_INDEX, index)
      // commit(MutationsTypes.VIDEO_REF, videoRef);
      videoRef.addEventListener("canplaythrough", async () => {
        // videoRef.play()
        watchEffect(() => {
          videoRef.volume = video.volume
        })
        watch(() => video.order, () => Notification.info({ content: 'This is an info message!', position: 'topLeft' }))
      });
      videoRef.addEventListener('play', () => {
        commit(MutationsTypes.VIDEO_STATE, true)
      })
      videoRef.addEventListener('pause', () => {
        commit(MutationsTypes.VIDEO_STATE, false)
      })
      // videoRef.addEventListener('ended', () => {
      //   commit(MutationsTypes.VIDEO_CURRENTTIME, 0)
      //   commit(MutationsTypes.VIDEO_DURATION, 0)
      //   dispatch(ActionTypes.SET_VIDEO_TOGGLE, 1)
      //   commit(MutationsTypes.VIDEO_SONG, null)
      // })
      videoRef.addEventListener('timeupdate', () => {
        commit(MutationsTypes.VIDEO_CURRENTTIME, videoRef.currentTime)
        commit(MutationsTypes.VIDEO_DURATION, videoRef.duration)
      })
    };
    init();
  },
  // 获取歌曲列表的详情
  // [ActionTypes.SET_VIDEO_DETAIL]({ commit }, val) {
  //   const init = async () => {
  //     const { songs: [song] } = await watch.getSongDetail({ ids: val })
  //     commit(MutationsTypes.VIDEO_SONG, song)
  //   }
  //   init()
  // },
  // // -1上一首 & 0重播 & 1下一首
  // [ActionTypes.SET_VIDEO_TOGGLE]({ state: { video: { order, list, index } }, commit, dispatch }, val) {
  //   const len = list.length - 1
  //   if (order === 3 && val !== 0) {
  //     const randomIndex = Math.round(len * Math.random())
  //     randomIndex === index ? dispatch(ActionTypes.SET_VIDEO_TOGGLE, val) : (index = randomIndex)
  //   } else if (order === 1 && val !== 0) {
  //     index === len && val === 1 ? index = 0 : index === 0 && val === -1 ? index = len : (val === 1 ? index++ : index--)
  //   }
  //   commit(MutationsTypes.VIDEO_INDEX, index)
  //   dispatch(ActionTypes.SET_VIDEO_URL, list[index].id,{root:true})
  // },
  // 百分比控制播放进度
  [ActionTypes.SET_VIDEO_SCHEDULE]({ state: { videoRef, video: { duration } } }, val) {
    videoRef.currentTime = duration * (val / 100)
  },
  // 播放 & 暂停
  [ActionTypes.SET_VIDEO_STATE]({ state: { videoRef } }, val) {
    val ? videoRef.play() : videoRef.pause()
  },
};
