<template>
  <div class="user">
    <div class="search">
      <hy-form :formItems="formConfig.formItem" :itemStyle="formConfig.itemStyle"
      :labelWidth="formConfig.labelWidth" :col-layout="formConfig.colLayout"></hy-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import HyForm from "@/base-ui/form";
import { formConfig } from './config/search.config'

</script>

<style lang="less" scoped></style>
