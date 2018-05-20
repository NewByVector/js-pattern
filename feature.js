//外观模式
//为复杂的子系统功能提供简单的调用接口
//在重构工作和写兼容代码中很有帮助

var myevent = {
    //阻止冒泡和默认事件
    stop: function (e) {
        if (typeof e.preventDefault === 'function') {
            e.preventDefault();
        }
        if (typeof e.stopPropagation === 'function') {
            e.stopPropagation();
        }
        //IE
        if (typeof e.returnValue === 'boolean') {
            e.returnValue = false;
        }
        if (typeof e.cancelBubble === 'boolean') {
            e.cancelBubble = true;
        }
    }
};