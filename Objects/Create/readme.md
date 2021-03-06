ECMAScript没有类的概念，因上它的对象与基于类的语言中的对象是不同的。

ECMA-262把对象定义为“无序属性的集合，其属性可以包含基本值、对象或函数。”严格来讲，这就相当于说对象是一组没有特定顺序的值。对象的每个属性或者方法都有一个名字，而每个名字都映射到一个值。
因此，我们可以把ECMAScript的对象想象成散列表：无非就是一组名值对，其中值可以是数据或函数。


工厂模式(create_factory)，抽象了创建具体对象的过程。考虑到在ECMAScript中无法创建类，开发人员就发明了一种函数，用函数来封装以特定接口创建对象的细节.该模式没有解决对象识别的问题。

构造函数模式(create_constructor)，利用构造函数来创建特定类型的对象。
1、如果不使用new操作符来调用，那它跟普通函数没有什么两样。但是请注意，如果不使用new操作符调用，属性和方法都被添加给了Global对象。
2、使用构造函数的主要问题，就是每个方法都要在每个实例上重新创建一遍。然而创建两个完成同样任务的Function实例的确没有必要。
优化后的模式虽然解决了创建重复函数的问题，但是污染了全局环境

原型模式(create_prototype)，每个函数都有一个prototype属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。
原型模式省略了为构造函数传递初始化参数这一环节，结果所有实例在默认情况下都将取得相同的属性值。这就意味着原型中的所有属性都是被很多实例共享的，这种共享对函数非常合适。然而对于包含引用类型值的属性来说，麻烦就来了

组合使用构造函数模式和原型模式(create_combination),是创建自定义类型的最常见方式，就是组合使用构造函数模式与原型模式。构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。如此，每个实例都会有自己的一份实例属性的副本，同时又共享着对方的引用，最大限度地节省了内存。

动态原型模式(dynamic_prototype)，把所有信息都封装在了构造函数中，而通过在构造函数中初始化原型，又保持了同时使用构造函数和原型的优点。

寄生构造函数模式(parasitic_constructor)，以前述几种模式都不适用的情况下，可以使用寄生构造函数模式。基本思想是创建一个函数，该函数的作用仅仅是封装创建对象的代码，然后再返回新创建的对象，但从表面上看，这个函数又很像是典型的构造函数。使用寄生构造函模式，需要考虑两点：
1.返回的对象与构造函数或者与构造函数的原型属性之间没有关系。构造函数返回的对象与在构造函数外部创建的对象汉有什么不同。
2.不能依赖instanceof操作符来确定对象类型。
由于存在上述问题，我们建议在可以使用其他模式的情况下，不要使用这种模式。

稳妥构造函数模式(durable_objects)。道格拉斯.克罗我福德(Douglas Crockford)发明了稳妥对象(durable_objects)的概念。所谓稳妥对象，指的是没有公共属性，而且其方法也不引用this的对象。稳妥对象最适合在一些安全的环境中(这种环境中会禁止使用this和new)，或者防止数据被其他应用程序改动时使用。
稳妥构造函数遵循与寄生构造函数类似的模式，但有两点不同：
1、新创建对象的实例方法不引用this
2、不使用new操作符调用构造函数
与寄生构造函数模式类似，使用稳妥构造函数模式创建的对象与构造函数之间也没有什么关系，因此instanceof操作符对这种对象也没有意义。