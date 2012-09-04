(function () {
	if(typeof Function.prototype.method !== 'function'){
		Function.prototype.method = function (name,implementation) {
			this.prototype[name] = implementation;
			return this;
		}
	}
}());

var Person = function (name) {
	this.name = name;
}.
	method('getName',function () {
		return this.name;
	}).
	method('setName',function (name) {
		this.name = name;
		return this;
	});

var jobs = new Person('jobs');
console.log(jobs.name);
console.log(jobs.getName());
jobs.setName('Steve');
console.log(jobs.getName());