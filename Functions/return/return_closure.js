//反模式
var uniqueID = function () {
	if(!arguments.callee.id) arguments.callee.id = 0;
	return arguments.callee.id++;
}

console.log(uniqueID());
console.log(uniqueID());
//任何人都可以把uniqueID.id设置为0，并且违反函数所保证的它不会两次返回相同的值的约定
uniqueID.id = 0;
console.log(uniqueID());


/*可以通过在只有该函数能够访问的闭包中存储持久性的值的方法来防止id的曝露*/

var uniqueID_closure = (function () {
	var id = 0;
	return function () {
		return id++;
	}
}());

console.log(uniqueID_closure());
console.log(uniqueID_closure());
uniqueID_closure.id = 0;
console.log(uniqueID_closure());