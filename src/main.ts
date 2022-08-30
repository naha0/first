import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
// import './service/axios_serve'
// import './service'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import hyRequest from './service'
import 'normalize.css'
import '@/assets/css/index.css'
import { setupStore } from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { globalRegister } from '@/global/index'

const app = createApp(App)

globalRegister(app)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

setupStore()
app.use(router)
app.use(store)
app.use(ElementPlus, {
  locale: zhCn,
})
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
