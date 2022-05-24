<script lang="ts" setup>
import R from '@/apis/listen/typeResult';
import List from '@/views/listen/songlist/list.vue';
import Box from '@/views/listen/dj/box.vue';

defineProps<{
  searchQcReminder: null;
  djRadiosCount: number;
  djRadios: R.RADIO[];
}>();
</script>

<template>
  <div>
    <List :list="djRadios">
      <template v-slot="{item}">
        <Box :name="item.name" :id="item.id" pic-url="item.cover"/>
      </template>
    </List>
  </div>
</template>

<style lang="less" scoped></style>
