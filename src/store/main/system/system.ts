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
        changeUserList(state,userList:any[]){
            state.userList = userList
        },
        changeUserCount(state,userCount:number){
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
            let pageUrl = ''
            switch(pageName){
                case 'users':
                    pageUrl = '/users/list'
                    break
                case 'role':
                    pageUrl = '/role/list'
                    break
            }
            console.log(pageUrl);
            // 1.对页面发送请求
            let pageResult  = await getPageListData(payload.pageUrl,payload.queryInfo)
            
            console.log(pageResult);
            const {list,totalCount} = pageResult.data
            commit(`change${pageName.toUpperCase()}List`,list)
            commit(`change${pageName.toUpperCase()}Count`,totalCount)
        }
    }
}

export default systemModule