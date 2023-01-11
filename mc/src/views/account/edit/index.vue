<script lang="ts" setup>
import {Notification} from "@arco-design/web-vue"
import {ref, onMounted} from "vue"
import {useStore} from "vuex"
import _ from "lodash"
import dayjs from "dayjs"
import {router} from "@/router"
import account from "@/apis/account/index"
import * as TYPE from "./_type"
import * as CONSTANT from "./_constant"
import MyImage from "@/components/myImage/index.vue"
import {useRoute} from "vue-router";

const store = useStore()
const route = useRoute()

const id = <string>route.query.id

const results1 = ref<TYPE.RESULT>(CONSTANT.RESULT)

interface Form {
  nickname: string
  signature: string
  gender: 0 | 1 | 2
  birthday: number
}

const formRef = ref<HTMLFormElement | null>(null);
const form = ref<Form>({
  nickname: "",
  signature: "",
  gender: 0,
  birthday: 0,
})
const avatarUrl = ref<string>("");

// 修改头像
const handleUploadAvatarSuccess = async (e) => {
  try {
    const [{url}] = e
    console.log("e = ", e)
    console.log(url)
    avatarUrl.value = url
    Notification.success("上传成功");
  } catch (err) {
  }
}
const handleUploadAvatarError = () => {
  Notification.error("上传失败");

}

// 检查昵称重复
const handleChangeNickname = async (nickname: string) => {
  try {
    if (results1.value.profile.nickname === form.value.nickname) return (formRef.value as HTMLFormElement).clearValidate();
    const res = await account.getNicknameCheck({nickname});
    if (res.code === 200) {
      if (res.duplicated) {
        (formRef.value as HTMLFormElement).setFields({nickname: {status: "error", message: "昵称重复"}});
        return Promise.reject()
      } else {
        return (formRef.value as HTMLFormElement).clearValidate();
      }
    } else {
      (formRef.value as HTMLFormElement).setFields({nickname: {status: "error", message: res.message}});
      return Promise.reject()
    }
  } catch (err) {
  }
}

// 保存
const handleSubmit = async ({values}: { values: Form }) => {
  try {
    await handleChangeNickname(form.value.nickname)
    await (formRef.value as HTMLFormElement).validate();
    const res = await account.postUserUpdate(values);
    if (res.message) {
      Notification.info(res.message);
    } else {
      Notification.success("保存成功");
    }
    if (res.code === 200) router.back();
  } catch (err) {
    Notification.error("保存失败");
  }
}

onMounted(async () => {
  try {
    const res = await account.getUserDetail({uid: id})
    results1.value = res
    const {birthday} = results1.value.profile
    // const timestamp = dayjs().valueOf()
    // console.log("数据：", birthday)
    // console.log("当前：", timestamp)
    // console.log("目标： ", 878745600000)
    // const t = birthday
    Object.assign(form.value, {birthday})
    Object.assign(form.value, _.pick(res.profile, ["nickname", "signature", "gender"]))
    avatarUrl.value = res.profile.avatarUrl
  } catch (err) {
  }
})
</script>

<template>
  <div class="flex">

    <div class="flex-grow">
      <a-form ref="formRef" :model="form" @submit="handleSubmit">
        <a-form-item field="nickname" label="昵称">
          <a-input v-model="form.nickname" placeholder="请输入昵称" @change="handleChangeNickname"/>
        </a-form-item>
        <a-form-item field="signature" label="介绍">
          <a-textarea v-model="form.signature" allow-clear placeholder="请输入介绍" show-word-limit/>
        </a-form-item>
        <a-form-item field="gender" label="性别">
          <a-radio-group v-model="form.gender">
            <a-radio :value="1">男</a-radio>
            <a-radio :value="2">女</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item field="birthday" label="生日">
          <a-date-picker v-model="form.birthday" placeholder="请选择生日" value-format="timestamp"/>
        </a-form-item>
        <a-form-item>
          <a-space>
            <a-button class="px-10" html-type="submit" type="primary">保存</a-button>
            <a-button class="px-10" @click="$router.back()">取消</a-button>
          </a-space>
        </a-form-item>
      </a-form>
    </div>
    <div class="ml-20 flex-shrink flex flex-col items-center">
      <MyImage :height="200" :src="avatarUrl" :width="200" rounded/>
      <a-upload
          :action="`/avatar/upload?timestamp=${dayjs().valueOf()}`"
          :show-file-list="false"
          accept="multipart/form-data"
          name="imgFile"
          with-credentials
          @error="handleUploadAvatarError"
          @success="handleUploadAvatarSuccess"
      >
        <template #upload-button>
          <a-button class="mt-10 px-4" type="primary">修改头像</a-button>
        </template>
      </a-upload>
    </div>
  </div>
</template>

<style lang="less" scoped>
</style>
