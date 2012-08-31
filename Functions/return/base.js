/*函数也是对象，因此它们可以用做为返回值。
这表示一个函数并不需要以某种数据值或数据数组作为其执行结果返回
函数可以返回另一个更专门的函数，也可以按需创建另一个函数，这取决于其输入。*/

var setup = function () {
	var count = 0;
	return function () {
		return (count+=1);
	};
};

var next = setup();
console.log(next());
console.log(next());