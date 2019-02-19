import Vue from 'vue'
const config  = {
    baseApi: 'http://saas-group.morning-star.cn/retail-admin-acc/api',
};
// 将公共参数绑定到全局上
Vue.prototype.$config = config;
// 将公共参数导出
export default config;
