/*想要创建一个函数，它能够记住静态数据，但是不必使用全局变量，并且不必对每个函数调用重新发送同样的数据
*/
function greetingMaker (greeting) {
	function addName (name) {
		return 'greeting' + '' + name;
	}
	return addName;
}

var daytimeGreeting = greetingMaker('Good Day to you');
var nightGreeting = greetingMaker('Good Eventing');

console.log(daytimeGreeting(name));
console.log(nightGreeting(name));