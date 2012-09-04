/*JavaScript中常见的一种方法是使用命名约定，使那些不应该被修改的变量全部用大写字母以突出显示
对于自己的常量，也可以采用相同的命名约定，并且将它们以静态属性的方式添加到构造函数内*/
// 构造函数
var Widget = function () {
	//实现
};
// 常数
Widget.MAX_HEIGHT = 320;
Widget.MAX_WIDTH = 480;