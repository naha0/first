<template>
  <div class="hy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="props.labelWidth">
      <el-row :gutter="20">
        <template v-for="item in props.formItems" :key="item.label">
          <el-col :span="8" v-bind="props.colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="props.itemStyle"
              v-if="!item.isHidden"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  v-model="modelValue[`${item.field}`]"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-model="modelValue[`${item.field}`]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :value="option.title"
                    :key="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-model="modelValue[`${item.field}`]"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed, defineEmits, watch, ref } from "vue";
import { IFormItem } from "../types";

const props = withDefaults(
  defineProps<{
    formItems?: IFormItem[];
    labelWidth?: string;
    itemStyle?: any;
    colLayout?: any;
    modelValue: any;
  }>(),
  {
    formItems: () => [],
    labelWidth: "100px",
    itemStyle: () => ({ padding: "10px 40px" }),
    colLayout: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24,
    }),
  }
);
const emit = defineEmits(["update:modelValue"]);

// const formData = ref({ ...props.modelValue });
// watch(props.modelValue,(newValue,oldValue)=>{
// console.log(newValue);
// })

// watch(
//   formData,
//   (newValue, oldValue) => {
//     console.log(newValue);
//     emit("update:modelValue", newValue);
//   },
//   {
//     deep: true,
//     immediate: true,
//   }
// );

const handleValueChange = (value: any, field: string) => {
  console.log(value, field);
  emit("update:modelValue", { ...props.modelValue, [field]: value });
};
</script>

<style lang="less" scoped>
.hy-form {
  padding-top: 22px;
}
</style>
