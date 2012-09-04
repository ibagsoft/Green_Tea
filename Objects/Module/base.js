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

MyApp.namespace('MyApp.utilities.object');
MyApp.namespace('MyApp.utilities.lang');
MyApp.namespace('MyApp.utilities.array');

MyApp.utilities.array = (function () {
		//依赖
	var uobj = MyApp.utilities.object,
		ulang = MyApp.utilities.lang,
		//私有属性
		array_string = '[object Array]',
		ops = Object.prototype.toString;
		//私有方法
		//可选的一次性初始化过程
	return{
		inArray:function (needle,haystack) {
			for (var i = 0, max = haystack.length; i < max; i++) {
				if(haystack[i] === needle){
					return true;
				}
			};
		},
		isArray:function (a) {
			return ops.call(a) === array_string;
		}
	};
}());

console.log(MyApp.utilities.array.inArray(3,[1,2,3,4]));
console.log(MyApp.utilities.array.isArray([1,2,3]));
console.log(MyApp.utilities.array.isArray({1:2}));