<template>
  <div class="navbar">
    <van-icon
      class="icon"
      :name="beforeIconName || 'arrow-left'"
      @click="back"
    />

    <div class="headline">
      <template v-if="title">
        <p class="title">{{ title }}</p>
        <p class="subtitle" v-if="subtitle">{{ subtitle }}</p>
      </template>
      <slot name="addonMiddle" v-else />
    </div>
    <div class="addonAfter">
      <slot name="addonAfter" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "navbar",
  props: ["title", "subtitle", "beforeIconName"],
  computed: {
    ...mapState(["music", "mv"]),
  },
  methods: {
    back() {
      let router = this.$router;
      window.history.length > 1 ? router.go(-1) : router.push("/");
    },
    hide() {
      const that = this;
      let mv = that.mv;
      let music = that.music;
      music.isShow = false;
      mv.isShow = false;
      that.setMusic(music);
      that.setMv(mv);
    },
    ...mapMutations({
      setMusic: "SET_MUSIC",
      setMv: "SET_MV",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/var.scss";
@import "~sass/mixins.scss";
.navbar {
  flex-shrink: 0;
  width: 100%;
  height: 50px;
  padding: 0 $padding-sm;
  box-sizing: border-box;
  background-color: transparent;
  color: $white;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  .icon,
  .addonAfter {
    flex-shrink: 0;
    min-width: 0.7rem;
    max-width: 2rem;
  }
  .icon {
    font-size: $font-size-lg * 1.5;
  }
  .headline {
    flex-grow: 1;
    line-height: $line-height-lg;
    .title,
    .subtitle {
      max-width: 7rem;
      margin: 0 auto;
      text-align: center;
      @include omit;
    }
    .title {
      font-size: $font-size-lg * 1.3;
      font-weight: bold;
    }
    .subtitle {
      font-size: $font-size-sm;
    }
  }
  // -webkit-backdrop-filter: saturate(180%) blur(20px);
  // backdrop-filter: saturate(180%) blur(20px);
}
</style>