//原型式继承
function object(o) {
	function F() {};
	F.prototype = o;
	return new F();
}
//父构造函数
function Person() {
	this.name = 'Adam';
}
Person.prototype.getName = function() {
	return this.name;
};

var papa = new Person();
//继承
var kid = object(papa);//即然是继承对象，所以也可以继承自Person.prototype

console.log(kid.getName());

// 只想创建一个对象与另一个对象保持类似的情况下，无须兴师动众地创建构造函数，原型继承是完全可以胜任的。就像使用原型模式一样