import { ref } from 'vue'
import PageModel from '@/components/page-model';


type CallbackFn = () => void

export function usePageModel(newCallback?:CallbackFn,editCallback?:CallbackFn):any {
    const pageModelRef = ref<InstanceType<typeof PageModel>>();
    const defaultInfo = ref({})
    const handleNewData = () => {
        defaultInfo.value = {}
        if (pageModelRef.value) {
            console.log(pageModelRef.value);
            pageModelRef.value.dialogVisible = true
        }
        newCallback && newCallback()
    }

    const handleEditData = (row: any) => {
        defaultInfo.value = { ...row }
        console.log(defaultInfo.value);
        if (pageModelRef.value) {
            pageModelRef.value.dialogVisible = true
        }
        editCallback && editCallback()
    }
    return [pageModelRef, defaultInfo, handleNewData, handleEditData]
}