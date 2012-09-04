var MyApp = MyApp || {};
MyApp.namespace = function(ns_string) {
	var parts = ns_string.split('.'),
		parent = MyApp,
		i;

	if (parts[0] === 'MyApp') {
		parts = parts.slice(1);
	}

	for (i = 0; i < parts.length; i += 1) {
		if (typeof parent[parts[i]] === 'undefined') {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
};

MyApp.namespace('MyApp.utilities.object');
MyApp.namespace('MyApp.utilities.lang');
MyApp.namespace('MyApp.utilities.array');

MyApp.utilities.array = (function() {
	//依赖
	var uobj = MyApp.utilities.object,
		ulang = MyApp.utilities.lang,
		//私有属性
		array_string = '[object Array]',
		ops = Object.prototype.toString,
		//私有方法
		//可选的一次性初始化过程
		Constr;

	Constr = function(o) {
		this.elements = this.toArray(o);
	};

	Constr.prototype = {
		constructor: MyApp.utilities.Array,
		version: '2.0',
		toArray: function(obj) {
			for (var i = 0, a = [], len = obj.length; i < len; i++) {
				a[i] = obj[i];
			};
			return a;
		}
	};

	return Constr;
}());

var obj = {};
var arr = new MyApp.utilities.array(obj);
console.log(arr.elements);
console.log(arr.toArray('Hello'));