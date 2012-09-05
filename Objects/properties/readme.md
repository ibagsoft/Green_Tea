getter/setter函数是一种特殊的语法，提供了对私有数据成员像属性一样的访问。
getter/setter函数为私有数据成员提供了一个额外的保护层。

在构造函数式的对象创建过程中，可以使用__defineGetter__()和__defineSetter__()方法设置属性
而在字面量对象中，则可以使用 get func() 和 set func()的方法

Object.defineProperty()方法也可以给构造函数设置属性。

可以采用for的方式枚举属性，在ECMAScript 5中，新添加了Object.keys和Object.getOwnPropertyNames方法

在使用'use strict'的严格模式下，ECMAScript提供了阻止函数