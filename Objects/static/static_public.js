/*在JavaScript中并没有特殊语法来表示静态成员。但是可以通过使用构造函数并且向其添加属性这种方式，从而获得与“类式”语言相同的语法*/
// 构造函数
var Gadget = function (price) {
	this.price = price;
};
// 静态方法
Gadget.isShiny = function () {
	var msg = 'you bet';
	if(this instanceof Gadget){
		msg += ', it costs $' + this.price + '!';
	}
	return msg;
};
// 向原型添加一个普通方法
Gadget.prototype.isShiny = function () {
	return Gadget.isShiny.call(this);
};

console.log(Gadget.isShiny());

var a = new Gadget('499.99');
console.log(a.isShiny());