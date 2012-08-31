/*当重定义自身时，已经添加到原始函数的任何属性都会丢失。*/

var scareMe = function () {
	console.log('Boo!');
	scareMe = function () {
		console.log('Double boo!');
	};
};

scareMe.property = 'properly';

var prank = scareMe;

var spooky = {
	boo: scareMe
};

prank();
prank();
console.log(prank.property);

spooky.boo();
spooky.boo();
console.log(spooky.boo.property);

scareMe();
scareMe();
console.log(scareMe.property);