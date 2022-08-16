<template>
<div>
    <el-form ref="formRef" :model="account" :rules="rules">
        <el-form-item label="账号:" prop="name">
            <el-input v-model="account.name"></el-input>
        </el-form-item>
        <el-form-item label="密码: " prop="password">
            <el-input v-model="account.password" show-password></el-input>
        </el-form-item>
    </el-form>
</div>
</template>

<script lang='ts' setup>
import { ref,reactive } from 'vue';
import type { FormInstance } from 'element-plus'
import { rules } from '../config/account-config';
import localCache from '@/utils/cache'
import {useStore} from 'vuex'

const formRef = ref<FormInstance>()
const store = useStore()

const account = reactive({
    name:localCache.getCache('name'),
    password:localCache.getCache('password')
})

const loginAction = (isKeepPassword:boolean) =>{
    console.log('account开始登录');
    formRef.value?.validate(valid => {
        console.log(valid);
        // 1.判断是否需要记住密码
        if(isKeepPassword){
            // 本地存储
            localCache.setCache('name',account.name)
            localCache.setCache('password',account.password)
        }else{
            localCache.deleteCache('name')
            localCache.deleteCache('password')
        }
        // 2.开始进行身份验证
        store.dispatch('login/accountLoginAction',{...account})
    })
}


defineExpose({
    loginAction
});
</script>

<style scoped lang='less'></style>