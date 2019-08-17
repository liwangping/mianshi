// call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。
// 举个例子：

// var foo = {
//     value: 1
// };

// function bar() {
//     console.log(this.value);
// }

// bar.call(foo); // 1

// 相当于
// var foo = {
//     value: 1,
//     bar: function() {
//         console.log(this.value)
//     }
// };

// foo.bar(); // 1

// 实现方法
// 1. 将函数设为对象的属性。
// 2. 执行该函数。
// 3. 删除该函数

// Function.prototype.call2 = function (context) {
//     // 第一步
//     context.fn = this;
//     context.fn();
//     delete context.fn;
// }

// var foo = {
//     value: 1
// }

// function bar(){
//     console.log(this.value)
// }

// bar.call2(foo)


// Function.prototype.call2 = function(context){
//     context.fn = this;
//     context.fn();
//     delete context.fn();
// }
// Function.prototype.call2 = function(context) {
//     context.fn = this;
//     var args = [];
//     for(var i = 1, len = arguments.length; i < len; i++) {
//         args.push('arguments[' + i + ']');
//     }
//     eval('context.fn(' + args +')');
//     delete context.fn;
// }

// // 测试一下
// var foo = {
//     value: 1
// };

// function bar(name, age) {
//     console.log(name)
//     console.log(age)
//     console.log(this.value);
// }


// bar.call2(foo, 'kevin', 18)

//1. 在被调用的对象中，加入需要

// 测试一下
var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}
Function.prototype.call4 = function(context){
    var context = context || window;
   //将该函数函数作该对象的属性
   context.fn = this;
   //将类数组拼成一个数组
   var args = [];
   //?i =1
   for (let i = 1 ; i < arguments.length; i++ ){
        args.push('arguments['+ i +']')
   }
    // console.log([...arguments][0]);
   //放到要执行的函数的参数里面 eval函数
    var results = eval('context.fn('+args+')')//执行了函数
    //eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
    //执行这个函数
    // context.fn();
    //删除这个函数
    delete context.fn
    // return results
}

bar.call4(foo, 'kevin', 18)

