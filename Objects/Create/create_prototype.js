//原型模式
function Person() {}

Person.prototype.name = 'Nicholas';
Person.prototype.age = 29;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function() {
	console.log(this.name);
};
console.log(Person.prototype.constructor);

// 更简单的原型语法，尽管instanceof操作符还能返回正确的结果，但是constructor属性不再指向Person了
/*Person.prototype = {
	name: 'Nicholas',
	age: 29,
	job: 'Software Engineer',
	sayName: function() {
		console.log(this.name);
	}
}
console.log(Person.prototype.constructor);*/

var nicholas1 = new Person();
nicholas1.sayName();

var nicholas2 = new Person();
nicholas2.sayName();

console.log(nicholas1.sayName == nicholas2.sayName);