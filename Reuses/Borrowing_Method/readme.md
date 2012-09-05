JavaScript中的函数也是对象，并且它们自身也附带着一些有趣的方法，比如apply和call方法。
可以传递对象、任意参数以及借用方法，并将它们绑定到您的对象中以作为this本身的成员。
从根本上说，我们的对象将在一小段时间内伪装成其他对象，从而借用其所需的方法。这就像得到了继承的好处，却无需支付遗产税


ECMAScript 5中将bind()方法尖加到Function.prototype,使得bind()就像apply()和call()一样简单易用。
var newFunc = obj.someFunc.bind(myobj,1,2,3);
当我们在ES5之间的环境中运行时，可以自己实现bind方法