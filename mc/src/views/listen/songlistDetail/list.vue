<script lang="ts" setup>
import {computed} from "vue"
import {useStore} from "vuex"
import {IconHeart, IconVideoCamera} from "@arco-design/web-vue/es/icon"
import dayjs from "dayjs"
import * as R from "@/apis/listen/typeResult"
import {ActionTypes} from "@/store/modules/listen/action-types"

const store = useStore()

defineProps({
  list: {type: Array, default: () => []},
  columns: {type: Array, default: () => []},
})

const song = computed(() => store.state.listen.audio.song)
const activeIndex = computed(() => store.state.listen.audio.list.findIndex((v: R.SONG) => v.id === song.value?.id))
const handleRowClick = (song: R.SONG) => store.dispatch(ActionTypes.SET_AUDIO_URL, song.id)
</script>

<template>
  <div class="list">
    <a-table
        :columns="columns"
        :data="list"
        @row-click="handleRowClick"
        :bordered="{ bodyCell: false }"
        hoverable
    >
      <template #columns>
        <a-table-column v-for="{ title, dataIndex } in columns" :title="title" :index="activeIndex">
          <template #cell="{ record }">
            <div v-if="record">
              <div v-if="dataIndex === 'name'">
                <a-space>
                  <!--                  {{ record.fee }}-->
                  <icon-heart size="20"/>
                  <div class="title cursor-pointer">
                    <span class="name"> {{ record.name }} </span>
                    <span class="alia" v-for="item in record.alia">（{{ item }}）</span>
                  </div>
                  <icon-video-camera size="15" v-if="record.mv" @click.stop=" $router.push({ name: 'SeeMvDetail', query: { id: record.mv }, })"/>
                </a-space>
              </div>
              <div v-if="dataIndex === 'ar'" class="ar">
                <template v-for="(item, index) in record.ar">
                  <span>{{ index !== 0 ? " / " : "" }}</span>
                  <span class="cursor-pointer txt-hover" @click.stop=" $router.push({ name: 'ListenSingerDetail', query: { id: item.id }, })">{{ item.name }}</span>
                </template>
              </div>
              <div v-if="dataIndex === 'al'" class="al">
                <span class="cursor-pointer txt-hover" @click.stop=" $router.push({ name: 'ListenAlbumDetail', query: { id: record.al.id }, })">{{ record.al.name }}</span>
              </div>
              <div v-if="dataIndex === 'dt'">
                <span>{{ dayjs(record.dt).format("mm:ss") }}</span>
              </div>
            </div>
          </template>
        </a-table-column>
      </template>
    </a-table>
  </div>
</template>

<style lang="less" scoped>
.list {
  .title,
  .ar,
  .al {
    max-width: 250px;
    white-space: nowrap;
    .text-row(1);
  }

  .alia {
    color: var(--color-neutral-6);
  }

  .active {
    color: #f00;
  }
}
</style>
