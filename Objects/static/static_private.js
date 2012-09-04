/*需要一个函数作为闭包并且包装私有成员。然后，让我们使同一个包装函数立即执行并返回一个新函数。*/
// 构造函数
var Gadget = (function () {
	// 静态变量/属性
	var counter = 0,
		NewGadget;
	// 新的构造函数的实现
	NewGadget = function () {
		counter += 1;
	};
	// 特权方法
	NewGadget.prototype.getLastId = function () {
		return counter;
	};
	//覆盖构造函数
	return NewGadget;
}());//立即执行


var iphone = new Gadget();
console.log(iphone.getLastId());
var ipod = new Gadget();
console.log(ipod.getLastId());
var ipad = new Gadget();
console.log(ipad.getLastId());