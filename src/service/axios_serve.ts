import axios from "axios";

axios.defaults.baseURL = "https://httpbin.org";
axios.defaults.timeout = 10000;

// axios的实例对象
// axios.request({
//     method:'GET'
// })

// axios.get('http://123.207.32.32:8000/home/multidata').then((res)=>{
//     console.log(res);
// })

// axios.get('/get',{
//     params:{
//         name:'coderwhy',
//         age:18
//     }
// }).then(res=>{
//     console.log(res);
// })

// axios.post('/post',{
//     data:{
//         name:'hhh',
//         sex:'男'
//     }
// }).then(res=>{
//     console.log('post',res);
// })

axios
  .all([
    axios.get("/get", { params: { name: "why", age: 18 } }),
    axios.post("/post", { data: { name: "zhang", sex: "女" } })
  ])
  .then((res) => {
    console.log(res);
  });

  axios.interceptors.request.use(
    (config)=>{
        // 想做的一些操作
        // 1.给请求加token
        // 2.isloading动画
        console.log('请求成功的拦截');
        return config
    },
    (err)=>{
        console.log('请求发送失败');
        return err
    }
  )

  axios.interceptors.response.use(
    (res)=>{
        console.log('响应成功的拦截');
        return res
    },
    (err)=>{
        console.log('响应失败');
        return Promise.reject(new Error(err))
    }
  )
