'use strict'
var Test = {
	value1:'one'
};
//锁定一个对象，以防止未来的属性添加
Object.preventExtensions(Test);
Test.value2 = 'test';

//冻结对象,阻止扩展一个对象，阻止对象添加和修改属性描述符
Object.seal(Test);
Test.value1 = 'two'; //OK
Test.newProp = 'value2'; //Exception

//冻结对象。阻止对象的任何修改
Object.freeze(Test);
Test.value1 = 'two';//Exception
Test.newProperty = 'value';//Exception