<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane label="账号登录" name="account">
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane label="手机登录" name="phone">
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="keepPassword">记住密码</el-checkbox> 
      <el-link>忘记密码</el-link>
    </div>
    <el-button class="loginbtn" type="primary" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import LoginAccount from "./login-account.vue";
import LoginPhone from "./login-phone.vue";
import type { FormInstance } from 'element-plus'
import { ref } from "vue";

// 定义属性
const keepPassword = ref(true)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()
const currentTab = ref<string>("account")

// 定义方法
const handleLoginClick = () =>{
  // console.log(currentTab.value);
  if(currentTab.value == 'account'){
    accountRef.value?.loginAction(keepPassword.value)
  }else{
    console.log('开始验证码登录');
  }
 
}
</script>

<style lang="less" scoped>
.login-panel{
    width: 320px;
    .title{
        text-align: center;
    }
    .account-control{
      display: flex;
      justify-content: space-between;
    }
    .loginbtn{
      width: 100%;
    }
}
</style>
