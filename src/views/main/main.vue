<template>
    <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '200px' : '58px'">
        <nav-menu :isCollapse="isCollapse"></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
            <nav-header @foldChange="getChange"></nav-header>
        </el-header>
        <el-main class="page-content">
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import NavMenu from '@/components/nav-menu/src/nav-menu.vue';
import NavHeader from '@/components/nav-header';

import {ref} from 'vue'
const isCollapse = ref(true)
const getChange = (getChangeB:boolean) =>{
    console.log(getChangeB);
    isCollapse.value = getChangeB
    console.log(isCollapse.value);
}
</script>

<style lang="less" scoped>
.main{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.main-content,
.page{
    height: 100%;
}

.page-content{
    height: calc(100% - 48px);
}

.el-header,
.el-footer{
    display: flex;
    color: #333;
    text-align: center;
    align-items: center;
}

.el-header{
    height: 48px !important;
}

.el-aside{
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width .3s linear;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar{
        display: none;
    }
}

.el-main{
    color: #333;
    text-align: center;
    background-color: #f0f2f5;
}
</style>