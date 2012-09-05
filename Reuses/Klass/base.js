var klass = function(Parent, props) {
	var Child, F, i;

	//1.新构造函数
	Child = function() {
		if (Child.uber && Child.uber.hasOwnProperty('__construct')) {
			Child.uber.__construct.apply(this, arguments);
		}
		if (Child.prototype.hasOwnProperty('__construct')) {
			Child.prototype.__construct.apply(this, arguments);
		}
	};

	//2.继承
	Parent = Parent || Object;
	F = function() {};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.uber = Parent.prototype;
	Child.prototype.constructor = Child;

	//3.添加实现方法
	for (i in props) {
		if (props.hasOwnProperty(i)) {
			Child.prototype[i] = props[i];
		}
	}

	//返回该'class'
	return Child;
};

var Man = klass(null, {
	__construct: function(what) {
		console.log("Man's constructor");
		this.name = what;
	},
	getName: function() {
		return this.name;
	}
});

var first = new Man('Adam');
console.log(first.getName());


var SuperMan = klass(Man, {
	__construct: function(what) {
		console.log("SuperMan's constructor");
	},
	getName: function() {
		var name = SuperMan.uber.getName.call(this);
		return "I am " + name;
	}
});
var clark = new SuperMan('Clark Kent');
console.log(clark.getName());