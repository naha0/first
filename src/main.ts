import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
// import './service/axios_serve'
// import './service'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import hyRequest from './service'
import 'normalize.css'
import '@/assets/css/index.css'
import { setupStore } from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

setupStore()
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')


interface DataType{
    data:any
    returnCode: string
    success:boolean
}

// hyRequest.request<DataType>({
//     url:'/get',
//     method:'get',
//     params:{
//     }
// })
