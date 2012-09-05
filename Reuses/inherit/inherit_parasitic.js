var Base = require('./base').load(),
	Parent = Base.Parent;

//寄生式继承
function createAnother (original) {
	var clone = Object(original);
	clone.sayHi = function () {
		console.log(this.name);
	};
	return clone;
}

var person = new Parent();

var anotherPerson = createAnother(person);
anotherPerson.sayHi();