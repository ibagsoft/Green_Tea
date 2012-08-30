/*函数都是对象，这表示它们可以作为参数传递合其他函数。
将函数introduceBugs()作为参数传递给函数writeCode()时，那么在某一刻writeCode()可能会执行introduceBugs()。
在这种情况下，introduceBugs()就被称之为回调函数(callback function)，也可简称为回调(callback)*/

function writeCode (callback) {
	callback();
}

function introduceBugs () {
	// ...引用漏洞
}

writeCode(introduceBugs);