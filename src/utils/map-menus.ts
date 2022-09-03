import { IBreadcrumb } from "@/base-ui/breadcrumb";
import { RouteRecordRaw } from "vue-router";

export let firstMenu: any = null

// 动态加载路由
export function mapMenuToRoutes(userMenus: any[]): RouteRecordRaw[] {
    const routes: RouteRecordRaw[] = []
    console.log(routes);

    // 先去加载默认的所有routes
    const allRoutes: RouteRecordRaw[] = []
    const routeFiles = require.context('../router/main', true, /\.ts/)
    routeFiles.keys().forEach((key) => {
        console.log(key);
        const route = require('../router/main' + key.split('.')[1])
        // console.log(route);
        allRoutes.push(route.default)
    });
    // console.log(allRoutes);



    // 根据菜单获取需要添加的routes
    const _recurseGetRoute = (menus: any[]) => {
        for (const menu of menus) {
            if (menu.type === 2) {
                const route = allRoutes.find((route) => {
                    return route.path === menu.url
                })
                if (route) {
                    routes.push(route)
                }
                if (!firstMenu) {
                    firstMenu = '/main/system/user'
                }
            } else {
                _recurseGetRoute(menu.children)
            }
        }
    }

    _recurseGetRoute(userMenus)

    return routes
}


export function pathMapToMenu(userMenus: any[], currentPath: String, breadcrumb?: IBreadcrumb[]): any {
    for (const menu of userMenus) {
        console.log(menu);
        if (menu.type === 1) {
            const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
            console.log(menu.children, currentPath);
            console.log(findMenu);
            if (findMenu) {
                breadcrumb?.push({ name: menu.name, path: menu.url })
                breadcrumb?.push({ name: findMenu.name, path: findMenu.url })
                return findMenu
            }
        } else if (menu.type === 2 && menu.url === currentPath) {
            return menu
        }
    }
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: String){
    const breadcrumb: IBreadcrumb[] = []
    pathMapToMenu(userMenus,currentPath,breadcrumb)
    return breadcrumb
}

export function mapMenusToPermissions(userMenus:any[]){
    const permission:string[] = []

    const _recurseGetPermission = (menus:any[]) => {
        for(const menu of menus){
            if(menu.type === 1 || menu.type === 2){
                _recurseGetPermission(menu.children ?? [])
            }else if(menu.type === 3){
                permission.push(menu.permission)
            }
        }
    }
    _recurseGetPermission(userMenus)

    return permission
}