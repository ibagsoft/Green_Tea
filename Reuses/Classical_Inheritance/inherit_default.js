var Base = require('./base').load(),
	Parent = Base.Parent,
	Child = Base.Child;

/*默认模式*/
function inherit(C, P) {
	C.prototype = new P();
}

inherit(Child, Parent);
//原型链追溯
var kid = new Child();
console.log(kid.say());

//
kid.name = 'Patrick';
console.log(kid.say());

//不支持将参数传递到子构造函数中。
var s = new Child('Seth');
console.log(s.say()); //'Adam'