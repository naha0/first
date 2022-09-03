<template>
    <div class="menu">
      <PageContent
        :contentTableConfig="contentTableConfig"
        :pageName="pageName"
      ></PageContent>
    </div>
  </template>
  
  <script lang="ts" setup>
  import PageContent from "@/components/page-content/src/page-content.vue";
  import { contentTableConfig } from "../menu/config/content.config";
  const pageName = "menu";
  </script>
  
  <style lang="less" scoped></style>
  