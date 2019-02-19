import Cookies from 'js-cookie'
import moment from 'moment'
// 设置TokenKey
const TokenKey = 'admin_token'
// util 公共对象函数
class util {
	//初始化对象
	constructor() {
		
	}
	// 获取token
	getToken() {
		return Cookies.get(TokenKey)
	}
	// 设置token
	setToken(token) {
		return Cookies.set(TokenKey, token)
	}
	// 删除token
	removeToken() {
		return Cookies.remove(TokenKey)
	}
	/*获取 storage 缓存数据
	* type  类型   local：localStorage   session：sessionStorage
	* name  缓存数据name名
	*/
	getStorage(type='local', name) {
		let result = '';
		if (type == 'local') {
			result = localStorage.getItem(name) ? localStorage.getItem(name) : "";
		} else if (type == 'session') {
			result = sessionStorage.getItem(name) ? sessionStorage.getItem(name) : "";
		}
		return result;
	}
	/*设置 storage 缓存数据
	*type  类型   local：localStorage   session：sessionStorage
	*name  缓存数据name名
	*content  缓存的数据内容
	*/
	setStorage(type='local', name, content) {
		if (typeof (content) == 'object') {
			content = JSON.stringify(content)
		};
		if (type == 'local') {
			localStorage.setItem(name, content);
		} else if (type == 'session') {
			sessionStorage.setItem(name, content);
		}
	}
	/*设置 移除当前某个缓存
	*type  类型   local：localStorage   session：sessionStorage
	*name  缓存数据name名
	*/
	removeStorage(type='local', name) {
		if (type == 'local') {
			localStorage.removeItem(name);
		} else if (type == 'session') {
			sessionStorage.removeItem(name);
		}
	}
	/*设置 移除所有缓存
	*type  类型   local：localStorage   session：sessionStorage
	*/
	clearStorage(type='local') {
		if (type == 'local') {
			localStorage.clear();
		} else if (type == 'session') {
			sessionStorage.clear();
		}
	}
	// 获取当前时间
	getCurrentTime() {
		let keep = '';
		let date = new Date();
		let y = date.getFullYear();
		let m = date.getMonth() + 1;
		m = m < 10 ? '0' + m : m;
		let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
		let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
		let f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
		let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
		keep = y + '' + m + '' + d + '' + h + '' + f + '' + s;
		return keep; //20160614134947
	}
	// 格式化时间戳
	date(value, ty='-', full=true) {
		if (!value) return;
		if (full) {
			return moment(value).format('YYYY' + ty + 'MM' + ty + 'DD HH:mm:ss');
		} else {
			return moment(value).format('YYYY' + ty + 'MM' + ty + 'DD');
		};
	}
	//新建iframe 并赋src   文件下载时用得到
	interIosForIframe(src) {
		if ($('#clickOnIos').length) {
			$('#clickOnIos').attr('src', src)
		} else {
			$('body').append('<iframe id="clickOnIos" src=' + src + ' class="hide"></iframe>');
		}
	}
	/*生成随机字符串*/
    randomString(len = 32) {　　
        const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/ 　　
        const maxPos = chars.length;　　
        let pwd = '';　　
        for (i = 0; i < len; i++) {　　　　
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));　　
        }　　
        return pwd;
	}
	/*根据参数生成常用的正则表达式
     *string    type 生成的正则表达式类型
     *array     numArr 生成正则的条件数组 例如:[6,16] 也可省略
     */
    regCombination(type, numArr) {
        var reg = "";
        switch (type) {
            case "*": //"*":"不能为空！"
                if (numArr) {
                    reg = new RegExp("^[\\w\\W]{" + numArr[0] + "," + numArr[1] + "}$");
                } else {
                    reg = new RegExp("^[\\w\\W]+$");
                }
                break;
            case "n": //"number":"请填写数字！
                if (numArr) {
                    reg = new RegExp("^\\d{" + numArr[0] + "," + numArr[1] + "}$");
                } else {
                    reg = new RegExp("^\\d+$");
                }
                break;
            case "s": //"s":"不能输入特殊字符！"
                if (numArr) {
                    reg = new RegExp("^[\\u4E00-\\u9FA5\\uf900-\\ufa2d\\w\\.\\s]{" + numArr[0] + "," + numArr[1] + "}$");
                } else {
                    reg = new RegExp("^[\\u4E00-\\u9FA5\\uf900-\\ufa2d\\w\\.\\s]+$");
                }
                break;
            case "c": //"z":"中文验证"
                reg = new RegExp("^[\\u4E00-\\u9FA5\\uf900-\\ufa2d]{" + numArr[0] + "," + numArr[1] + "}$");
                break;
            case "p": //"p":"邮政编码！
                reg = new RegExp("^[0-9]{6}$");
                break;
            case "m": //"m":"写手机号码！"
                reg = new RegExp("^13[0-9]{9}$|14[0-9]{9}$|15[0-9]{9}$|17[0-9]{9}$|18[0-9]{9}$|19[0-9]{9}$");
                break;
            case "e": //"e":"邮箱地址格式
                reg = new RegExp("^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$");
                break;
            case "id": //"id":验证身份证
                reg = new RegExp("^\\d{17}[\\dXx]|\\d{14}[\\dXx]$");
                break;
            case "money": //钱
                reg = new RegExp("^[\\d\\.]+$");
                break;
            case "url": //"url":"网址"
                reg = new RegExp("^(\\w+:\\/\\/)?\\w+(\\.\\w+)+.*$");
                break;
            case "u": //
                reg = new RegExp("^[A-Z\\d]+$");
                break;
            case "numLimitTo2": //保留2位小数点正整数
                reg = new RegExp("^[0-9]+([.]{1}[0-9]{1,2})?$"); //     ^-{0,0}\\d+(.\\d{0,2})?$
                break;
            case "spec": //校验特殊字符
                reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]");
                break;
            case "price": //校验特殊字符
                reg = new RegExp("^((\\d+)|([1-9][0-9]*)?[0-9]\.[0-9]{1})|(([1-9][0-9]*)?[0-9]\.[0-9]{2})$");
                break;
            case "hunNum":
                reg = new RegExp("(^[1-9][0-9]$)|(^100$)|(^[1-9]$)$");
                break;
            case "tel": //校验座机号码
                reg = new RegExp("^([0-9]{3,4}(-?))?[0-9]{7,8}$");
                break;
            case "user": //校验用户名，只能输入5-20个以字母开头、可带数字、“_”、“.”的字串
                reg = new RegExp("^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$");
                break;
            case "pwd": //校验密码，只能输入6-20位字母数字组合
                reg = new RegExp("^[A-Za-z0-9]{6,20}$");
                break;
            case "code": //校验系统编码，只能输入1-30位字母数字组合
                reg = new RegExp("^[A-Za-z0-9]{1,30}$");
                break;
            case "rating": //校验税率数字0-99
                reg = new RegExp("(^[1-9][0-9]$)|(^[0-9]$)$");
                break;
        }
        return reg;
	}
	// 导出文档
	exportExcel(json,url) {
		url+='?';
		for(let key in json){
			if(json[key]!==''){
				url+=(key+'='+json[key])+'&';
			}
		}
		url = url.substring(0,url.length-1);
		this.interIosForIframe(url);
	}
	// 删除json中参数为空的字段
	paramsIsEmpty(value={}) {
		if(Object.keys(value).length !== 0){
			let objData = JSON.parse(JSON.stringify(value));
			for (var n in objData) {
				if (objData[n] === null || objData[n] === '' || objData[n] === NaN || objData[n] === undefined || objData[n] === []) {
					delete objData[n]
				}
			}
			return objData;
		}
	}
	// element组件表单校验
	elementValidator(tip1,tip2,data={}) {
		/*
			Element表单正则校验
			tip1: 为空的提示语
			tip2: 合法性的提示语
			json:{min:2,max:30}
		*/
		// 初始化默认值
		data.min = data.min?data.min:2;
		data.max = data.max?data.max:30;
		data.var1 = data.var1?data.var1:'';
		data.var2 = data.var2?data.var2:'';
		// 设置校验对象
		let json = {
			// 用户名验证
			user(rule, value, callback){
				// 校验用户名，只能输入5-20个以字母开头、可带数字、“_”、“.”的字串
				const user = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
				if(!value){
					return callback(new Error(`${tip1}`));
				}
				if(!user.test(value)){
					callback(new Error(`${tip2}`));
				}else{
					callback();
				}
			},
			// 密码验证
			pwd(rule, value, callback){
				// 校验密码，只能输入6-20位字母数字组合
				const pwd = /^[A-Za-z0-9]{6,20}$/;
				if(!value){
					return callback(new Error(`${tip1}`));
				}
				if(!pwd.test(value)){
					callback(new Error(`${tip2}`));
				}else{
					callback();
				}
			},
			// 重复密码验证
			pwdAgain(rule, value, callback){
				if(!value){
					return callback(new Error(`${tip1}`));
				}
				if(data.var1 !== data.var2){
					callback(new Error(`${tip2}`));
				}else{
					callback();
				}
			},
			// 邮箱验证
			email(rule, value, callback){
				const email = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
				if(!value){
					return callback(new Error(`${tip1}`));
				}
				if(!email.test(value)){
					callback(new Error(`${tip2}`));
				}else{
					callback();
				}
			},
			// 手机号验证
			tel(rule, value, callback){
				const tel = /^13[0-9]{9}$|14[0-9]{9}$|15[0-9]{9}$|17[0-9]{9}$|18[0-9]{9}$|19[0-9]{9}$/;
				if(!value){
					return callback(new Error(`${tip1}`));
				}
				if(!tel.test(value)){
					callback(new Error(`${tip2}`));
				}else{
					callback();
				}
			},
			// 1～100之间的正整数包括1和100
			hunNum(rule, value, callback){
				const hunNum = /(^[1-9][0-9]$)|(^100$)|(^[1-9]$)$/;
				if(!value){
					return callback(new Error(`${tip1}`));
				}
				if(!hunNum.test(value)){
					callback(new Error(`${tip2}`));
				}else{
					callback();
				}
			},
			// 标题长度限制
			titleLenLimit(rule, value, callback){
				if(!value){
					return callback(new Error(`${tip1}`));
				}
				if(value.toString().length<data.min||value.toString().length>data.max){
					callback(new Error(`${tip2}`));
				}else{
					callback();
				}
			},
			// 非负整数
			n(rule, value, callback){
				const n = /^[0-9]*$/;
				if(!value){
					return callback(new Error(`${tip1}`));
				}
				if(!n.test(value)){
					callback(new Error(`${tip2}`));
				}else{
					callback();
				}
			},
			// 保留2位小数点的正数
			numLimitTo2(rule, value, callback){
				const numLimitTo2 = /^[0-9]+([.]{1}[0-9]{1,2})?$/;
				if(!value){
					return callback(new Error(`${tip1}`));
				}
				if(!numLimitTo2.test(value)){
					callback(new Error(`${tip2}`));
				}else{
					callback();
				}
			},
			// 开始时间不能早于当前时间
			checkBegin (rule, value, callback) {
				if (!value) {
					return callback(new Error(`${tip1}`));
				}
				const now = new Date().getTime();
				const set = new Date(value).getTime();
				if (set < now) {
					callback(new Error(`${tip2}`));
				} else {
					callback();
				}
			}
		}
		return json;
	}
}

export default new util()