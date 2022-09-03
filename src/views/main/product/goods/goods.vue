<template>
    <div class="goods">
      <!-- <PageSearch :formConfig="formConfig"></PageSearch> -->
      <PageContent
        :contentTableConfig="contentTableConfig"
        :pageName="pageName"
      >
      <template #oldPrice="scope">
        {{'¥' + scope.row.oldPrice}}
    </template>
      <template #image="scope">
      <el-image
        style="width: 100px; height: 100px"
        :src="scope.row.imgUrl"
        :preview-src-list="[scope.row.imgUrl]"
        :initial-index="4"
        fit="cover"
      />
    </template>
    </PageContent>
    </div>
  </template>
  
  <script lang="ts" setup>
  import PageContent from "@/components/page-content/src/page-content.vue";
  import { contentTableConfig } from "../goods/config/content.config";
//   import { formConfig } from "../role/config/search.config";
  import PageSearch from "@/components/page-search/src/page-search.vue";
  const pageName = "goods";
  </script>
  
  <style lang="less" scoped></style>
  