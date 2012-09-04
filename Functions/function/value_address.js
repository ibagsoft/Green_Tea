/*在函数中，复杂对象和标量值参数以不同的方式对待。
对象是通过引用传入到函数中的。
标量参数是按照值传递的。这意味着，生成了参数的一个副本以用来在函数中处理，并且在函数中修改该参数不会反映到调用程序中。*/

function concatenateString (strings,separator) {
	var result = '';
	for (var i = strings.length - 1; i >= 0; i--) {
		result += strings[i] + separator;
	};

	separator = result;
	strings[strings.length] = result;
}


var items = new Array('apple','orange','cherry','lime');
var sep = '*';
concatenateString(items,sep);


console.log(items);
console.log(sep);