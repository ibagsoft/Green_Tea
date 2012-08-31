/*如果需要定义一个在对象生存期内永远都不会改变的属性，但是在定义它之前需要执行一些工作以找出正确的值。
可以使用一个即时函数包装这些工作，并且即时函数的返回值将会成为属性值。*/

var o = {
	message: (function() {
		var who = 'me',
			what = 'call';
		return what + ' ' + who;
	}()),
	getMsg: function() {
		return this.message;
	}
};

console.log(o.getMsg());
console.log(o.message);