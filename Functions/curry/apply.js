/*调用(invoking)函数和应用(applying)函数可以得到完全相同的结果。
apply()带有两个参数：第一个参数为将要绑定到该函数内部this的一个对象，而第二个参数是一个数组或多个参数变量，这些参数将变成可用于该函数内部的类似的arguments对象。
如果第一个参数为null，那么this将指向全局对象，此时得到的结果就恰好如同当调用一个非指定对象时的方法。*/
//定义函数
var sayHi = function(who) {
	return 'Hello' + (who ? ',' + who : '') + '!';
};

//调用函数
console.log(sayHi());
console.log(sayHi('world'));

//应用函数
console.log(sayHi.apply(null, ['hello'])); //this指向全局对象


/*当函数是一个对象的方法时，此时不能传递null引用。在这种情况下，这里的对角将成为apply()的第一个参数：*/
var alien = {
	sayHi:function (who) {
		return 'Hello' + (who ? ',' + who :'') + '!';
	}
};

console.log(alien.sayHi('world'));
console.log(sayHi.apply(alien,['humans']));//this指向alien
/*
Function.prototype.call()仍然只是建立在apply()之上的语法糖(syntax sugar)而已。
有时候最好使用该语法糖。即当函数仅带有一个参数时，可以根据实际情况避免创建只有一个元素的数组的工作*/
console.log(sayHi.call(alien,'humans'));