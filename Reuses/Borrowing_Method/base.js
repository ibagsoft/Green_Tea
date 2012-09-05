var one = {
	name: 'object',
	say: function(greet) {
		return greet + ',' + this.name;
	}
};

// 以下两种情况，this都指向了全局对象
var say = one.say;
console.log(say('hoho'));
var yetanother = {
	name: 'Yet another object',
	method: function(callback) {
		return callback('Hola');
	}
};
console.log(yetanother.method(one.say));

//为了修复对象与方法之间的关系，我们定义了bind方法
function bind (o,m) {
	return function () {
		return m.apply(o,[].slice.call(arguments));
	};
}

var other = {
	name: 'Yet another object',
	method: function(callback) {
		return bind(this,callback)('Hola');
	}
}
console.log(other.method(one.say));