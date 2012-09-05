var Base = require('./base').load(),
	Parent = Base.Parent;

/*借用构造函数*/

function Child(name) {
	Parent.apply(this, arguments);
}

var kid = new Child('Patrick');
//只继承在父构造函数中添加到this的属性
console.log(kid.name);
//并不能继承那些已添加到原型中的成员
console.log(typeof kid.say);

/*本模式中根本就没有使用Child.prototype，它只是指向一个空对象。
继承是一个一次性的操作，仅会复制父对象的属性并将其作为子对象自身的属性，并不会保留__proto__链接*/

function Cat() {
	this.legs = 4;
	this.say = function() {
		return 'meaowww';
	}
}

function Bird() {
	this.wings = 2;
	this.fly = true;
}
//借用构造函数模式时，可以通过借用多个构造函数从而简单的实现多重继承
function CatWings() {
	Cat.apply(this);
	Bird.apply(this);
}

var jane = new CatWings();
console.dir(jane);