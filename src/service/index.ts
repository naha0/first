import HyRequest from './request'
import localCache from '@/utils/cache'

const hyRequest = new HyRequest({
    baseURL:'/api',
    timeout:10000,
    interceptors:{  
        requestInterceptor:(config) =>{
            const token = localCache.getCache('token')
            // const user = JSON.parse(token)
            if(token){
                if(config&& config?.headers){
                    config.headers.Authorization = `Bearer ${token}`
                }
            }
            console.log('请求拦截的成功');
            return config
        },
        requestInterceptorCatch(error) {
            console.log('请求拦截的失败')
            return error
        },
        responseInterceptor(res) {
            console.log('响应拦截的成功');
            return res
        },
        responseInterceptorCatch(error) {
            console.log('响应拦截的失败');
            return error
        },
    }
})

export default hyRequest
