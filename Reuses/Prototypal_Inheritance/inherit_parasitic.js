//寄生式继承
function createAnother(original) {
	var clone = Object.create(original);
	clone.sayHi = function() {
		console.log('Hi');
	};
	return clone;
}

function Person() {};
var person = new Person();

var anotherPerson = createAnother(person);
anotherPerson.sayHi();