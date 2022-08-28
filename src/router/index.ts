import { createRouter,createWebHashHistory } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import LocalCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

const routes:RouteRecordRaw[] = [
    {
        path:'/',
        redirect:'/login'
    },{
        path:'/login',
        name:'login',
        component:() => import('@/views/login/login.vue')
    },{
        path:'/main',
        name:'main',
        component:() => import('@/views/main/main.vue'),
        children:[]
    },{
        path:'/:pathMatch(.*)*',
        name:'not-found',
        component:() => import('@/views/not-found/not-found.vue')
    }
]

const router = createRouter({
    routes,
    history:createWebHashHistory()
})

router.beforeEach((to)=>{
    if(to.path !== '/login'){
        const token = LocalCache.getCache('token')
        if(!token){
            return '/login'
        }
    }
    if(to.path === '/main'){
        return firstMenu
    }
})

export default router