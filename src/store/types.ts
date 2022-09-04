import {ILoginState} from './login/types'
import { ISystemState } from './main/system/types'

export interface IRootState{
    entireRole: any[],
    entireDepartment: any[],
    token:string,
    age:number,
}

export interface IRootWithModule{
    login:ILoginState,
    system:ISystemState
}

export type IStoreType = IRootState & IRootWithModule