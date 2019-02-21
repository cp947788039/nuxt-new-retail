import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import config from '@/plugins/config'
import tip from '@/plugins/tip'
import util from '@/plugins/util'
import filter from '@/plugins/filter'
// 创建axios实例
const service = axios.create({
    baseURL: config.baseApi,
    timeout: 30000,
})
// http request 拦截器
service.interceptors.request.use(
    config => {
        tip.loading({
            lock:true,
        });
        config.headers['token'] = '00000053OdOvxLcT';
        config.headers['Content-Type'] = config.headers['Content-Type'] ? config.headers['Content-Type'] : 'application/x-www-form-urlencoded';
        if(config.headers['Content-Type']=='application/x-www-form-urlencoded'){
            // 将json对象转换成name,value格式
            config.transformRequest = [
                data => {
                    return qs.stringify(data)
                }
            ]
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
//http response 拦截器
service.interceptors.response.use(
    response => {
        tip.loaded();
        if(response.data.code == 8001){
            /* router.push({
                path:"/login",
                query:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
            }) */
        }else if(response.data.code !== 1000){
            tip.toast({
                type:'warning',
                message:response.data.desc, 
            });
        }
        return response.data;
    },
    error => {
        tip.loaded();
        return Promise.reject(error)
    }
)

/* 封装request网络请求
params：请求参数【query：接口查询参数，appjson：判断是提交json数据还是form数据，isShowLoading：判断是否显示loading】
url：请求接口地址 */

const request = (params = {}, urls) => {
    // 获取当前时间
	let TIMESTAMP = util.getCurrentTime();
	// 构建带有时间的url地址
    let url = `${urls}?&_=${TIMESTAMP}`;
	// 构建查询参数
	let data = params.query || {};
	// 构建请求方式，默认POST请求
	let method = params.method || 'post';
    // 判断是提交json格式的数据还是form格式的数据
    let json = {
        headers:{
			'Content-Type':'application/x-www-form-urlencoded',
		},
        method,
        url,
        params:data,
    }
    if(params.appjson){
        json.headers['Content-Type'] = 'application/json';
        Object.assign(json,{data});
        delete json.params;
    }
    return service(json)
};
// 将请求方法绑定到Vue的原型上
Vue.prototype.$request = request;
// 将请求方法导出
export default request;