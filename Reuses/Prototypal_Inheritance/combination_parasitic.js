//父构造函数
function Parent (name) {
	this.name = name || 'Adam';
}
//向该原型添加功能
Parent.prototype.say = function () {
	return this.name;
};


//寄生组合继承
function inheritPrototype(subType, superType) {
	var prototype = Object.create(superType.prototype); //创建对象
	prototype.constructor = subType; //增强对象
	subType.prototype = prototype; //指定对象
}
function Child(name) {
	Parent.call(this, name);
}
inheritPrototype(Child, Parent);//只调用了一次Parent的构造函数，并且避免了在Child.prototype上创建不必要的、多余的属性



var kid = new Child();
console.log(kid.name);
console.log(typeof kid.say);