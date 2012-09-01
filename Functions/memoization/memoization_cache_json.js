var myFunc = function () {

	var cachekey = JSON.stringify(Array.prototype.slice.call(arguments)),
		result;

	// 也可以使用arguments.callee来引用该函数，而不是硬编码函数名称。但要认识到ECMAScript 5的严格模式中并不支持arguments.callee。
	// var f = arguments.callee;
	var f = myFunc;

	if(!f.cache[cachekey]){
		result = {};
		//...开销很大的操作...
		f.cache[cachekey] = result;
	}

	return f.cache[cachekey];
};

myFunc.cache = {};

var result = myFunc('a','b');
var result_a_b = myFunc('a','b');
var result_a = myFunc('a');

console.log(result === result_a_b);
console.log(result === result_a);