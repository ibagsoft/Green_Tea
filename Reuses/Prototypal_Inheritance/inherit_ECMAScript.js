var parent = {
	name: 'jobs'
},
	child = Object.create(parent);

console.log(child.name);

child = Object.create(parent, {
	age: {
		value: 2
	}
});

console.log(child.name);
console.log(child.hasOwnProperty('age'));

/*在一些JavaScript库中已经实现了原型继承模式。如YUI3中的Y.Object()方法
YUI().use('*',function (Y) {
	var child = Y.Object(parent);
});*/