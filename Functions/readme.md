callback pattern ，可以用来异步调用、事件、节省性能、还要注意作用域上下文

return pattern ， 可以用来完成一些初始化的工作，以及闭包，访问私有数据。

self_definition pattern ， 有一些准备工作要做，但只需要执行一次。

Immediate Function pattern ， 可以支持在定义函数后立即执行该函数的语法。它为初始化代码提供了一个作用域沙箱。它可以帮助包装许多想要执行的工作，且不会在后台留下任何全局变量。

Immediate object initialization pattern ， 这种模式带有init()方法的对象，该方法在创建对象后立却执行。init()函数需要负责所有的初始化任务。它使整个初始化过程显得更有结构化。

load-time branching pattern , 是一种优化模式。当知道某个条件在整个程序生命周期内都不会发生改变的时候，仅对该条件测试一次是很有意义的。