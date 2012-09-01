
var myFunc = function (param) {
	if(!myFunc.cache[param]){
		var result = {};
		//...开销很大的操作
		myFunc.cache[param] = result;
	}
	return myFunc.cache[param];
};

myFunc.cache = {};

var result = myFunc('a');
var result2 = myFunc('a');
console.log(result === result2);