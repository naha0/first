<template>
  <div class="nav-header">
      <el-icon v-if="changeB==true" class="menu-icon" @click="changeIcon"><Expand /></el-icon>
      <el-icon v-else class="menu-icon" @click="changeIcon"><Fold /></el-icon>
      <span>面包屑</span>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

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
    .menu-icon{
      font-size: 25px;
      cursor: pointer;
    }
  }
</style>