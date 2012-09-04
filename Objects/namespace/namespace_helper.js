//反模式
var MYAPP = {};
//更好的代码风格
if(typeof MYAPP === 'undefined'){
	var MYAPP = {};
}
//或者用更短的语句
var MYAPP = MYAPP || {};


//namespace 函数
var MyApp = MyApp || {};
MyApp.namespace = function (ns_string) {
	var parts = ns_string.split('.'),
		parent = MyApp,
		i;

	if(parts[0] === 'MyApp'){
		parts = parts.slice(1);
	}

	for(i = 0;i<parts.length;i+=1){
		if(typeof parent[parts[i]] === 'undefined'){
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
};

var module2 = MyApp.namespace('MyApp.modules.module2');
console.log(MyApp.modules.module2);

MyApp.namespace('modules.module5');

MyApp.namespace('once.upon.a.time.there.was.this.long.nested.property');