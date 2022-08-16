<template>
  <div>
    <el-form ref="phoneFormRef" :model="phone" :rules="rules">
      <el-form-item label="账号:" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码: " prop="code">
        <div class="get-code">
            <el-input v-model="phone.code"></el-input>
            <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {ref,reactive} from 'vue'
import type { FormInstance } from 'element-plus'
import { rules } from '../config/phone-config';
const phoneFormRef = ref<FormInstance>()
const phone = reactive({
    num:'',
    code:''
})
</script>

<style scoped lang="less">
.get-code{
    display: flex;
}
</style>
