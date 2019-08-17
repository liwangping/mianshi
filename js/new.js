// new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一

function Otaku (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

var person = objectFactory(Otaku, 'Kevin', '18')

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin

//第一版
function objectFactory() {
    var obj = new Object(),
    Constructor = [].shift.call(arguments);//取出第一个参数，就是我们传入的构造函数
    obj.__proto__ = Constructor.prototype;//将obj的原型指向构造函数，这样obj就可以访问到构造函数原型中的属性
    Constructor.apply(obj, arguments);//使用apply,改变构造函数this的指向到新建的对象，这样obj就可以访问到构造函数中的属性
    return obj;//返回obj
}

// Constructor.apply(obj, arguments);
// 等价于obj.Constructor(arguments)


//第二版考虑返回值
// 当构造函数返回对象时。我们的实例只能访问到返回的对象的值。而构造函数没有返回对象，那该返回什么就返回什么

// 返回对象时
// function Otaku (name, age) {
//     this.strength = 60;
//     this.age = age;

//     return {
//         name: name,
//         habit: 'Games'
//     }
// }

// var person = new Otaku('Kevin', '18');

// console.log(person.name) // Kevin
// console.log(person.habit) // Games
// console.log(person.strength) // undefined
// console.log(person.age) // undefined

// 没有返回对象
// function Otaku (name, age) {
//     this.strength = 60;
//     this.age = age;

//     return 'handsome boy';
// }

// var person = new Otaku('Kevin', '18');

// console.log(person.name) // undefined
// console.log(person.habit) // undefined
// console.log(person.strength) // 60
// console.log(person.age) // 18

// 所以最后一版代码
function objectFactory1() {
    var obj = new Object(),
    Constructor = [].shift.call(arguments);//取出第一个参数，就是我们传入的构造函数
    obj.__proto__ = Constructor.prototype;//将obj的原型指向构造函数，这样obj就可以访问到构造函数原型中的属性
    var ret = Constructor.apply(obj, arguments);//使用apply,改变构造函数this的指向到新建的对象，这样obj就可以访问到构造函数中的属性
    return typeof ret === 'object' ? ret : obj
}


