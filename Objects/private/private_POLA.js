function Gadget() {
	var specs = {
		screen_width: 320,
		screen_height: 480,
		color: 'white'
	};
	this.getSpecs = function() {
		return {
			screen_width:specs.screen_width,
			screen_height:specs.screen_height
		};
	};
}

var toy = new Gadget(),
	specs = toy.getSpecs();

specs.color = 'black';
specs.screen_width = 300;

console.log(toy.getSpecs());