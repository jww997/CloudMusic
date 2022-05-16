<script lang="ts" setup>
import { ref } from 'vue';
import account from '@/apis/account/index';
import account_R from '@/apis/account/typeResult';
import { useStore } from 'vuex';
import { ActionTypes } from '@/store/modules/account/action-types';

import List from '@/views/listen/songlist/list.vue';
import MyImage from '@/components/myImage/index.vue';

const store = useStore();

const uid = '344460908';
const results1 = ref<account_R.RESULT_USER_DETAIL>();
const results2 = ref<account_R.RESULT_USER_PLAYLIST>();

const init = async () => {
  store.dispatch(ActionTypes.SET_ACCOUNT_STATUS);

  results1.value = await account.getUserDetail({ uid });
  results2.value = await account.getUserPlaylist({ uid });
  // await account.getUserAccount();
  // await account.getUserSubcount();
  // await account.getUserLevel();
  // await account.getUserBinding({ uid });
  // await account.getUserPeplacephone({
  //   phone: '15812811722',
  //   oldcaptcha: 1234,
  //   captcha: 1234,
  // });
  // await account.getUserUpdate({
  //   gender: 0,
  //   birthday: 878745600000,
  //   nickname: '丶Gavinn',
  //   province: 440000,
  //   city: 441900,
  //   signature: '\n以前的你，哭着哭着就笑了\n现在的你，笑着笑着就哭了',
  // });
  // await account.getUserCommentHistory({ uid });
  // await account.getUserDj({ uid });
  // await account.getUserFollows({ uid });
  // await account.getUserFolloweds({ uid });
  // await account.getUserEvent({ uid });
  // await account.getEventForward({
  //   uid,
  //   evId: 20582519574,
  //   forwards: '测试内容',
  // });
  // await account.getEventDel({ evId: 21447285184 });
  // await account.getFollow({ id: 21447485184, t: 1 });
  // await account.getUserRecord({ uid, type: 1 });
};
init();
</script>

<template>
  <div>
    <div class="user">
      <MyImage
        :src="results1.profile.avatarUrl"
        :width="200"
        :height="200"
        rounded
        v-if="results1"
      />
    </div>
    <List :list="results2?.playlist" v-if="results2" />
  </div>
</template>

<style lang="less" scoped>
.user {
  :deep(.arco-avatar) {
    overflow: hidden;
  }
}
</style>
