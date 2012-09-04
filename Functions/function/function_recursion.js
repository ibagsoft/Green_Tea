/*我们通过使用一个递归函数直接量来反转数组元素。
我们从数组的最终长度开始，而不是从索引0开始，并且每次迭代都将这个值自减。
当该值为0时，我们返回字符串*/

var reverseArray = function (x,indx,str) {
	return indx == 0 ? str : reverseArray(x,--indx,(str+=' '+ x[indx]));;
}

var arr = new Array('apple','orange','peach','lime');
var str = reverseArray(arr,arr.length,'');
console.log(str);

var arr2 = ['car','boat','sun','computer'];
str = reverseArray(arr2,arr2.length,'');
console.log(str);

/*递归是数学领域众所周知的概念，也是计算机科学领域的概念。
比如：斐波那契数列、阶乘*/

var fibonacci = function (n) {
	return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(20));


function factorial (n) {
	return n == 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(4));

/*递归函数更快更高效，但是也更消耗内存*/