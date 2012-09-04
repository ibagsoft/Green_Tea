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

MyApp.namespace("MyApp.utilities.module");
MyApp.utilities.module = (function (app,global) {
	//引用全局对象
	//以及现在被转换成局部变量的
	//全局应用程序命名空间对象
}(MyApp,this));