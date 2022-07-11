<script lang="ts" setup>
import { FieldRule } from '@arco-design/web-vue/es/form/interface'

const props = defineProps<{
  model: any; // 表单数据对象
  layout: 'horizontal' | 'vertical' | 'inline'; // 表单的布局方式，包括水平、垂直、多列
  size: 'mini' | 'small' | 'medium' | 'large'; // 表单控件的尺寸
  labelColProps: { span: number; offset: number }; // 标签元素布局选项。参数同 <col> 组件一致	
  wrapperColProps: { span: number; offset: number }; // 标签元素布局选项。参数同 <col> 组件一致	
  labelAlign: 'left' | 'right'; // 标签的对齐方向
  disabled: boolean; // 是否禁用表单
  rules: Record<string, FieldRule | FieldRule[]>; // 表单项校验规则
  autoLabelWidth: boolean; // 是否开启自动标签宽度，仅在 layout="horizontal" 下生效。

  options: {
    field: string; // 表单元素在数据对象中的path（数据项必填）
    label: string; // 标签的文本
    showColon?: boolean; // 是否显示冒号
    noStyle?: boolean; // 是否去除样式
    disabled?: boolean; // 是否禁用
    help?: ''; // 帮助文案
    extra?: ''; // 额外显示的文案
    required?: boolean; // 是否必须填写
    rules?: FieldRule | FieldRule[]; // 表单项校验规则（优先级高于 form 的 rules）
    validateStatus?: 'success' | 'warning' | 'error' | 'validating'; // 校验状态
    validateTrigger?: string[]; // 触发校验的事件

    optionType: 'input'; // input输入框
  }[]; // 配置对象
}>();

defineEmits([
  ...['submit', 'submitSuccess', 'submitFailed'],
  ...['validate', 'validateField', 'resetFields', 'clearValidate', 'setFields']
])

console.log('options = ', props.options)

</script>

<template>
  <div>


    <a-form ref="formRef" v-bind="$props" @submit="$emit('submit')" @submit-success="$emit('submitSuccess')"
      @submit-failed="$emit('submitFailed')" @validate="$emit('validate')" @validateField="$emit('validateField')"
      @resetFields="$emit('resetFields')" @clearValidate="$emit('clearValidate')" @setFields="$emit('setFields')">
      <template v-for="item in options">
        <a-form-item v-bind="item">
          <template v-if="item.optionType === 'input'">
            <a-input v-model="model[item.field]" />
          </template>






        </a-form-item>
      </template>


      <!-- <a-form-item field="nickname" label="昵称" :rules="[{ required: true, message: '请输入昵称' }]"
        :validate-trigger="['change', 'input']">
        <a-input v-model="model.nickname" />
      </a-form-item>
      <a-form-item field="signature" label="介绍" :validate-trigger="['change', 'input']">
        <a-input v-model="model.signature" />
      </a-form-item>
      <a-form-item field="gender" label="性别">
        <a-radio-group v-model="model.gender">
          <a-radio :value="0">保密</a-radio>
          <a-radio :value="1">男</a-radio>
          <a-radio :value="2">女</a-radio>
        </a-radio-group>
      </a-form-item> -->

    </a-form>
  </div>
</template>

<style lang="less" scoped>
</style>
