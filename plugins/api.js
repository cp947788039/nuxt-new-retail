import Vue from 'vue'
import request from '@/plugins/request'
const api =  {
    /* 
    某某接口
    */
    companyList(params) {return request(params, '/group/company/list')},

}
// 将接口方法绑定到Vue的原型上
Vue.prototype.$api = api;
// 将接口方法导出
export default api;