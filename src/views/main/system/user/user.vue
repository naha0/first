<template>
  <div class="user">
    <PageSearch :formConfig="formConfig"></PageSearch>
    <HyTable :userList="userList" :propList="propList">
      <template #status="scope">
        <el-button>{{scope.row.enable ? '启用' : '停用'}}</el-button>
      </template>
    </HyTable>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from "@/components/page-search/index";
import HyTable from '@/base-ui/table/index' 
import { formConfig } from "./config/search.config";
import { useStore } from "vuex";

const store = useStore();

const userList = store.state.system.userList
const userCount = store.state.system.userCount

store.dispatch("system/getPageListAction", {
  pageUrl: "/users/list",
  queryInfo: {
    offset: 0,
    size: 10,
  },
});

const propList = [
  {prop:'name', label:'用户名',minWidth:'100',slotName:'name'},
  {prop:'realname', label:'真实姓名',minWidth:'100',slotName:'realName'},
  {prop:'cellphone', label:'电话号码',minWidth:'100',slotName:'cellphone'},
  {prop:'enable', label:'状态',minWidth:'100',slotName:'status'},
  {prop:'createAt', label:'创建时间',minWidth:'100',slotName:'createAt'},
  {prop:'updateAt', label:'更新时间',minWidth:'100',slotName:'updateAt'},
]
</script>

<style lang="less" scoped>
  .content{
    background-color: #fff;
    padding: 20px;
    border-top: 20px solid #f0f2f5;
  }
</style>
