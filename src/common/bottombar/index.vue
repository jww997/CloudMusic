<template>
  <div class="kid" v-if="current.id" @click.stop="toPages({ name: 'player' })">
    <!-- @click="togglePlayer" -->
    <div
      :class="{
        al: true,
        active: music.isPlaying,
      }"
      :style="{
        backgroundImage: 'url(' + require('@/assets/images/chassis.png') + ')',
      }"
    >
      <img class="cover" :src="current.al.picUrl" v-lazy="current.al.picUrl" />
      <img class="light" :src="require('@/assets/images/light.png')" />
    </div>
    <div class="monicker">
      <span class="name">{{ current.name }}</span>
      <span class="ar">{{ current.ar[0].name }}</span>
    </div>
    <div class="state" @click.stop="toggleStatus">
      <van-icon name="pause-circle-o" v-if="music.isPlaying" />
      <van-icon name="play-circle-o" v-else />
    </div>
    <!-- <span
      :class="{
        'iconfont center': true,
        playing: music.isPlaying,
      }"
      @click.stop="toggleStatus"
      >{{ music.isPlaying ? "&#xe665;" : "&#xe666;" }} 
    </span>-->
    <span class="iconfont" @click.stop="toggleDrawerShow">&#xe664;</span>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { toPages } from "@/assets/js/util.js";
export default {
  name: "bottombar",
  computed: {
    current() {
      const that = this;
      return that.music.current;
    },
    ...mapGetters(["music"]),
  },
  methods: {
    toPages,
    toggleStatus: function () {
      const that = this;
      let music = that.music;
      music.isPlaying = !music.isPlaying;
      that.setMusic(music);
    },
    toggleDrawerShow: function () {
      const that = this;
      that.amendStateObjValue({ key: "isShowDrawer", value: true });
    },
    togglePlayer: function () {
      const that = this;
      that.amendStateObjValue({ key: "isShow", value: true });
    },
    ...mapMutations({
      setMusic: "SET_MUSIC",
    }),
    ...mapActions(["amendStateObjValue"]),
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/mixins.scss";
@import "~sass/varibles.scss";
.kid {
  width: 100%;
  height: $safeDistance;
  padding: 0 0.3rem;
  box-sizing: border-box;
  background-image: linear-gradient(#efefef, transparent);
  background-color: #fff;
  @include flexSpaceBetween;
  transition: 0.5s;
  overflow: visible;
  position: fixed;
  bottom: 0;
  z-index: 1;
  .al,
  .cover {
    border-radius: 50%;
    overflow: visible;
  }
  .cover,
  .light {
    @include positionCenter;
  }
  .al {
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    margin: -0.8rem 0.2rem 0 0;
    background-size: 100% 100%;
    position: relative;
    overflow: visible;
    @include flexCenter;
    animation-duration: 20s;
    animation-name: turn;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: paused;
    &.active {
      animation-play-state: running;
    }
    .cover {
      width: 65%;
      height: 65%;
      z-index: $zIndex-XXXS;
    }
    .light {
      width: 100%;
      height: 100%;
      z-index: $zIndex-XXS;
    }
  }
  .monicker {
    flex-grow: 1;
    line-height: 1;
    padding-bottom: $text-XXXS;
    box-sizing: border-box;
    @include omit;
    .name,
    .ar {
      line-height: $safeDistance;
    }
    .name {
      font-size: $text-S;
    }
    .ar {
      margin-left: -0.2rem;
      font-size: $text-XS;
      color: $theme-GRAY;
      &::before {
        content: "-";
        margin: 0 $text-XXXS;
      }
    }
  }
  .iconfont,
  .state {
    margin-left: $text-XS;
  }
  .state {
    @include flexCenter;
    font-size: $text-XXL;
  }
  .iconfont {
    font-size: $text-L;
  }
}
</style>