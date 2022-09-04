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
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="handleConfirm"
              >确定</el-button
            >
          </div>
        </template>
      </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import HyForm from "@/base-ui/form";
import store from "@/store";
import {ref,watch} from 'vue'
const dialogVisible = ref(false)
defineExpose({dialogVisible})
const props = defineProps<{
    modelConfig:any,
    defaultInfo:any,
    pageName:string
}>()
const formData = ref<any>({})

watch(()=>props.defaultInfo,(newValue)=>{
    for(const item of props.modelConfig.formItems){
        console.log(newValue);
        formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
})

// 点击确定
const handleConfirm = () => {
  dialogVisible.value = false
  if(Object.keys(props.defaultInfo).length){
    // 编辑
    store.dispatch('system/editPageDataAction',{
      pageName:props.pageName,
      editData:{...formData.value},
      id:props.defaultInfo.id
    })
  }else{
    // 新建
    console.log({...formData.value});
    store.dispatch('system/createPageDataAction',{
      pageName:props.pageName,
      newData:{...formData.value}
    })
  }
}
</script>

<style lang="less" scoped>
    
</style>