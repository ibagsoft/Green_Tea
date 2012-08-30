
/*setTimeout()和setInterval(),都是回调的例子。注意传递字符串可能会出现类似eval()重新运算的反模式*/
var thePlotThickens = function(){
	console.log('500ms later...');
};

setTimeout(thePlotThickens,500);
console.log('start...');