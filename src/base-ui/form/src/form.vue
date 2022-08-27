<template>
  <div class="hy-form">
    <el-form :label-width="props.labelWidth">
      <el-row :gutter="20">
        <template v-for="item in props.formItems" :key="item.label">
          <el-col :span="8" v-bind="props.colLayout">
            <el-form-item :label="item.label" :rules="item.rules" :style="props.itemStyle">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input :placeholder="item.placeholder" :show-password="item.type === 'password'"></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" style="width:100%">
                  <el-option
                    v-for="option in item.option"
                    :value="option.value"
                    :key="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker v-bind="item.otherOptions" style="width: 100%;">
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { IFormItem } from "../types";
const props = defineProps({
  formItems: {
    type: Array as PropType<IFormItem[]>,
  },
  labelWidth:{
    type:String,
    default:'100px'
  },
  itemStyle:{
    type:Object,
    default:() => ({ padding : '10px 30px'})
  },
  colLayout:{
    type:Object,
    default:() => ({ xl: 6,lg: 8,md: 12,sm: 24 ,xs: 24})
  }
});
</script>

<style lang="less" scoped>
    .hy-form{
        padding-top: 22px;

        
    }
</style>
