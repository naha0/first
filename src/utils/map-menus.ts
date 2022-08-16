import { RouteRecordRaw } from "vue-router";


// 动态加载路由
export function mapMenuToRoutes(userMenus: any[]):RouteRecordRaw[]{
    const routes: RouteRecordRaw[] = []
    console.log(routes);
    
    // 先去加载默认的所有routes
    const allRoutes:RouteRecordRaw[] = []
    const routeFiles = require.context('../router/main',true,/\.ts/)
    routeFiles.keys().forEach((key) => {
        console.log(key);
        const route = require('../router/main' + key.split('.')[1])
        console.log(route);
        allRoutes.push(route.default)
    });
    console.log(allRoutes);



    // 根据菜单获取需要添加的routes
    const _recurseGetRoute = (menus: any[]) => {
        for(const menu of menus){
            if(menu.type === 2){
                const route = allRoutes.find((route)=>{
                    return route.path === menu.url
                })
                if(route){
                    routes.push(route)
                }
            }else{
                _recurseGetRoute(menu.children)
            }
        }
    }

    _recurseGetRoute(userMenus)

    return routes
}
