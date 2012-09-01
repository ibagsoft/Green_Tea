//curry化的add()函数
//接受部分参数列表

function add(x, y) {
	if (typeof y === 'undefined') {
		return function(y) {
			return x + y;
		};
	}

	return x + y;
}

console.log(typeof add(5));
console.log(add(3)(4));

var add2000 = add(2000);
console.log(add2000);
console.log(add2000(10));