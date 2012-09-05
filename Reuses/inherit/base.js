exports.load = function () {
	//父构造函数
	function Parent (name) {
		this.name = name || 'Adam';
	}
	//向该原型添加功能
	Parent.prototype.say = function () {
		return this.name;
	};

	//空白的子构造函数
	function Child (name) {
		
	}
	//继承的实现,我们需要搞定的功能
	// inherit(Child,Parent);

	return {
		Parent:Parent,
		Child:Child
	}
};