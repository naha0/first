import hyRequest from "..";
import { IAccount,IDataType,LoginRequest } from "./type";

enum LoginApi {
    AccountLogin = '/login',
    LoginUserInfo = '/users/',
    UserMenus= '/role/'
}

export function accountLoginRequest(account:IAccount){
    return hyRequest.post<IDataType<LoginRequest>>({
        url:LoginApi.AccountLogin,
        data:account
    })
}

export function requestUserInfoById(id:number){
    return hyRequest.get<IDataType>({
        url:LoginApi.LoginUserInfo + id,
    })
}

export function requestUserMenus(id:number){
    return hyRequest.get<IDataType>({
        url:LoginApi.UserMenus + id + '/menu'
    })
}