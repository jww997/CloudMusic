<template>
  <div class="children">
    <!-- <div class="profile" @click.stop="toPages({ name: 'oneself' }, hide)"> -->
    <div
      class="profile"
      @click.stop="toPages({ name: cookie ? 'oneself' : 'login' }, hide)"
    >
      <img class="portrait" :src="avatarUrl" v-lazy="avatarUrl" />
      <span class="name"> {{ nickname || "立即登录" }} &gt; </span>
    </div>
    <div class="logout" @click="quit" v-if="cookie">退出登录/关闭</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { toPages } from "@/assets/js/util.js";
export default {
  name: "setting",
  // props: {
  //   profile: {},
  // },
  computed: {
    cookie() {
      const that = this;
      return that.login.cookie;
    },
    avatarUrl() {
      const that = this;
      let profile = that.login.profile;
      return profile && profile.avatarUrl;
    },
    nickname() {
      const that = this;
      let profile = that.login.profile;
      return profile && profile.nickname;
    },
    ...mapState(["login"]),
  },
  // inject: ["reload"],
  methods: {
    toPages,
    quit: function () {
      const that = this;
      that.$emit("quit");
    },
    hide: function () {
      const that = this;
      that.$emit("hide");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/mixins.scss";
@import "~sass/varibles.scss";
.children {
  height: 100%;
  // background-color: $theme-LIGHTGRAY;
  background-image: linear-gradient($theme-WHITE, $theme-LIGHTGRAY 30%);
  // .profile,
  .logout {
    background-color: $theme-WHITE;
  }
  .profile {
    padding: $text-XS;
    @include flexCenter;
    justify-content: flex-start;

    .portrait {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background-color: $theme-LIGHTGRAY;
    }
    .name {
      margin-left: $text-XS;
      font-size: $text-S;
      color: $theme-GRAY;
    }
  }
  .logout {
    margin: $text-XS;
    padding: $text-XS;
    border-radius: $text-XXS;
    font-size: $text-S;
    text-align: center;
    color: $theme-RED;
    box-shadow: 0 5px 10px 2px $theme-LIGHTGRAY;
  }
}
</style>