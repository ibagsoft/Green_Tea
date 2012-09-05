var Base = require('./base').load(),
	Parent = Base.Parent,
	Child = Base.Child;

// 共享原型
function inherit(C, P) {
	C.prototype = P.prototype;
}

inherit(Child, Parent);

var kid = new Child('Patrick');
console.log(kid.name);
console.log(typeof kid.say);

/*这种模式能够提供简短而迅速的原型链查询，这是由于所有的对象实际上共享了同一个原型。
缺点也同样明显：如果继承链下方的某一个子对象修改了原型，它将会影响到所有的父对象和祖先对象*/