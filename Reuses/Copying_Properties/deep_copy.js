function extendDeep(parent, child) {
	var i, toStr = Object.prototype.toString,
	astr = "[object Array]";

	child = child || {};

	for (i in parent) {
		if (parent.hasOwnProperty(i)) {
			if (typeof parent[i] === 'object') {
				child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
				extendDeep(parent[i], child[i]);
			} else {
				child[i] = parent[i];
			}
		}
	}
	return child;
}

var dad = {
	counts: [1, 2, 3],
	reads: {
		paper: true
	}
};

var kid = extendDeep(dad);

kid.counts.push(4);
console.log(kid.counts.toString());
console.log(dad.counts.toString());