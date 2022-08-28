<template>
  <div class="nav-header">
    <el-icon v-if="changeB == true" class="menu-icon" @click="changeIcon"
      ><Expand
    /></el-icon>
    <el-icon v-else class="menu-icon" @click="changeIcon"><Fold /></el-icon>
    <div class="content">
      <HyBreadcrumb :breadcrumbs="breadcrumbValue"></HyBreadcrumb>
      <UserInfo></UserInfo>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import UserInfo from "./user-info.vue";
import HyBreadcrumb, { IBreadcrumb } from "@/base-ui/breadcrumb/index";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { pathMapBreadcrumbs } from "@/utils/map-menus";

const breadcrumbValue = computed(() => {
  const store = useStore();
  const userMenus = store.state.login.userMenus;
  const route = useRoute();
  const currentPath = route.path;
  return pathMapBreadcrumbs(userMenus, currentPath);
});

let changeB = ref(true);

const changeIcon = () => {
  changeB.value = !changeB.value;
  emit("foldChange", changeB.value);
};

const emit = defineEmits(["foldChange"]);
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  align-items: center;

  .menu-icon {
    font-size: 25px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
