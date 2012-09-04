/*我们需要创建一个函数，但是只有在运行时才知道其结构
使用new Function对象构造函数创建的函数，叫做匿名函数，因为它们在创建的时候都没有给定一个函数名。
相反，它们都赋值给了一个变量。然后将变量当做一个函数调用来使用。*/

function foo () {
	var func = prompt("Enter function body:",'');
	var x = prompt("Enter value for x:",'');
	var y = prompt("Enter value for y:",'');

	var newFun = new Function("x","y",func);
	var result = newFun(x,y);
}

foo();