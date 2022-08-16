import { Module } from "vuex";

import { ILoginState } from "./types";
import { IRootState } from "../types";

import { accountLoginRequest,requestUserInfoById,requestUserMenus} from '@/service/login/login'
import { IAccount } from "@/service/login/type";
import LocalCache from '@/utils/cache'
import { mapMenuToRoutes } from "@/utils/map-menus";
import router from "@/router";

const loginModule: Module<ILoginState, IRootState> = {
    namespaced: true,
    state() {
        return {
            token: "",
            userInfo: {},
            userMenus:[]
        };
    },
    mutations: {
        changeToken(state,token:string){
            state.token = token
        },
        changeUserInfo(state,userInfo:any){
            state.userInfo = userInfo
        },
        changeUserMenus(state,userMenus:any){
            state.userMenus = userMenus

            // userMenus => routes
           const routes =  mapMenuToRoutes(userMenus)
           console.log(routes);

            // 将routes => router.main.children
            routes.forEach(item => {
                router.addRoute('main',item)
            })


        }
    }, 
    actions: {
        async accountLoginAction({commit}, payload: IAccount) {
            // 1.登录逻辑
            console.log(payload);
            const res = await accountLoginRequest(payload)
            const {id,token} = res.data
            console.log(id);
            commit('changeToken',token)
            LocalCache.setCache('token',token)
            // 2.请求用户信息
            const userInfoRes = await requestUserInfoById(id)
            const userInfo = userInfoRes.data
            console.log(userInfo);
            commit('changeUserInfo',userInfo)
            LocalCache.setCache('userInfo',userInfo)
            // 3.请求列表信息
            const menuInfo = await requestUserMenus(userInfo.role.id)
            console.log(menuInfo);
            const menuData = menuInfo.data
            commit('changeUserMenus',menuData)
            LocalCache.setCache('userMenus',menuData)
            // 4.跳到首页
            router.push('/main')
        },
        loadLocalLogin({commit}){
            const token = LocalCache.getCache('token')
            const userInfo = LocalCache.getCache('userInfo')
            const userMenus = LocalCache.getCache('userMenus')
            if(token&&userInfo&&userMenus){
                commit('changeToken',token)
                commit('changeUserInfo',userInfo)
                commit('changeUserMenus',userMenus)
            }
        }
    },
    getters: {},
};

export default loginModule;
