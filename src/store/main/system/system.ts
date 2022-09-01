import { Module } from "vuex";
import { IRootState } from "@/store/types";
import { ISystemState } from "./types";
import { getPageListData } from "@/service/main/system/system";
import { IDataType } from "@/service/typed";

const systemModule:Module<ISystemState,IRootState> = {
    namespaced:true,
    state(){
        return{
            userList:[],
            userCount:0,
            roleList:[],
            roleCount:0
        }
    },
    mutations:{
        changeUsersList(state,userList:any[]):void{
            state.userList = userList
        },
        changeUsersCount(state,userCount:number):void{
            state.userCount = userCount
        },
        changeRoleList(state,roleList:any[]){
            state.roleList = roleList
        },
        changeRoleCount(state,roleCount:number){
            state.roleCount = roleCount
        }
    },
    actions:{
        async getPageListAction({commit},payload:any){
            console.log(payload);
            const pageName = payload.pageName
            console.log(pageName);
            let pageUrl = `${pageName}/list`
            // 1.对页面发送请求
            let pageResult  = await getPageListData(pageUrl,payload.queryInfo)
            
            console.log(pageResult);
            const changePageName = pageName?.slice(0,1).toUpperCase() + pageName.slice(1)
            const {list,totalCount} = pageResult.data
            
            commit(`change${changePageName}List`,list)
            commit(`change${changePageName}Count`,totalCount)
            
        }
    },
    getters:{
        pageListData(state){
            return (pageName:string) => {
                // return (state as any)[`${pageName}List`]
                switch(pageName){
                    case 'users':
                        return state.userList
                    case 'role':
                        return state.roleList
                }
            }
        },
        pageListCount(state){
            return (pageName:string) => {
                // return (state as any)[`${pageName}List`]
                switch(pageName){
                    case 'users':
                        return state.userCount
                    case 'role':
                        return state.roleCount
                }
            }
        }
    }
}

export default systemModule