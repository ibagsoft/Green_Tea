/*有效地使用memoization的关键在于，要意识到只有当操作的次数足够多，以值得花些额外的精力来避免，这样才能够最终提高性能*/
//Memoized的函数
var fibonacci = function () {
	var memo = [0,1];
	var fib = function (n) {
		var result = memo[n];
		if(typeof result != 'number'){
			result = fib(n-1) + fib(n-2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
}();
//nonmemoized的函数
var fib = function (n) {
	return n<2 ? n : fib(n-1) + fib(n-2);
};

var length = 20;

console.time('non-memo');
for (var i = 0;i<=length;i++){
	console.log(i + ' ' + fib(i));
}
console.timeEnd('non-memo');

console.time('memo');
for (var i = 0; i <= length; i++) {
	console.log(i + ' ' + fibonacci(i));
}
console.timeEnd('memo');