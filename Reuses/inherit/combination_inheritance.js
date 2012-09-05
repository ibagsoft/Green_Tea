var Base = require('./base').load(),
	Parent = Base.Parent;

//组合模式：借用构造函数和设置原型
function Child(a, b, c, d) {
	Parent.apply(this, arguments);//缺点:Parent被调用2次，这一次会覆盖上次的属性
}
Child.prototype = new Parent();//缺点:Parent被调用1次

var kid = new Child('Patrick');
console.log(kid.name);
console.log(kid.say());

delete kid.name;
console.log(kid.say());