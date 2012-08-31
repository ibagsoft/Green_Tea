/*可以将参数到传递即时函数中*/
(function (who,when) {
	console.log('I met ' + who + 'on ' + when);
}('Joe Black',new Date()));

/*一般情况下，全局对象是以参数方式传递给即时函数的，以便于在不使用Window指定全局作用域限定的情况下可以在函数内访问该对象。*/
(function (global) {
	console.log(global);
}(this));

/*不应该传递过多的参数到即时函数中，因为这样将迅速成为一种阅读负担，使在理解代码运行流程时需要不断地滚动到该函数的顶部和底部*/