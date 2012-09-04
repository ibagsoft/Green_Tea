// 无意造成的私有失效。因为返回的变量正好是一个对象，那么外面的代码仍然可以访问该私有变量，因为它通过引用传递的
function Gadget() {
	var specs = {
		screen_width: 320,
		screen_height: 480,
		color: 'white'
	};
	this.getSpecs = function() {
		return specs;
	};
}

var toy = new Gadget(),
	specs = toy.getSpecs();

specs.color = 'black';
specs.price = 'free';

console.log(toy.getSpecs());