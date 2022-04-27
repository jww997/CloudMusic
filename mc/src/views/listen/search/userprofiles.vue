<script lang="ts" setup>
import { ref } from 'vue';
import List from '@/views/listen/songlistDetail/list.vue';
import * as C from './_constant';
import account_R from '@/apis/account/typeResult';
import { INIT } from './_type';

const props = defineProps<{
  init: INIT;
  type: number;
}>();

const { init, type } = props;

const userprofiles = ref<account_R.USER[]>();

init({ type }, ({ result }) => {
  userprofiles.value = result.userprofiles;
});
</script>

<template>
  <div v-if="userprofiles">
    {{ userprofiles }}
    <!-- <List :list="songs" :columns="C.COLUMNS" /> -->
  </div>
</template>

<style lang="less" scoped></style>
