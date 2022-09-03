import { ref } from 'vue'
import PageModel from '@/components/page-model';

export function usePageModel():any {
    const pageModelRef = ref<InstanceType<typeof PageModel>>();
    const defaultInfo = ref({})
    const handleNewData = () => {
        defaultInfo.value = {}
        if (pageModelRef.value) {
            console.log(pageModelRef.value);
            pageModelRef.value.dialogVisible = true
        }
    }

    const handleEditData = (row: any) => {
        defaultInfo.value = { ...row }
        console.log(defaultInfo.value);
        if (pageModelRef.value) {
            pageModelRef.value.dialogVisible = true
        }
    }
    return [pageModelRef, defaultInfo, handleNewData, handleEditData]
}