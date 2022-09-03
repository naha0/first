<template>
  <HyTable
    v-model:page="page"
    :userList="dataList"
    :listCount="listCount"
    v-bind="props.contentTableConfig"
  >
    <template #header-handler="scope">
      <el-button v-if="isCreate" @click="openNewDialog">新增用户</el-button>
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
    <template #handler="scope">
      <div>
        <el-button @click="openEditDialog(scope.row)" type="primary">编辑</el-button>
        <el-button @click="deleteRow(scope.row)" type="danger">删除</el-button>
      </div>
    </template>
    <!-- <template v-for="item in otherSlotList" :key="item.prop" #[item.slotName]="scope">
      <template v-if="item.slotName">
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </template> -->
    <template #footer> </template>
  </HyTable>
</template>

<script lang="ts" setup>
import { ref, computed, watch,defineEmits } from "vue";
import { useStore } from "vuex";
import HyTable from "@/base-ui/table/index";
import { contentTableConfig } from "@/views/main/system/user/config/content.config";
import { defineProps } from "vue";
import { usePermission } from "@/hooks/use-permission";

const store = useStore();

// const userList = store.state.system.userList;
// const userCount = store.state.system.userCount;

const props = defineProps<{
  pageName: string;
  contentTableConfig: any;
}>();

// 获取操作的权限
const isCreate = usePermission(props.pageName,'create')
const isUpdate = usePermission(props.pageName,'update')
const isDelete = usePermission(props.pageName,'delete')
const isQuery = usePermission(props.pageName,'query')


// 动态插槽
const otherSlotList = props.contentTableConfig?.propList.filter((item: any) => {
  if (item.slotName === 'createAt') return false
  if (item.slotName === 'updateAt') return false
  if (item.slotName === 'status') return false
  if (item.slotName === 'handler') return false
  return true
})

console.log(props.pageName);

const page = ref({
  currentPage: 1,
  pageSize: 10,
});
watch(page, () => {
  console.log(page);
  return getPageData(page);
});

// 发出网络请求
const getPageData = (queryInfo: any = {}) => {
  // 如果没有查找权限直接返回
  console.log('isQuery',isQuery);
  if(!isQuery) return
  console.log("发出网络请求", queryInfo);
  store.dispatch("system/getPageListAction", {
    pageName: props.pageName,
    queryInfo: {
      offset: (page.value.currentPage - 1) * page.value.pageSize,
      size: page.value.pageSize,
      ...queryInfo
    },
  });
};
getPageData();
defineExpose({ getPageData });

const dataList = computed(() =>
  store.getters[`system/pageListData`](props.pageName)
);
console.log("dataList", dataList);
const listCount = computed(() =>
  store.getters[`system/pageListCount`](props.pageName)
);
console.log("listCount", listCount);
const changeBtn = (status: number) => {
  if (status === 1) {
    status = 0;
  } else {
    status = 1;
  }
  console.log(status);
};

// 删除
const deleteRow = (row:any) =>{
  console.log(row);
  store.dispatch('system/deletePageDataAction',{
    pageName:props.pageName,
    id:row.id
  })

}

// 打开对话框
const emit = defineEmits(['newDialog','editDialog'])
const openNewDialog = () =>{
  emit('newDialog',true)
}
const openEditDialog = (row:any) =>{
  emit('editDialog',row)
}
</script>

<style lang="less" scoped>
.content {
  background-color: #fff;
  padding: 20px;
  border-top: 20px solid #f0f2f5;
}
</style>
