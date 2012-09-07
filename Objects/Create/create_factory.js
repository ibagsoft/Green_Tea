//工厂模式
function createPerson(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.sayName = function() {
		console.log(this.name);
	};
	return o;
}

var nicholas = createPerson('Nicholas', 29, 'Software Engineer');
var crockfrod = createPerson('Crockfrod', 27, 'Doctor');

nicholas.sayName();
crockfrod.sayName();