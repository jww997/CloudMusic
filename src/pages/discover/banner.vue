<template>
  <div class="banner">
    <slide
      :list="list"
      :autoplay="5000"
      :indicatorsColor="'white'"
      @handleClick="toLink"
    >
      <template slot="box" slot-scope="{ item }">
        <div class="banner-box" :data-url="item.url" :data-video="item.video">
          <img class="image" :src="item.imageUrl" />
          <span
            :class="{ text: true, [item.titleColor]: true }"
            v-if="item.typeTitle"
            >{{ item.typeTitle }}</span
          >
        </div>
      </template>
    </slide>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { toPages } from "@/assets/js/util.js";
import Slide from "./components/slide";

export default {
  name: "banner",
  props: ["list"],
  components: {
    Slide,
  },
  methods: {
    toLink (val) {
      console.log(1);
      const that = this;
      switch (val.targetType) {
        case 3000: // 数字单曲
          window.location.href = val.url;
          break;
        case 1: // 新歌首发
          this.amendStateObjValue({ key: "id", value: val.encodeId });
          toPages.call(this, { name: "player" });
          break;
      }
    },
    ...mapActions(["amendStateObjValue"]),
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/var.scss";
@import "~sass/mixins.scss";
.banner {
  background-color: $background-color-light;
  .banner-box {
    margin: 0 $padding-sm;
    border-radius: $border-radius-lg;
    background-color: $background-color;
    position: relative;
    overflow: hidden;
    .image {
      width: 100%;
      height: 100%;
    }
    .text {
      font-size: $font-size-sm;
      padding: $padding-base $padding-xs;
      border-radius: $border-radius-lg 0 0 0;
      opacity: $active-opacity;
      color: $white;
      position: absolute;
      bottom: 0;
      right: 0;
      &.red {
        background-color: $red;
      }
      &.blue {
        background-color: $blue;
      }
    }
  }
}
</style>