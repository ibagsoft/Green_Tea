//反模式
function Parent () {}

function Child () {}

var some_var = 1;

var module1 = {};
module1.data = {a:1,b:2};
var module2 = {};

// 可以通过为应用程序创建一个全局对象这种方式来重构。

var MYAPP = {};

MYAPP.Parent = function () {};
MYAPP.Child = function () {};

MYAPP.some_var = 1;

MYAPP.modules = {};

MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = {a:1,b:2};
MYAPP.modules.module2 = {};