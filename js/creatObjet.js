//工厂模式
function creatPerson(name) {
    var o = new Object();
    o.name = name;
    o.getName = function() {
        console.log(this.name);
    }
    return 0;
}
var person1 = createPerson('kevin');
//缺点：对象无法识别，因为所有实例都指向一个原型

//构造函数模式
function Person(name) {
    this.name = name ;
    this.getName = function(){
        console.log(this.name);
    };
}

var person2 = new Person('kevin')
// 优点：实例可以识别为一个特定的类型

// 缺点：每次创建实例时，每个方法都要被创建一次

// 构造函数模式优化
function Person(name) {
    this.name = name;
    this.getName = getName;
}

function getName(){
    console.log(this.name)
}

var person3 = new Person('kevin')

// 优点：解决了每个方法都要被重新创建的问题

// 缺点：这叫啥封装……

//原型模式
function Person(name) {

}
Person.prototype.name = 'keivn';
Person.prototype.getName = function() {
    console.log(this.name)
};
var person4 = new Person();
// 优点：方法不会重新创建

// 缺点：1. 所有的属性和方法都共享 2. 不能初始化参数

//原型模式优化
function Person(name){

}
Person.prototype = {
    name: 'kevin',
    getName: function() {
        console.log(this.name)
    }
};

var person5 = new Person();
// 优点：封装性好了一点

// 缺点：重写了原型，丢失了constructor属性


// 原型模式优化
function Person(name) {

}

Person.prototype = {
    constructor: Person,
    name: 'kevin',
    getName: function () {
        console.log(this.name);
    }
};

var person1 = new Person();
// 优点：实例可以通过constructor属性找到所属构造函数
// 缺点：原型模式该有的缺点还是有


// 组合模式

function Person(name){
    this.name = name;
}

Person.prototype = {
    constructor: Person,
    getName: function() {
        console.log(this.name);
    }
}

var person6 = new Person();

// 优点：该共享的共享，该私有的私有，使用最广泛的方式

// 缺点：有的人就是希望全部都写在一起，即更好的封装性