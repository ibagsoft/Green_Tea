var Base = require('./base').load(),
	Parent = Base.Parent;

//原型式继承
function object(o) {
	function F() {};
	F.prototype = o;
	return new F();
}

var person = new Parent();

var anotherPerson = object(person);
anotherPerson.name = 'Greg';

console.log(person.name);
console.log(anotherPerson.name);

// 只想创建一个对象与另一个对象保持类似的情况下，无须兴师动众地创建构造函数，原型继承是完全可以胜任的。就像使用原型模式一样