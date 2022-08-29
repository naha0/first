<template>
  <div class="search">
    <hy-form
      :formItems="props.formConfig.formItem"
      :itemStyle="props.formConfig.itemStyle"
      :labelWidth="props.formConfig.labelWidth"
      :col-layout="props.formConfig.colLayout"
      v-model="formData"
    >
      <template #header>
        <h3>高级检索</h3>
      </template>
      <template #footer>
        <div class="rightBtn">
          <el-button type="primary" :icon="Search">搜索</el-button>
          <el-button type="primary" :icon="Refresh">重置</el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts" setup>
import { Search, Refresh } from "@element-plus/icons-vue";
import { PropType, reactive, ref } from "vue";
import HyForm from "@/base-ui/form";
const formData = ref({
  id: "",
  name: "",
  password: "",
  sport: "",
  createTime: "",
});
const props = defineProps({
  formConfig: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="less" scoped>
.search {
  background-color: #fff;
  .rightBtn {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 20px;
    padding-right: 10px;
  }
}
</style>
