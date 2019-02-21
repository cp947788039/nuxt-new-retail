import Vue from 'vue'
import accounting from 'accounting'
import moment from 'moment'
// 设置过滤器
const filter = {
    // 转换为大写
	uppercase(value) {
		if (!value) return;
		return value.toString().toUpperCase();
	},
	// 转换为小写
	lowercase(value) {
		if (!value) return;
		return value.toString().toLowerCase();
	},
	//货币过滤器
	currency(value, symbol, digit, bwf, gwf) {
		if (!value && value != 0) return accounting.formatMoney(0, symbol || '¥', digit || 2, bwf || ',', gwf || '.');
		return accounting.formatMoney(value, symbol || '¥', digit || 2, bwf || ',', gwf || '.'); // ¥4,999.99
	},
	//货币过滤器保留两位小数且不四舍五入
	moneyFixed(value, symbol, digit, bwf, gwf) {
		if (!value && value != 0) return accounting.formatMoney(0, symbol || '¥', digit || 2, bwf || ',', gwf || '.');
		value = parseInt((value)*100)/100;
		return accounting.formatMoney(value, symbol || '¥', digit || 2, bwf || ',', gwf || '.'); // ¥4,999.99
	},
	//为空过滤器
	returnNull(val, str) {
		if (!val) {
			return str;
		} else {
			return val;
		}
	},
	// 时间过滤器
	date(value, gengefu, full) {
		if (!value) return;
		let ty = gengefu || '-';
		if (full) {
			return moment(value).format('YYYY' + ty + 'MM' + ty + 'DD HH:mm:ss');
		} else {
			return moment(value).format('YYYY' + ty + 'MM' + ty + 'DD');
		};
	},
	// 图片地址过滤器
	imgBaseUrl(value) {
		if (!value) {
			return '/images/blank.png';
		}else{
			return value;
		}
	},
}
// 自动注册过滤器
for (const key in filter) {
	Vue.filter(key, filter[key])
}
