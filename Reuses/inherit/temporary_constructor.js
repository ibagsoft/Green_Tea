var Base = require('./base').load(),
	Parent = Base.Parent,
	Child = Base.Child;

//临时构造函数
function inherit(C, P) {
	var F = function() {};
	F.prototype = P.prototype;
	C.prototype = new F();
}

inherit(Child,Parent);

var kid = new Child();
console.log(kid.name);
console.log(typeof kid.say);