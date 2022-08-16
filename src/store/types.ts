import {ILoginState} from './login/types'

export interface IRootState{
    token:string,
    age:number,
}

export interface IRootWithModule{
    login:ILoginState
}

export type IStoreType = IRootState & IRootWithModule