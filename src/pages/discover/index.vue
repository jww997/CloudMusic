<template>
  <div class="discover">
    <!-- <refresh :isLoading="isLoading" @refresh="refresh"> -->

    <searchbar />
    <div v-for="(block, index) in blocks" :key="block.blockCode">
      <div v-if="test" style="border: 1px solid #f00; font-size: 14px">
        {{ index }} - {{ block.showType }}
      </div>
      <template v-if="banner.includes(block.showType)">
        <!-- 轮播图 -->
        <banner :list="banners"></banner>
        <!-- 保龄球 -->
        <bowling></bowling>
      </template>
      <template v-else-if="whirligig.includes(block.showType)">
        <!-- 旋转木马1 -->
        <whirligig :block="block"></whirligig>
      </template>
      <template v-else-if="whirligig2.includes(block.showType)">
        <!-- 旋转木马2 -->
        <whirligig2 :block="block"></whirligig2>
      </template>
      <template v-else-if="calendar.includes(block.showType)">
        <!-- 音乐日历 -->
        <calendar :block="block"></calendar>
      </template>
      <template v-else>
        <!-- 其他 -->
      </template>
    </div>

    <placeholder />
    <placeholder />
    <!-- </refresh> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import Placeholder from "@/components/placeholder";
import Searchbar from "./components/searchbar";
import Banner from "./banner";
import Bowling from "./bowling";
import Whirligig from "./whirligig";
import Whirligig2 from "./whirligig2";
import Calendar from "./calendar";

import Refresh from "@/common/refresh";

export default {
  name: "discover",
  components: {
    Placeholder,
    Banner,
    Bowling,
    Whirligig,
    Whirligig2,
    Calendar,
    Searchbar,

    Refresh,
  },
  inject: ["reload"],
  data () {
    return {
      blocks: [],
      banners: [],
      isLoading: false,

      test: 0,

      banner: ["BANNER"],
      whirligig: [
        "HOMEPAGE_SLIDE_PLAYLIST",
        "SHUFFLE_MLOG",
        "SLIDE_SINGLE_SONG",
        "SLIDE_VOICELIST",
        "SLIDE_PLAYABLE_DRAGON_BALL",
      ],
      whirligig2: [
        "HOMEPAGE_SLIDE_SONGLIST_ALIGN",
        "HOMEPAGE_NEW_SONG_NEW_ALBUM",
      ],
      calendar: ["SHUFFLE_MUSIC_CALENDAR"],

      // test: 1,
      // banner: [],
      // whirligig: [],
      // whirligig2: [],
      // calendar: [],
    };
  },
  computed: {
    cookie() {
      const that = this;
      return that.login.cookie;
    },
    ...mapGetters(["music", "login", "transition"]),
  },
  watch: {
    cookie(newVal, oldVal) {
      const that = this;
      that.refresh();
    },
  },
  methods: {
    refresh () {
      const that = this;
      that.reload();
      that.$vant.Toast.success("刷新成功");
      that.isLoading = false;
    },
    getdata() {
      const that = this;
      that.$api.getHomepageBlockPage({ refresh: true }).then((res) => {
        that.blocks = res.data.data.blocks;
      });
      that.$api.getBanner().then((res) => {
        that.banners = res.data.banners;
      });
    },
  },
  mounted () {
    const that = this;
    that.getdata();
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/var.scss";
@import "~sass/mixins.scss";
</style>
