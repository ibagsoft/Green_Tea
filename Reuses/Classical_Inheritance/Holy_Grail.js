var Base = require('./base').load(),
	Parent = Base.Parent,
	inherit_optimize;

//圣杯模式
function inherit(C, P) {
	var F = function() {};
	F.prototype = P.prototype;
	C.prototype = new F();

	C.uber = P.prototype; //super是保留的关键词
	C.prototype.constructor = C;
}
//圣杯模式，优化版本
inherit_optimize = (function () {
	var F = function(){};
	return function (C,P) {
		F.prototype = P.prototype;
		C.prototype = new F();
		C.uber = P.prototype;
		C.prototype.constructor = C;
	}
}());


function Child (name) {
	Parent.call(this,name);
}

// inherit(Child, Parent);
inherit_optimize(Child,Parent);

var kid = new Child();
console.log(kid.name);
console.log(typeof kid.say);