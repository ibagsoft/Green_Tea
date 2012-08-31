/*采用闭包和自定义函数来保护单个实例，秘诀就是重写构造函数
*/
function Universe () {
	var instance = this;

	Universe = function () {
		return instance;
	};

/*	然而，如果采用自定义模式，那么构造函数Universe()会丢失所有在初始定义和重定义时刻之间添加到它里面的属性。
	因此，如果需要使原型和构造函数指针按照预期的那样运行，那么可以通过做一些调整来实现这个目标*/

	Universe.prototype = this;
	instance = new Universe();
	instance.constructor = Universe;

	this.start_time = 0;
	this.bang = 'Big';

	return instance;
}

var uni = new Universe();
var uni2 = new Universe();
console.log(uni===uni2);

Universe.prototype.nothing = true;
uni = new Universe();
Universe.prototype.everything = true;
uni2 = new Universe();

console.log(uni === uni2);

console.log(uni.nothing && uni.everything && uni2.nothing && uni2.everything);

console.log(uni.bang);

console.log(uni.constructor === Universe);