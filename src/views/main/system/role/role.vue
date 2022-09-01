<template>
  <div class="role">
    <PageSearch :formConfig="formConfig"></PageSearch>
    <PageContent
      :contentTableConfig="contentTableConfig"
      :pageName="pageName"
    ></PageContent>
  </div>
</template>

<script lang="ts" setup>
import PageContent from "@/components/page-content/src/page-content.vue";
import { contentTableConfig } from "../role/config/content.config";
import { formConfig } from "../role/config/search.config";
import PageSearch from "@/components/page-search/src/page-search.vue";
const pageName = "role";
</script>

<style lang="less" scoped></style>
