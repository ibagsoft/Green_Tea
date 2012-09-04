function extend(parent, child) {
	var i;
	child = child || {};
	for (i in parent) {
		if (parent.hasOwnProperty(i)) {
			child[i] = parent[i];
		}
	}
	return child;
}

function Gadget() {
	var specs = {
		screen_width: 320,
		screen_height: 480,
		color: 'white'
	};
	this.getSpecs = function() {
		return extend(specs);
	};
}

var toy = new Gadget(),
	specs = toy.getSpecs();
specs.color = 'black';
specs.price = 'free';

console.dir(toy.getSpecs());