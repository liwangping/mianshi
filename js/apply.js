//整体思想
// var foo = {
//     value: 1
// };

// function bar() {
//     console.log(this.value);
// }

// bar.call(foo); // 1

// 改造成下面这样

// var foo = {
//     value: 1,
//     bar: function() {
//         console.log(this.value)
//     }
// };

// foo.bar(); // 1

// 所以我们模拟的步骤可以分为：

// 将函数设为对象的属性
// 执行该函数
// 删除该函数
var foo = {
    value: 1
};
function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}
Function.prototype.apply1 = function(context, arg){
    //将相应的函数插入对象上
    var context = Object(context) || window;
    context.fn = this;
    var result 
    //执行相应的代码
    if (!arg) {
        result = context.fn()
    }else{
        var args = []
        for (let i = 0; i < arg.length; i++ ){
            args.push('arg['+ i +']')
        }
        result = eval('context.fn(' + args+')')
    }
    
    //删除函数
    delete context.fn
    return result
}
// Function.prototype.apply1 = function (context, arr) {
//     var context = Object(context) || window;
//     context.fn = this;

//     var result;
//     if (!arr) {
//         result = context.fn();
//     }
//     else {
//         var args = [];
//         for (var i = 0, len = arr.length; i < len; i++) {
//             args.push('arr[' + i + ']');
//         }
//         result = eval('context.fn(' + args + ')')
//     }

//     delete context.fn
//     return result;
// }



bar.apply1(foo, ['kevin', 18])