<script lang="ts" setup>
import {ref} from "vue"
import {useStore} from "vuex"
import _ from "lodash"
import md5 from "md5"
import account from "@/apis/account/index"
import {PARAMS_LOGIN_CELLPHONE} from "@/apis/account/typeParams"
import {ActionTypes} from "@/store/modules/account/action-types"
import {router} from "@/router"

const store = useStore()

const emit = defineEmits(["reset"])

const type = ref<number>(1) // 1密码 2验证码 3重设密码

type FORM = {
  phone: string;
  password: string;
  captcha: string;
};

const form = ref<FORM>({
  phone: "",
  password: "",
  captcha: "",
})

const send = async () => {
  await account.getCaptchaSend({phone: form.value.phone})
}

const handleReset = () => {
  type.value = 3
  emit("reset")
}

const handleSubmit = async ({values}: { values: PARAMS_LOGIN_CELLPHONE }) => {
  type.value === 3 &&
  (await account.getRegisterCellphone({
    ...form.value,
    nickname: "",
  }))
  const res = await account.postLoginCellphone(
      _.assign(
          values,
          {password: ""},
          type.value === 1 ? {md5_password: md5(values.password)} : {},
      ),
  )
  store.dispatch(ActionTypes.SET_ACCOUNT_LOGIN, res)
  router.removeRoute("/account/login")
  router.back()
}
</script>

<template>
  <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
    <a-form-item field="phone" label="手机号">
      <a-input v-model="form.phone" placeholder="请输入手机号" allow-clear>
        <template #prepend> +86</template>
      </a-input>
    </a-form-item>
    <a-form-item
        field="password"
        :label="`${type === 3 ? '新' : ''}密码`"
        v-if="type === 1 || type === 3"
    >
      <a-input-password
          v-model="form.password"
          placeholder="请输入密码"
          allow-clear
      >
        <template #append v-if="type === 1 || type === 3">
          <a-button type="primary" @click="handleReset" :disabled="!form.phone"
          >重设密码
          </a-button
          >
        </template>
      </a-input-password>
    </a-form-item>
    <a-form-item field="captcha" label="验证码" v-if="type === 2 || type === 3">
      <a-input v-model="form.captcha" placeholder="请输入验证码" allow-clear>
        <template #append>
          <a-button type="primary" @click="send" :disabled="!form.phone"
          >发送验证码
          </a-button
          >
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-space>
        <a-button
            type="primary"
            html-type="submit"
            :disabled="
            !(
              (form.phone && form.password) ||
              (form.phone && form.captcha) ||
              (form.phone && form.password && form.captcha)
            )
          "
        >提交
        </a-button
        >
        <a-button @click="type = type === 1 ? 2 : 1"
        >切换{{ type === 1 ? "验证码" : "密码" }}
        </a-button
        >
      </a-space>
    </a-form-item>
  </a-form>
</template>

<style lang="less" scoped>
:deep(.arco-input-append) {
  padding: 0;
}
</style>
