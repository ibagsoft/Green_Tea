//构造函数模式
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	//反模式，每个实例都会创建一个完成同样任务的Function实例
/*	this.sayName = function() {
		console.log(this.name);
	};*/

	this.sayName = sayName;
}
//解决了重复创建的问题，但是污染了全局环境
function sayName(){
	console.log(this.name);
}

var nicholas = new Person('Nicholas', 29, 'Software Engineer');
var crockfrod = new Person('Crockfrod', 27, 'Doctor');

nicholas.sayName();
crockfrod.sayName();


//每个对象都有一个constructor属性
console.log(nicholas.constructor == Person);
console.log(crockfrod.constructor == Person);
//对象的constructor属性最初是用来标识对象的，但是，提到检测对象类型，还是instanceof操作符更可靠一些。
console.log(nicholas instanceof Object);
console.log(nicholas instanceof Person);
console.log(crockfrod instanceof Person);

/*创建自定义的构造函数意味着将来可以将它的实例标识为一种特定的类型；
而这正是构造函数模式胜过工厂模式的地方。

以这种方式定义的构造函数是定义在Global对象中的。
因此除非另有说明，instanceof操作符和constructor属性始终会假设是在全局作用域中查询构造函数。*/