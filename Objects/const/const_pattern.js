/*如果真的想有一个不可变的值，可以创建一个私有属性并提供一个取值方法，但并不提供设值函数。
多数情况下，如果可以采用简单的命名公约取值时，并不提倡设值函数的方法，这样会显得矫枉过正。
一个通用的constant对象实现方法，一般会提供下列方法：
set(name,value)，定义一个新的常量
isDefined(name)，检测指定常量是否存在
get(name),读取指定常量的值*/

var constant = (function() {

	var constants = {},
		ownProp = Object.prototype.hasOwnProperty,
		allowed = {
			string: 1,
			number: 1,
			boolean: 1
		},
		prefix = (Math.random() + "_").slice(2); //需要确保声明的常量名与内置属性名不会冲突，可以通过使用hasOwnProperty()检查名称，并且在所有的常量名前面添加随机生成的前缀，从而确保名称之间相互适应。
	return {
		set: function(name, value) {
			if (this.isDefined(name)) {
				return false;
			}
			if (!ownProp.call(allowed, typeof value)) {
				return false;
			}
			constants[prefix + name] = value;
			return true;
		},
		isDefined: function(name) {
			return ownProp.call(constants, prefix + name);
		},
		get: function(name) {
			if (this.isDefined(name)) {
				return constants[prefix + name];
			}
			return null;
		}
	};
}());

console.log(constant.isDefined('maxwidth'));

console.log(constant.set('maxwidth', 480));

console.log(constant.isDefined('maxwidth'));

console.log(constant.set('maxwidth', 320));

console.log(constant.get('maxwidth'));