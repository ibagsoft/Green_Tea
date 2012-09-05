function mix() {
	var arg, prop, child = {};
	for (arg = 0; arg < arguments.length; arg++) {
		for (prop in arguments[arg]) {
			if (arguments[arg].hasOwnProperty(prop)) {
				child[prop] = arguments[arg][prop];
			}
		}
	}
	return child;
}

var cake = mix({
	eggs: 2,
	large: true
}, {
	butter: 1,
	salted: true
}, {
	flour: '3 cups'
}, {
	sugar: 'sure!'
});

console.dir(cake);