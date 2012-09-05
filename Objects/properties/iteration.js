function Book(title, author) {
	var title = title;
	this.author = author;
	this.getTitle = function() {
		return 'Title: ' + title;
	}
	this.getAuthor = function() {
		return 'Author: ' + author;
	}
}

var newBook = new Book('JavaScript Pattern', 'jobs');
//for 循环
for (var prop in newBook) {
	console.log(prop);
}
//ECMAScript 5 Object.keys方法返回枚举所有属性
console.log(Object.keys(newBook).join(','));
//ECMAScript 5 Object.getOwnPropertyNames来获得所有属性的名字，不管他们能否枚举
console.log(Object.getOwnPropertyNames(newBook));