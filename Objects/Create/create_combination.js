//组合使用构造函数模式和原型模式
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = ['Shelby', 'Court'];
}

Person.prototype = {
	constructor: Person,
	sayName: function() {
		console.log(this.name);
	}
}



var nicholas = new Person('Nicholas', 29, 'Software Engineer');
var crockfrod = new Person('Crockfrod', 27, 'Doctor');

nicholas.friends.push('Van');

nicholas.sayName();
console.dir(nicholas);
crockfrod.sayName();
console.dir(crockfrod);