/*函数表达式
function(){

};*/

/*对象字面量*/
var myobject = {
	say:function(){

	}
};

/*函数声明*/
function foo(){}
/*匿名函数表达式*/
var bar = function(){};
/*命名函数表达式*/
var baz = function baz(){};


/*函数的name属性主要有两个作用：
1、调试器需要展示函数中的错误时，可以检测name属性作为一个标识符
2、可用于自身内部递归调用同一个函数*/
console.log(foo.name);
console.log(bar.name);
console.log(baz.name);