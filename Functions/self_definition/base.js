var scareMe = function () {
	console.log('Boo!');
	scareMe = function () {
		console.log('Double boo!');
	};
};

//使用自定义函数
scareMe();
scareMe();