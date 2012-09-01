callback pattern ，可以用来异步调用、事件、节省性能、还要注意作用域上下文

return pattern ， 可以用来完成一些初始化的工作，以及闭包，访问私有数据。

self_definition pattern ， 有一些准备工作要做，但只需要执行一次。

Immediate Function pattern ， 可以支持在定义函数后立即执行该函数的语法。它为初始化代码提供了一个作用域沙箱。它可以帮助包装许多想要执行的工作，且不会在后台留下任何全局变量。

Immediate object initialization pattern ， 这种模式带有init()方法的对象，该方法在创建对象后立却执行。init()函数需要负责所有的初始化任务。它使整个初始化过程显得更有结构化。

load-time branching pattern , 是一种优化模式。当知道某个条件在整个程序生命周期内都不会发生改变的时候，仅对该条件测试一次是很有意义的。

configuration object pattern ，一种更整洁的API方法，尤其是在建立一个库或任何将被其他程序使用的代码的情况

memoization pattern，可以在任何时候将自定义属性添加到你的函数中。自定义属性的其中一个用例是缓存函数结果。缓存函数结果也被称为备忘。

curry


小结：
1、函数是一等对象。可以作为带有属性和方法的值以及参数进行传递 
2、函数提供了局部作用域，而其他大括号并不能提供这种局部作用域。此外还需要记住的是，声明的局部变量可被提升到局部作用域的顶部。

一些有用的模式：
1、API模式，可以帮助我们为函数提供更好且更整洁的接口
callback pattern，将函数作为参数进行传递
configuration object pattern，有助于保持受到控制的函数的参数数量
return pattern，当一个函数的返回值是另一个函数时
curry，当新函数是基于现有函数，并加上部分参数列表创建时

2、初始化模式，可以帮助我们在不污染全局命名空间的情况下，使用临时变量以一种更整洁、结构化的方式执行初始化以及设置任务。
Immediate function pattern，只要定义之后就立即执行
Immediate object initialization pattern，匿名对象组织了初始化任务，提供了可被立即调用的方法
load-time branching pattern，帮助分支代码在初始化代码执行过程中仅检测一次，这与以后在程序生命期内多次检测相反

3、性能模式，可以帮助加速代码运行
memoization pattern，使用函数属性以便使得计算过的值无须再次计算
self_definition pattern，以新的主体重写本身，以使得第二次或以后调用时仅需执行更少的工作