<template>
  <HyTable v-model:page="page" :userList="dataList" :listCount="listCount" v-bind="props.contentTableConfig">
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
      
    </template>
  </HyTable>
</template>

<script lang="ts" setup>
import { ref,computed,watch } from "vue";
import { useStore } from 'vuex'
import HyTable from "@/base-ui/table/index";
// import { contentTableConfig } from "@/views/main/system/user/config/content.config";
import { defineProps } from "vue";

const store = useStore();

// const userList = store.state.system.userList;
// const userCount = store.state.system.userCount;

const props = defineProps<{
    pageName:String,
    contentTableConfig:any
}>()

// 动态插槽
// const otherSlotList = props.contentTableConfig?.propList.filter((item: any) => {
//   if (item.slotName === 'createAt') return false
//   if (item.slotName === 'updateAt') return false
//   if (item.slotName === 'enable') return false
//   if (item.slotName === 'handler') return false
//   return true
// })

console.log(props.pageName);

const page = ref({
  currentPage:1,
  pageSize:10
})
watch(page,()=>{
  console.log(page);
  return getPageData(page)
})

// 发出网络请求
const getPageData = (queryInfo:any = {}) => {
  console.log('发出网络请求',queryInfo);
  store.dispatch("system/getPageListAction", {
  pageName:props.pageName,
  queryInfo: {
    offset: (page.value.currentPage - 1) * page.value.pageSize,
    size: page.value.pageSize,
    // ...queryInfo
  },
});
}
getPageData()
defineExpose({getPageData})


const dataList = computed(()=> store.getters[`system/pageListData`](props.pageName))
console.log('dataList',dataList);
const listCount = computed(() => store.getters[`system/pageListCount`](props.pageName))
console.log('listCount',listCount);
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
