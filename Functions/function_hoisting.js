/*对于所有的变量，无论在函数体的何处进行声明，都会在后台被提升到函数顶部
如果采用的是 函数声明 时，函数定义被提升，而不仅仅是函数声明*/
//反模式，用于演示
//全局函数
function foo(){
	console.log('global foo');
}

function bar(){
	console.log('global bar');
}

function hoistme(){
	console.log(typeof foo);
	console.log(typeof bar);

	foo();
	bar();
	//函数声明，函数实现被提升
	function foo(){
		console.log('foo');
	}
	//函数表达式，仅变量bar被提升，函数实现未被提升
	var bar = function(){
		console.log('bar');
	};
};

hoistme();