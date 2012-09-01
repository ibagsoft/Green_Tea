/*即时对象初始化模式就像在使用对象字面量创建一个普通的对象。
它指示JavaScript引擎将大括号作为对象字面量，而不是作为一个代码块。
在结束该括号之后，可以立即调用init()方法*/

({
	//在这里定义一些配置常数
	maxwidth:600,
	maxheight:400,

	//定义一些实用的方法
	gimmeMax:function(){
		return this.maxwidth + 'x' + this.maxheight;
	},

	//初始化
	init:function(){
		console.log(this.gimmeMax());
	}
}).init();

/*这种模式的缺点在于绝大多数javascript缩小器工具并不会像仅包装在函数中的代码那样有效的缩减这种模式*/