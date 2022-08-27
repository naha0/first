<template>
  <div>
    <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <span class="userName">{{name}}</span>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>我的账号</el-dropdown-item>
        <el-dropdown-item divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  </div>
  
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'; 
const store = useStore()
const name = computed(() => store.state.login.userInfo.name)

</script>


<style scoped lang="less">
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  .userName{
    margin-left: 5px;
  }
}
</style>
