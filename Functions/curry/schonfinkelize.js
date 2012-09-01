function schonfinkelize(fn) {
	var slice = Array.prototype.slice,
		stored_args = slice.call(arguments, 1);

	return function() {
		var new_args = slice.call(arguments),
			args = stored_args.concat(new_args);

		return fn.apply(null, args);
	};
}

function add(x, y) {
	return x + y;
}

var newadd = schonfinkelize(add, 5);
console.log(newadd(4));

function add2(a, b, c, d, e) {
	return a + b + c + d + e;
}

console.log(schonfinkelize(add2, 1, 2, 3)(5, 5));