import axios from 'axios';
import store from '@/store/index';// 先导入vuex,因为我们要使用到里面的状态对象
import router from 'vue-router';

//定义重复的方法,提高复用性

/**
 * 提示函数
 * @param {*String} msg 
 * 传入要显示的值 一秒后关闭
 */
const tip = msg => {
    this.$message({
        message: msg,
        duration: 1000
    });
}

/**
 * 跳转登陆页
 * 携带当前路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    })
}

const errorHandle = (status, other) => {
    //状态码判断
    switch (status) {
        //401 未登录，跳转登陆页
        case 401:
            toLogin();
            break;
        //403登陆过期，提示用户，并清楚本地token和清空vuex中token对象，跳转vuex中token对象，跳转登陆页面
        case 403:
            tip('登录过期，请重新登录');
            localStorage.removeItem('token');
            store.commit('loginSuccess', null);
            setTimeout(() => {
                toLogin(); 
            }, 1000);
            break;
        //404请求不存在
        case 404:
            tip('请求的资源不存在');
            break;
        default:
            console.log(other);

    }
}

//创建axios实例
//设置超时时间
var instance = axios.create({ timeout: 1000 * 12});
//设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';





// 请求拦截器
instance.interceptors.request.use(    
    config => {            
        const token = store.state.token;     //每次发送请求之前判断vuex中是否存在token 
        token && (config.headers.Authorization = token);   // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        return config;    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
    },    
    error => {        
        return Promise.error(error);    
})

//响应拦截器
instance.interceptors.response.use(
    //请求成功
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res), 
    //请求失败
    error => {
        //如果返回的状态吗为200，请求成功拿到数据，否则抛错
        const {response} = error;
        if (response) {
            //请求已发出，但是不在2xx的范围
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            //断网的请况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            if(!window.navigator.onLine) {
                store.commit('changeNetwork', false);
            } else {
                return Promise.reject(error)
            }
        }
    }
)

export default instance;



