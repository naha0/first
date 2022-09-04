<template>
  <div class="user">
    <PageSearch
      :formConfig="formConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></PageSearch>
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :pageName="pageName"
      @newDialog="handleNewData"
      @editDialog="handleEditData"
    ></PageContent>
    <PageModel
      :defaultInfo="defaultInfo"
      ref="pageModelRef"
      pageName="users"
      :modelConfig="modelConfigRef"
    ></PageModel>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import PageSearch from "@/components/page-search/index";
import { formConfig } from "./config/search.config";
import { useStore } from "vuex";
import { contentTableConfig } from "./config/content.config";
import PageContent from "@/components/page-content/index";
import { usePageSearch } from "@/hooks/use-page-search";
import PageModel from "@/components/page-model/index";
import { modelConfig } from "./config/model.config";
import { usePageModel } from "@/hooks/use-page-model";
const pageName = "users";
// const PageContentRef = ref<InstanceType<typeof PageContent>>()
// const handleResetClick = () => {
//   console.log("重置");
//   PageContentRef.value?.getPageData()
// };
// const handleQueryClick = (queryInfo:any) => {
//   console.log(PageContentRef.value);
//   PageContentRef.value?.getPageData(queryInfo)
// };
const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch();

// pageModel的逻辑
const newCallback = () => {
  const passwordItem = modelConfig.formItems.find(
    (item) => item.field === "password"
  );
  passwordItem!.isHidden = false;
  console.log(passwordItem);

  console.log(passwordItem!.isHidden);
};
const editCallback = () => {
  const passwordItem = modelConfig.formItems.find(
    (item) => item.field === "password"
  );
  passwordItem!.isHidden = true;
  console.log(passwordItem);

  console.log(passwordItem!.isHidden);
};

// 动态添加部门和角色列表
const store = useStore();
const modelConfigRef = computed(() => {
  const departmentItem = modelConfig.formItems.find(
    (item) => item.field === "departmentId"
  );
  if (departmentItem!.options && store.state.entireDepartment) {
    console.log("store.state.entireDepartment", store.state.entireDepartment);

    departmentItem!.options = store.state.entireDepartment.map((item: any) => {
      return { title: item.name, value: item.id };
    });
  }
  const roleItem = modelConfig.formItems.find(
    (item) => item.field === "roleId"
  );
  console.log("store.state.entireRole", store.state.entireRole);

  if (roleItem!.options && store.state.entireRole) {
  console.log("store.state.entireRole", store.state.entireRole);

    roleItem!.options = store.state.entireRole.map((item: any) => {
      return { title: item.name, value: item.id };
    });
  }
  return modelConfig
});

const [pageModelRef, defaultInfo, handleNewData, handleEditData] = usePageModel(
  newCallback,
  editCallback
);
</script>

<style lang="less" scoped></style>
