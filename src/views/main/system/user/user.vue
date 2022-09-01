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
    ></PageContent>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PageSearch from "@/components/page-search/index";
import { formConfig } from "./config/search.config";
import { useStore } from "vuex";
import { contentTableConfig } from "./config/content.config";
import PageContent from "@/components/page-content/index";
import { usePageSearch } from "@/hooks/use-page-search"
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
const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
</script>

<style lang="less" scoped></style>
