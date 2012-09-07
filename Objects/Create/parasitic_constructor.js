function Person(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		console.log(this.name);
	}
	return o;
}

var nicholas = new Person('Nicholas', 29, 'Software Engineer');
var crockfrod = new Person('Crockfrod', 27, 'Doctor');

nicholas.sayName();
crockfrod.sayName();

/*除了使用new操作符并把使用的包装函数叫做构造函数之外，它和工厂模式其实是一模一样的。
构造函数在不返回值的情况下，默认会返回新对象实例。而通过在构造函数的末尾添加一个return语句，可以重写调用构造函数时返回的值。*/

function SpecialArray() {

	var values = new Array();

	values.push.apply(values, arguments);

	values.toPipedString = function() {
		return this.join("|");
	};
	//返回数组
	return values;
}

var colors = new SpecialArray("red", "blue", "green");
console.log(colors.toPipedString());

// 理解这个模式可以考虑两点：1、初始化创建对象。2、对象的方法