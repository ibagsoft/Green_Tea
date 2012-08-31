/*所有这些工作仅需要执行一次，因此没有理由去创建一个可复用的命名函数。但是代码也还需要一些临时变量，而在初始化阶段完成后就不再需要这些变量。
然而，以全局变量形式创建所有那些变量是一个差劲的方法。这就是为什么需要一个即时函数的原因，用以将所有代码包装到它的局部作用域中，且不会将任何变量泄露到全局作用域中*/
var Universe;

(function () {
	var instance;

	Universe = function Universe () {
		if(instance){
			return instance;
		}
		instance = this;

		this.start_time = 0;
		this.bang = 'Big';
	}
}());

var uni = new Universe();
var uni2 = new Universe();
console.log(uni === uni2);