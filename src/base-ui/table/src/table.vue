<template>
  <div class="content">
    <div class="header">
      <slot name="header">
        <div class="title">{{title}}</div>
        <div class="handler">
          <slot name="header-handler"></slot>
        </div>
      </slot>
    </div>
    <el-table :data="props.userList" style="width: 100%" border>
      <el-table-column
        v-if="showSelectColumn"
        @selection-change="handleSelectionChange"
        type="selection"
        align="center"
        width="80"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="item in props.propList" :key="item.prop">
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ITableItem } from "../type";
import { UserTable } from "@/views/main/system/user/config/search.config";
import { ref } from "vue";
import { defineEmits } from "vue";
// const props = defineProps({
//   userList: {
//     type: Array,
//     required: true,
//   },
//   propList: {
//     type: Array,
//     required: true,
//   },
// });

const props = defineProps<{
  title:string;
  userList: Array<object>;
  propList: ITableItem[];
  showIndexColumn: boolean;
  showSelectColumn: boolean;
}>();

const emit = defineEmits(["selectionChange"]);
const multipleSelection = ref<UserTable[]>([]);
const handleSelectionChange = (value: UserTable[]) => {
  console.log(value);
  emit("selectionChange");
};
</script>

<style lang="less" scoped>
.content {
  background-color: #fff;
  padding: 20px;
  border-top: 20px solid #f0f2f5;
  .header{
    display: flex;
    margin-bottom: 20px;
    .title{
      font-size: 18px;
      font-weight: 700;
      float: left;
    }
    .handler{
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }
  .footer{
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
}
</style>
