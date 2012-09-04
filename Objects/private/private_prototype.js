function Gadget() {
	var name = 'iPad';
	this.getName = function() {
		return name;
	};
	this.setName = function (value) {
		name = value;
	}
}

Gadget.prototype = (function() {
	var browser = 'Mobile Webkit';
	return {
		getBrowser: function() {
			return browser;
		},
		setBrowser:function (value) {
			browser = value;
		}
	}
}());

var toy = new Gadget();
console.log(toy.getName());
console.log(toy.getBrowser());

var jobs = new Gadget();
jobs.setName('iPod');
jobs.setBrowser('Safari');

console.log(toy.getName());
console.log(toy.getBrowser());

console.log(jobs.getName());
console.log(jobs.getBrowser());