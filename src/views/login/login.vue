<template>
    <div class="login">
    欢迎
        <login-panel></login-panel>
    </div>
</template>

<script lang="ts" setup>
import LoginPanel from "./cpns/login-panel.vue";
</script>

<style lang="less" scoped>
.login{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: pink;
}
</style>