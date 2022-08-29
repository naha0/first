<template>
  <div class="content">
    <el-table :data="props.userList" style="width: 100%" border>
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
  </div>
</template>

<script lang="ts" setup>
import { ITableItem } from "../type";
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
  userList: Array<object>;
  propList: ITableItem[];
}>();
</script>

<style lang="less" scoped>
.content {
  background-color: #fff;
  padding: 20px;
  border-top: 20px solid #f0f2f5;
}
</style>
