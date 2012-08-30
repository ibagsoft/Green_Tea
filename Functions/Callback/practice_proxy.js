/*在JavaScript中，函数和其他东西一样都是对象。然而，和其他对象不同的是，函数是可调用的。
函数内上下文，如this的取值，取决于调用它们的位置和方法
除了使用thisObject[func]调用外，还有其他两种调用函数:apply()和call()*/

var proxy = function (func,thisObject) {
	return (function(){
		return func.apply(thisObject,arguments);
	});
};

var myapp = {};
myapp.color = 'green';
myapp.paint = function (node) {
	console.log(node + ".color is " + this.color);
};

var findNodes = function (callback) {
	var node = '(local node)';
	if(typeof callback === 'function'){
		callback(node);
	}
}
findNodes(proxy(myapp.paint,myapp));

/*jQuery在其API的实现中就利用了apply()和call()来更改上下文，比如在事件处理程序中或者使用each()来做迭代时
$('p').each(function(){
	$(this).remove();
});
实际上，jQuery也包含了实现这个功能的API，jQuery.proxy();*/