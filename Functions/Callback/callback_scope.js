/*如果回调并不是一次性的匿名函数或全局函数，而是对象的方法。
如果该回调方法使用this来引用它所属的对象，这可能会导致意想不到的的行为发生*/

var myapp = {};
myapp.color = 'green';
myapp.paint = function () {
	console.log(this.color);
};

//反模式
var findNodes = function (callback) {
	if(typeof callback === 'function'){
		callback();
	}
};

findNodes(myapp.paint);

//回调模式
var findNodes_call = function (callback,callback_obj) {
	if(typeof callback === "string"){
		callback = callback_obj[callback];
	}
	if(typeof callback === "function"){
		callback.call(callback_obj);
	}
}

findNodes_call('paint',myapp);