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
          <el-button type="primary" :icon="Search" @click="handleQuery">搜索</el-button>
          <el-button type="primary" :icon="Refresh" @click="handleReset">重置</el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts" setup>
import { Search, Refresh } from "@element-plus/icons-vue";
import { PropType, reactive, ref } from "vue";
import HyForm from "@/base-ui/form";
import { defineEmits } from "vue";
const props = defineProps({
  formConfig: {
    type: Object,
    default: () => {},
  },
});
console.log(props.formConfig);
// 双向绑定的属性应该是由配置文件的field来决定
// 优化一：formData中的属性应该动态的来决定
const formItems = props.formConfig?.formItem ?? []
const formOriginData:any = {}
for(const item of formItems){
  formOriginData[item.field] = ''
}
const formData = ref(formOriginData);

// 点击重置
const emit = defineEmits(['resetBtnClick','queryBtnClick'])
const handleReset = () => {
  console.log(formOriginData);
  formData.value = formOriginData
  emit('resetBtnClick')
}

// 点击搜索
const handleQuery = () => {
  emit('queryBtnClick',formData.value)
}
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
