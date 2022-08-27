<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="" class="img" />
      <span class="title">Vue3+Ts</span>
    </div>

    <el-menu
      default-active="2"
      :collapse = !isCollapse
      :width = "isCollapse ? '200px' : '58px'"
      class="el-menu-vertical"
      background-color="#8bd0e2"
      text-color="#000"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in userMenus" :key="item.id">
       <!-- 一级菜单 -->
        <template v-if="item.type === 1">
        <!-- 一级菜单展开的标题 -->
          <el-sub-menu :index="item.url">
            <template #title>
              <el-icon v-if="item.icon=='el-icon-monitor'"><Monitor /></el-icon>
              <el-icon v-if="item.icon=='el-icon-setting'"><Setting /></el-icon>
              <el-icon v-if="item.icon=='el-icon-goods'"><Goods /></el-icon>
              <el-icon v-if="item.icon=='el-icon-chat-line-round'"><ChatLineRound /></el-icon>
              <span>{{item.name}}</span>
            </template>

            <!-- 遍历里面的item -->
            <template v-if="item.children">
              <el-menu-item v-for="subitem in item.children" :index="subitem.url" :key="subitem.id"
                            @click="subItemClick(subitem)">
                <span>{{subitem.name}}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <!-- 二级菜单 -->
        <template v-else>
          <el-menu-item :index="item.url">
          <template #title>
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { useStore } from "@/store";
import { computed } from "@vue/reactivity";
import {ref} from 'vue'
const store = useStore();

const userMenus = computed(() => {
  console.log(store.state.login.userMenus);
  return store.state.login.userMenus;
});

defineProps({
  isCollapse:Boolean
})

const subItemClick = (item:any) =>{
  console.log(item);
  router.push({
    path:item.url ?? '/not-found'
  })
}

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #7abed9;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }

  // .el-menu-vertical:not(.el-menu--collapse) {
  //   width: 200px;
  //   min-height: 400px;
  // }
  
  .el-menu{
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #3a3d41 !important;

    .el-menu-item {
      padding-left: 50px !important;
      background-color: #8bd0e2 !important;
    }
  }
  ::v-deep .el-submenu__title {
    background-color: #4f5254 !important;
  }
  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #8996a4 !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
