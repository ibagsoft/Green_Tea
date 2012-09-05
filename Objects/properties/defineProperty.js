/*var newBook = {};
Object.defineProperty(newBook,'publisher',{
	value:"O'Reilly",
	writable:false,
	enumerable:true,
	configurable:true
});

writable，是否可以修改
configurable，是否可以删除或修改
enumerable，是否可以迭代

使用getOwnPropertyDescriptor方法找到一个属性的属性描述符信息：
var propDesc = Object.getOwnPropertyDescriptor(newBook,'category');*/

function Book(title, author) {
	var title = title;
	var author = author;
	var category;
	this.getTitle = function() {
		return 'Title: ' + title;
	}
	this.getAuthor = function() {
		return 'Author: ' + author;
	}
}

Object.defineProperty(Book, 'experience', {
	get: function() {
		return category;
	},
	set: function(val) {
		category = value;
	},
	enumerable: false,
	configurable: true
});

var javaScript_pattern = new Book('pattern', 'jobs');
javaScript_pattern.experience = 'intermediate';
console.log(javaScript_pattern.experience);
var val = Object.getOwnPropertyDescriptor(Book, 'experience');
console.log(JSON.stringify(val));