//bind（） bind() 方法会创建一个新函数。当这个新函数被调用时，bind()
//  的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )

// 俩个特点
//  返回一个函数
//  可以传入参数

//返回一个参数的模拟
Function.prototype.bind1 = function(context) {
    var self = this;
    return function() {
        self.apply(context)
    }
}

//传参的模拟实现

//在bind的时候和执行bind返回的函数的时候。都可以传参

Function.prototype.bind2 = function(context) {
    var self = this;
    // 获取bind2函数从第二个参数到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1);

    return function (){
        // 这个时候的arguments是指bind返回的函数传入的参数.也就是返回阶段的参数写入
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(context, args.concat(bindArgs))
    }
}

// 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
Function.prototype.bind3 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function() {}

    var fbound = function () {

        var bindArgs = Array.prototype.slice.call(arguments);
        // 当作为构造函数时，this 指向实例，self 指向绑定函数，因为下面一句 `fbound.prototype = this.prototype;`，已经修改了 fbound.prototype 为 绑定函数的 prototype，此时结果为 true，当结果为 true 的时候，this 指向实例。
        // 当作为普通函数时，this 指向 window，self 指向绑定函数，此时结果为 false，当结果为 false 的时候，this 指向绑定的 context。
        self.apply(this instanceof self ? this : context, args.concat(bindArgs));
    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承函数的原型中的值
    fNOP.prototype = this.prototype;
    fbound.prototype = new fNOP();
    return fbound;
}

//最终代码
Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var fNOP = function () {};

    var fbound = function () {
        self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)));
    }

    fNOP.prototype = this.prototype;
    fbound.prototype = new fNOP();

    return fbound;

}

