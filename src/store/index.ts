import { Store } from "element-plus/es/components/table/src/store"
import { createStore,useStore as useVuexStore } from "vuex"

import login from './login/login'
import { IRootState,IStoreType } from './types'

const store = createStore<IRootState>({

    state(){
        return {
            token: '',
            age: 19
        }
    },
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        login
    }
})

export function setupStore(){
    store.dispatch('login/loadLocalLogin')
}

export function useStore():Store<IStoreType>{
    return useVuexStore()
}

export default store