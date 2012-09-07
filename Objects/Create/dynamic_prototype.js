//动态原型模式
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	//方法
	if (typeof this.sayName != 'function') {
		//使用动态原型模式时，不能使用对象字面量重写原型。因为会切断现有实例与新原型之间的联系
		Person.prototype.sayName = function() {
			console.log(this.name);
		};
	}
}

var nicholas = new Person('Nicholas', 29, 'Software Engineer');
nicholas.sayName();