/*函数是一等对象*/
//反模式
var add = new Function('a,b','return a+b');
console.log(add(1,2));

/*当使用new Function()构造函数运行时，函数就是对象的意义就变得非常明确了。
但使用Function()构造函数并不是一个好主意(如同使用eval()一样不好)
因为这种语法会导致解析两次代码，一次是ECMAScript代码，另一次是解析传入构造函数的字符串，从而影响性能。
不过这种语法倒是对理解 函数是对象，函数名是指针 的概念非常直观
*/
//反模式
var obj = {};
obj.property = "name";
console.log(eval("obj.property"));
//技巧
console.log(obj['property']);
//扩展技巧
var love = {firstName:'Elobie',lastName:'Porteneuve'};
var useFirstName = true;
console.log(love[useFirstName?'firstName':'lastName']);

/*如果一定需要使用eval()，那么可以考虑使用new Function()来替代eval()。若如此：
1、new Function()中的代码将在局部函数空间中进行，因此代码中任何采用var定义的变量不会自动成为全局变量。另一个避免自动成为全局变量的方法是将eval()调用封装到一个即时函数中。
*/
console.log(typeof un);
console.log(typeof deux);
console.log(typeof trois);

var jsstring = "var un=1;console.log(un);";
eval(jsstring);

jsstring = "var deux=2;console.log(deux);";
new Function(jsstring)();

jsstring = "var trois=3;console.log(trois);";
(function(){
	var local = 1;
	eval("local=3;console.log(local)");
	console.log(local);
}());

console.log(typeof un);
console.log(typeof deux);
console.log(typeof trois);
/*
2、new Function()和eval()的区别在于eval()会影响到作用域链，而Function()更多地类似于一个沙盒。
*/
(function(){
	var local = 1;
	eval("local=3;console.log(local)");
	console.log(local);
}());
(function(){
	var local = 1;
	Function("console.log(typeof local);")();
}());