function Person(name, age, job) {
	//创建要返回的对象
	var o = new Object();
	//可以在这里定义私有变量和函数

	//添加方法
	o.sayName = function() {
		console.log(name);
	};

	return o;

}

var nicholas = Person('Nicholas', 29, 'Software Engineer');
nicholas.sayName();

// 变量person中保存的是一个稳妥对象，而除了调用sayName方法外，没有别的方式可以访问其数据成员。即使有其他代码会给这个对象添加方法或数据成员，但也不可能有别的方法访问传入到构造函数中的原始数据