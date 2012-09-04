function Gadget () {
	var name = 'iPod';
	//特权方法(Privileged Method)的概念并不涉及任何特殊的语法。只是指那些可以访问私有成员的公共方法的一个名称而已
	this.getName = function () {
		return name;
	};
	this.setName = function (value) {
		name = value;
	}
}

var toy = new Gadget();

console.log(toy.name);
console.log(toy.getName());

var jobs = new Gadget();

toy.setName('toy');
console.log(toy.getName());

jobs.setName('jobs');
console.log(jobs.getName());

console.log(toy.getName());