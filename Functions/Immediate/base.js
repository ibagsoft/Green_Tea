/*即时函数模式是一种可以支持在定义函数后立即执行该函数的语法
 */
(function() {
	console.log('watch out!');
}());
//替代语法。但JSLint偏好使用第一种语法
(function() {
	console.log('watch out!');
})();