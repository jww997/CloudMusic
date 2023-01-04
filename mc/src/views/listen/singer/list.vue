<script lang="ts" setup>
import MyImage from "@/components/myImage/index.vue"

defineProps({
  list: {type: Array, default: () => []},
})
const span = 24 / 6
</script>

<template>
  <div class="list">
    <a-row gutter="24">
      <template v-for="item in list">
        <a-col :span="span">
          <router-link :to="{ name: 'ListenSingerDetail', query: { id: item.id } }">
            <MyImage
                class="cursor-pointer hover:-translate-y-4 duration-100"
                :width="200"
                :height="200"
                :src="item.picUrl"
                :title="item.name"
                footer-position="outer"
                roundedFull
            />
          </router-link>
        </a-col>
      </template>
    </a-row>
  </div>
</template>

<style lang="less" scoped>
.list {
  :deep(.arco-image),
  :deep(.loader-img) {
    border-radius: 50%;
  }

  :deep(.arco-image-footer) {
    text-align: center;
  }
}
</style>
