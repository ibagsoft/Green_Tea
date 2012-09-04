/*Sandbox('ajax','dom',function (box) {
	//沙箱
});
ajax即用来初始化对象的module
function (box) {
	// 这里是沙箱环境
}*/

function Sandbox () {
	//将参数转换成一个数组
	var args = Array.prototype.slice.call(arguments),
		//最后一个参数是回调函数
		callback = args.pop(),
		//模块可以作为一个数组传递，或作为单独的参数传递
		modules = (args[0] && typeof args[0] === 'string') ?args :args[0],
		i;

	//确保该函数作为构造函数被调用
	if(!(this instanceof Sandbox)){
		return new Sandbox(modules,callback);
	}

	//需要向tihs添加的属性
	this.a = 1;
	this.b = 2;

	//现在向核心this对象添加模块
	//不指定模块名称或指定'*'都表示使用所有模块
	if(!modules || modules === '*'){
		modules = [];
		for(i in Sandbox.modules){
			if(Sandbox.modules.hasOwnProperty(i)){
				modules.push(i);
			}
		}
	}

	//初始化所需的模块
	for (var i = 0; i < modules.length; i++) {
		Sandbox.modules[modules[i]](this);
	}

	//call the callback
	callback(this);
}

Sandbox.prototype = {
	name:'My Application',
	version:'1.0',
	getName:function () {
		return this.name;
	}
};

/*加载模块。
Sandbox()构造函数也是一个对象，因此可以向它添加一个名为modules的静态属性。
属性是包含 键-值 对的另一个对象。
其中这些键是模块的名字，而值则是实现每个模块的对应函数
使用Sandbox()时，最后一个参数就是沙箱环境，而前面的参数则是指定使用哪一个module来初始化对象*/

Sandbox.modules = {};

Sandbox.modules.dom = function (box) {
	box.getElement = function () {};
	box.getStyle = function () {};
	box.foo = "bar";
};

Sandbox.modules.event = function (box) {
	box.attachEvent = function () {};
	box.dettachEvent = function () {};
};

Sandbox.modules.ajax = function (box) {
	box.makeRequest = function () {};
	box.getResponse = function () {};
};


Sandbox(function (arg) {
	console.log(arg.foo);
	console.log(typeof arg.getStyle);
	console.log(arg.a);
	console.log(arg.getName());
});

/*关键部分为：
1、存在一个数型检查语句，检查this是否为Sandbox的实例。如果不是，那么我们再次以构造函数的形式调用该函数
2、可以在该构造函数中将一些属性添加到this中。此外，还可以将一些属性添加到构造函数的原型中
3、所需的模块可以模块名称数组的形式传递，或以单个参数的形式传递，或者*。可以仅加载最基本的模块，并且根据与命名公约对应的模块名称，从外部文件中加载任何所需的模块
4、当我们知道所需的模块时，便可以据此进行初始化，这表示可以调用实现每个模块的函数
5、该构造函数的最后一个参数是一个回调函数。该回调函数将会在使用新创建的实例时最后调用。这个回调函数实际上是用户的沙箱，它可以获得一个填充了所需功能的box对象*/