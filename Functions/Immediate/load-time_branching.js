/*这段代码的问题在于效率比较低下。每次调用utils.addListener()或utils.removeListener()时，都将会重复地执行相同的检查*/
//反模式
var utils = {
	addListener:function (el,type,fn) {
		if(typeof window.addEventListener === 'function'){
			el.addEventListener(type,fn,false);
		}
		else if(typeof document.attachEvent === 'function'){
			el.attachEvent('on' + type,fn);
		}
		else{
			el['on' + type] = fn;
		}
	},
	removeListener:function (el,type,fn) {
		// body...
	}
};


/*当使用初始化分支的时候，可以在脚本初始化时加载时一次性探测出浏览器特征。
此时，可以在整个页面生命期内重定义函数运行方式。*/

var utils_right = {
	addListener:null,
	removeListener:null
};

if(typeof window.addEventListener === 'function'){
	utils_right.addListener = function (el,type,fn) {
		el.addEventListener(type,fn,false);
	};
	utils_right.removeListener = function (el,type,fn) {
		el.removeEventListener(type,fn,false);
	};
}
else if(typeof document.attachEvent === 'function'){
	utils_right.addListener = function (el,type,fn) {
		el.attachEvent('on' + type,fn);
	};
	utils_right.removeListener = function (el,type,fn) {
		el.detachEvent('on' + type,fn);
	};
}
else{
	utils_right.addListener = function (el,type,fn) {
		el['on' + type] = fn;
	};
	utils_right.removeListener = function (el,type,fn) {
		el['on' + type] = null;
	};
}