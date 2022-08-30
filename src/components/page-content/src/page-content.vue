<template>
  <HyTable :userList="userList" v-bind="contentTableConfig">
    <template #header-handler>
      <el-button>新增用户</el-button>
    </template>
    <template #status="scope">
      <el-button
        :type="scope.row.enable ? 'success' : 'danger'"
        @click="changeBtn(scope.row.enable)"
        >{{ scope.row.enable ? "启用" : "停用" }}</el-button
      >
    </template>
    <template #createAt="scope">
      <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
    </template>
    <template #updateAt="scope">
      <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
    </template>
    <template #handler>
      <el-button type="primary">编辑</el-button>
      <el-button type="danger">删除</el-button>
    </template>
    <template #footer>
      <el-pagination
        v-model:currentPage="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[100, 200, 300, 400]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </template>
  </HyTable>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from 'vuex'
import HyTable from "@/base-ui/table/index";
import { contentTableConfig } from "@/views/main/system/user/config/content.config";
import { defineProps } from "vue";

const store = useStore();

const userList = store.state.system.userList;
const userCount = store.state.system.userCount;

const props = defineProps<{
    pageName:String
}>()

console.log(props.pageName);
store.dispatch("system/getPageListAction", {
  pageUrl: `/${props.pageName}/list`,
  queryInfo: {
    offset: 0,
    size: 10,
  },
});

const currentPage4 = ref(4);
const pageSize4 = ref(100);

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};

const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};

const changeBtn = (status: number) => {
  if (status === 1) {
    status = 0;
  } else {
    status = 1;
  }
  console.log(status);
};
</script>

<style lang="less" scoped>
.content {
  background-color: #fff;
  padding: 20px;
  border-top: 20px solid #f0f2f5;
}
</style>
