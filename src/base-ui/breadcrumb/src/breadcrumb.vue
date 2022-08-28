<template>
  <el-breadcrumb separator="/">
    <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { PropType, ref } from "vue";
import { IBreadcrumb } from '../types/index'
const props = defineProps({
    breadcrumbs:{
        type: Array as PropType<IBreadcrumb[]>,
        default:() => []
    }
})
</script>

<style lang="less" scoped></style>
