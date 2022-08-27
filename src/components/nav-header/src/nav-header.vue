<template>
  <div class="nav-header">
      <el-icon v-if="changeB==true" class="menu-icon" @click="changeIcon"><Expand /></el-icon>
      <el-icon v-else class="menu-icon" @click="changeIcon"><Fold /></el-icon>
      <div class="content">
        <span>面包屑</span>
        <UserInfo></UserInfo>
      </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import UserInfo from './user-info.vue';
  let changeB = ref(true)

  const changeIcon = () =>{
    changeB.value = !changeB.value
    emit('foldChange',changeB.value)
    console.log(111);
  }
  
  const emit = defineEmits(['foldChange'])

</script>

<style lang="less" scoped>
  .nav-header{
    display: flex;
    width: 100%;

    .menu-icon{
      font-size: 25px;
      cursor: pointer;
    }

    .content{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      padding: 0 20px;
    }
  }
</style>