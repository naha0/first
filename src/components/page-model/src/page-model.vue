<template>
    <div class="page-model">
      <el-dialog
        v-model="dialogVisible"
        title="新建用户"
        width="30%"
        center
      > 
      <!-- <span
      >It should be noted that the content will not be aligned in center by
      default</span
    > -->
        <HyForm v-bind="modelConfig" v-model="formData"></HyForm>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogVisible = false"
              >确定</el-button
            >
          </span>
        </template>
      </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import HyForm from "@/base-ui/form";
import {ref,watch} from 'vue'
const dialogVisible = ref(false)
defineExpose({dialogVisible})
const props = defineProps<{
    modelConfig:any,
    defaultInfo:any
}>()
const formData = ref<any>({})

watch(()=>props.defaultInfo,(newValue)=>{
    for(const item of props.modelConfig.formItems){
        console.log(newValue);
        formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
})
</script>

<style lang="less" scoped>
    
</style>