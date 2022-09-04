import { Store } from "element-plus/es/components/table/src/store"
import { createStore,useStore as useVuexStore } from "vuex"

import login from './login/login'
import { IRootState,IStoreType } from './types'
import system from './main/system/system'
import { ISystemState } from "./main/system/types"

import { getPageListData } from "@/service/main/system/system"

const store = createStore<IRootState>({

    state(){
        return {
            token: '',
            age: 19,
            entireDepartment:[],
            entireRole:[]
        }
    },
    mutations: {
        changeEntireDepartment(state,list){
            state.entireDepartment = list

        },
        changeEntireRole(state,list){
            state.entireRole = list
        }
    },
    actions: {
        async getInitialDataAction({commit}){
            // 请求部门和角色数据
            const departmentData = await getPageListData('/department/list',{
                offset:0,
                size:1000
            })
            const { list:departmentList } = departmentData.data
            const roleData = await getPageListData('/role/list',{
                offset:0,
                size:100
            })
            const {list:roleList} = roleData.data
            commit('changeEntireDepartment',departmentList)
            commit('changeEntireRole',roleList)
        }
    },
    getters: {},
    modules: {
        login,
        system
    }
})

export function setupStore(){
    store.dispatch('login/loadLocalLogin')
}

export function useStore():Store<IStoreType>{
    return useVuexStore()
}

export default store