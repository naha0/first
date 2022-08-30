<template>
  <div class="user">
    <PageSearch :formConfig="formConfig"></PageSearch>
    <PageContent :contentTableConfig="contentTableConfig" pageName="user"></PageContent>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from "@/components/page-search/index";
import { formConfig } from "./config/search.config";
import { useStore } from "vuex";
import { contentTableConfig } from "./config/content.config";
import PageContent from '@/components/page-content/index'


</script>

<style lang="less" scoped>
</style>
