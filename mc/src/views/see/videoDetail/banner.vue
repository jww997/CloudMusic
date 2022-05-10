<template>
  <el-carousel
    class="banner"
    height="300px"
    :interval="4000"
    type="card"
    autoplay
  >
    <el-carousel-item class="banner-item" v-for="item in list" :key="item.id">
      <el-image
        class="banner-image"
        :src="item.imageUrl"
        fit="contain"
      ></el-image>
      <div
        class="banner-tag"
        v-if="item.typeTitle"
        :style="`background-color: ${item.titleColor}`"
      >
        {{ item.typeTitle }}
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "RecommendBanner",
  props: {
    list: { type: Array, require: true },
  },
};
</script>

<style lang="less" scoped>
.banner {
  flex-shrink: 0;
  .banner-item {
    height: auto;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    .banner-image {
      width: 100%;
      height: 100%;
    }
    .banner-tag {
      padding: 10px 20px;
      border-radius: 20px 0 0 0;
      color: $--color-normal;
      font-size: 20px;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
