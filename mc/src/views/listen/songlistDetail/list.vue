<script lang="ts" setup>
import { computed } from 'vue';
import dayjs from 'dayjs';
import { useStore } from 'vuex';
import listen_R from '@/apis/listen/typeResult';
import { ActionTypes } from '@/store/modules/listen/action-types';
import { TableColumn } from '@arco-design/web-vue/es/table/interface';
import {
  IconHeart,
  IconHeartFill,
  IconLiveBroadcast,
} from '@arco-design/web-vue/es/icon';

const store = useStore();

const props = defineProps<{ list: listen_R.SONG[]; columns: TableColumn[] }>();

const song = computed<listen_R.SONG | null>(
  () => store.state.listen.audio.song
);
const list = computed<listen_R.SONG[]>(() => store.state.listen.audio.list);

const activeIndex = computed<number>(() =>
  list.value.findIndex((v: listen_R.SONG) => v.id === song.value?.id)
);

const dealDt = (dt: number) => dayjs(dt).format('mm:ss');

const handleRowClick = (song: listen_R.SONG) =>
  store.dispatch(ActionTypes.SET_AUDIO_URL, song.id);
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
        <a-table-column
          v-for="{ title, dataIndex } in columns"
          :title="title"
          :index="activeIndex"
        >
          <template #cell="{ record }">
            <div v-if="record">
              <div v-if="dataIndex === 'name'">
                <a-space>
                  <IconHeart size="20" />
                  <div class="title txt-pointer">
                    <span class="name"> {{ record.name }} </span>
                    <span class="alia" v-for="item in record.alia">
                      （{{ item }}）
                    </span>
                  </div>
                  <IconLiveBroadcast
                    size="15"
                    v-if="record.mv"
                    @click.stop="
                      $router.push({
                        name: '/video/detail',
                        query: { id: record.mv },
                      })
                    "
                  />
                </a-space>
              </div>
              <div v-if="dataIndex === 'ar'" class="ar">
                <template v-for="(item, index) in record.ar">
                  <span>{{ index !== 0 ? ' / ' : '' }}</span>
                  <span
                    class="txt-pointer txt-hover"
                    @click.stop="
                      $router.push({
                        path: '/listen/singer/detail',
                        query: { id: item.id },
                      })
                    "
                    >{{ item.name }}</span
                  >
                </template>
              </div>
              <div v-if="dataIndex === 'al'" class="al">
                <span
                  class="txt-pointer txt-hover"
                  @click.stop="
                    $router.push({
                      path: '/listen/album/detail',
                      query: { id: record.al.id },
                    })
                  "
                  >{{ record.al.name }}</span
                >
              </div>
              <div v-if="dataIndex === 'dt'">
                <span>{{ dealDt(record.dt) }}</span>
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
    word-spacing: nowrap;
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
