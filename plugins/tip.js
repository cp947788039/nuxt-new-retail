import Vue from 'vue'
import { Loading,Message,MessageBox } from 'element-ui'
/**
 * 提示与加载工具类
 */
export default class Tips {
    constructor() {
      this.isLoading = false;
      this.loadingOptions={};
    }
    /**
     * 警告框
     */
    static alert({ 
        title='温馨提示', // MessageBox 标题
        message='您操作有误！', // MessageBox 消息正文内容
        dangerouslyUseHTMLString=false, // 是否将 message 属性作为 HTML 片段处理
        type='warning', // 消息类型，用于显示图标 success / info / warning / error
        iconClass='', // 自定义图标的类名，会覆盖 type
        customClass='', // MessageBox 的自定义类名
        showClose=true, // MessageBox 是否显示右上角关闭按钮
        lockScroll=true, // 是否在 MessageBox 出现时将 body 滚动锁定
        showCancelButton=false, // 是否显示取消按钮
        showConfirmButton=true, // 是否显示确定按钮
        cancelButtonText='取消', // 取消按钮的文本内容
        confirmButtonText='确定', // 确定按钮的文本内容
        center=false, // 是否居中布局
        roundButton=false, // 是否使用圆角按钮
        confirm=() => {}, // 点击确认按钮时的回调
        cancel=() => {}, // 点击取消按或者关闭钮时的回调
    }) {
        MessageBox({
            title,
            message,
            dangerouslyUseHTMLString,
            type,
            iconClass,
            customClass,
            showClose,
            lockScroll,
            showCancelButton,
            showConfirmButton,
            cancelButtonText,
            confirmButtonText,
            center,
            roundButton,
            callback:(action) => {
                if(action=='confirm'){
                    confirm();
                }else if(action=='cancel'){
                    cancel();
                }
            },
        });
    }
    /**
     * 弹出确认窗口
     */
    static confirm({ 
        title='温馨提示', // MessageBox 标题
        message='此操作将永久删除该文件, 是否继续?', // MessageBox 消息正文内容
        dangerouslyUseHTMLString=false, // 是否将 message 属性作为 HTML 片段处理
        type='warning', // 消息类型，用于显示图标 success / info / warning / error
        iconClass='', // 自定义图标的类名，会覆盖 type
        customClass='', // MessageBox 的自定义类名
        showClose=true, // MessageBox 是否显示右上角关闭按钮
        lockScroll=true, // 是否在 MessageBox 出现时将 body 滚动锁定
        showCancelButton=true, // 是否显示取消按钮
        showConfirmButton=true, // 是否显示确定按钮
        cancelButtonText='取消', // 取消按钮的文本内容
        confirmButtonText='确定', // 确定按钮的文本内容
        center=false, // 是否居中布局
        roundButton=false, // 是否使用圆角按钮
        confirm=() => {
            Tips.toast({
                type:'success',
                message: '操作成功!',
            });
        }, // 点击确认按钮时的回调
        cancel=() => {
            Tips.toast({
                type:'info',
                message: '已取消操作!',
            });
        }, // 点击取消按或者关闭钮时的回调
    }) {
        MessageBox({
            title,
            message,
            dangerouslyUseHTMLString,
            type,
            iconClass,
            customClass,
            showClose,
            lockScroll,
            showCancelButton,
            showConfirmButton,
            cancelButtonText,
            confirmButtonText,
            center,
            roundButton,
            callback:(action) => {
                if(action=='confirm'){
                    confirm();
                }else if(action=='cancel'){
                    cancel();
                }
            },
        });
    }
    // 会自动消失的消息提示框
    static toast({
        message="操作成功！", // 消息文字
        type="success", // 主题 success/warning/info/error
        iconClass="", // 自定义图标的类名，会覆盖 type
        dangerouslyUseHTMLString=false, // 是否将 message 属性作为 HTML 片段处理
        customClass="", // 自定义类名
        duration=3000, // 显示时间, 毫秒。设为 0 则不会自动关闭
        showClose=false, // 是否显示关闭按钮
        center=false, // 文字是否居中

    }) { 
        Message({
            message,
            type,
            iconClass,
            dangerouslyUseHTMLString,
            customClass,
            duration,
            showClose,
            center,
        });
    }
    /**
     * 弹出加载提示
     */
    static loading({
        lock=true, // 同 v-loading 指令中的 lock 修饰符
        text='加载中...', // 显示在加载图标下方的加载文案
        spinner='el-icon-loading', // 自定义加载图标类名
        background='rgba(0, 0, 0, 0.3)', // 遮罩背景色
    }) {
        this.loadingOptions={
            lock,
            text,
            spinner,
            background,
        }
        if (Tips.isLoading) {
            return;
        }
        Tips.isLoading = true;
        Loading.service({
            lock,
            text,
            spinner,
            background,
        });
    }
    /**
     * 加载完毕
     */
    static loaded() {
        if (Tips.isLoading) {
            Tips.isLoading = false;
            Loading.service(this.loadingOptions).close();
        }
    }
  
}
/**
* 静态变量，是否加载中
*/
Tips.isLoading = false;

// 将提示方法绑定到Vue原型上
let tip = {
    alert(json) {Tips.alert(json)},
    confirm(json) {Tips.confirm(json)},
    toast(json) {Tips.toast(json)},
    loading(json) {Tips.loading(json)},
    loaded(json) {Tips.loaded(json)},
};
// 将提示方法导出
Vue.prototype.$tip = tip;
