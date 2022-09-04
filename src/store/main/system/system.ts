import { Module } from "vuex";
import { IRootState } from "@/store/types";
import { ISystemState } from "./types";
import { deletePageData, getPageListData,createPageDataAction,editPageDataAction} from "@/service/main/system/system";
import { IDataType } from "@/service/typed";

const systemModule: Module<ISystemState, IRootState> = {
    namespaced: true,
    state() {
        return {
            userList: [],
            userCount: 0,
            roleList: [],
            roleCount: 0,
            goodsList: [],
            goodsCount: 0,
            menuList: [],
            menuCount: 0
        }
    },
    mutations: {
        changeUsersList(state, userList: any[]): void {
            state.userList = userList
        },
        changeUsersCount(state, userCount: number): void {
            state.userCount = userCount
        },
        changeRoleList(state, roleList: any[]) {
            state.roleList = roleList
        },
        changeRoleCount(state, roleCount: number) {
            state.roleCount = roleCount
        },
        changeGoodsList(state, goodsList: any[]) {
            state.goodsList = goodsList
        },
        changeGoodsCount(state, goodsCount: number) {
            state.goodsCount = goodsCount
        },
        changeMenuList(state, menuList: any[]) {
            state.menuList = menuList
        },
        changeMenuCount(state, menuCount: number) {
            state.menuCount = menuCount
        }
    },
    actions: {
        async getPageListAction({ commit }, payload: any) {
            console.log(payload);
            const pageName = payload.pageName
            console.log(pageName);
            let pageUrl = `${pageName}/list`
            // 1.对页面发送请求
            let pageResult = await getPageListData(pageUrl, payload.queryInfo)

            console.log(pageResult);
            const changePageName = pageName?.slice(0, 1).toUpperCase() + pageName.slice(1)
            const { list, totalCount } = pageResult.data

            commit(`change${changePageName}List`, list)
            commit(`change${changePageName}Count`, totalCount)

        },
        async deletePageDataAction({ dispatch }, payload: any) {
            console.log(payload);
            const { pageName, id } = payload
            const pageUrl = `/${pageName}/${id}`

            // 调用删除的网络请求
            await deletePageData(pageUrl)

            // 重新请求最新的数据
            dispatch('getPageListAction',{
                pageName,
                queryInfo:{
                    offset:0,
                    size:10
                }
            })
        },
        async createPageDataAction({dispatch},payload:any){
            const {pageName,newData} = payload
            const pageUrl = `/${pageName}`
            await createPageDataAction(pageUrl,newData)

            // 重新请求最新的数据
            dispatch('getPageListAction',{
                pageName,
                queryInfo:{
                    offset:0,
                    size:10
                }
            })

        },

        async editPageDataAction({dispatch},payload:any){
            const {pageName,editData,id} = payload
            const pageUrl = `/${pageName}/${id}`
            await editPageDataAction(pageUrl,editData)

            // 重新请求最新的数据
            dispatch('getPageListAction',{
                pageName,
                queryInfo:{
                    offset:0,
                    size:10
                }
            })

        }
    },
    getters: {
        pageListData(state) {
            return (pageName: string) => {
                // return (state as any)[`${pageName}List`]
                switch (pageName) {
                    case 'users':
                        return state.userList
                    case 'role':
                        return state.roleList
                    case 'goods':
                        return state.goodsList
                    case 'menu':
                        return state.menuList
                }
            }
        },
        pageListCount(state) {
            return (pageName: string) => {
                // return (state as any)[`${pageName}List`]
                switch (pageName) {
                    case 'users':
                        return state.userCount
                    case 'role':
                        return state.roleCount
                    case 'goods':
                        return state.goodsCount
                }
            }
        }
    }
}

export default systemModule