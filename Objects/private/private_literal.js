// 在使用对象字面量的情况下，可以使用一个额外的匿名即时函数创建闭包来实现私有性
var myobj;

(function() {
	var name = 'my, oh my';
	myobj = {
		getName: function() {
			return name;
		}
	}
}());

console.log(myobj.getName());

// 另一种实现手法
var myobj2 = (function() {
	var name = 'my, oh my';
	return {
		getName: function() {
			return name;
		}
	};
}());

console.log(myobj2.getName());