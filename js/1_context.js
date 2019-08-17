// var foo = function () {

//     console.log('foo1');

// }

// console.log(foo())// foo1

// var foo = function () {

//     console.log('foo2');

// }
// console.log(foo()) // foo2


// function foo() {

//     console.log('foo1');

// }

// foo();  // foo2

// function foo() {

//     console.log('foo2');

// }

// foo(); // foo2

//代码是分段执行的
//可执行代码 1. 全局代码 2. 函数代码 3. eval代码
//执行到一个函数时，进行准备工作，就是执行上下文

// ECStack = [];   //模拟执行上下文栈

// //只有整个应用程序结束时，ECStack才会被清空。所以全局的执行上下文在栈底。
// ECStack = [
//     globalContext
// ];

// function fun3() {
//     console.log('fun3')
// }

// function fun2() {
//     fun3();
// }

// function fun1() {
//     fun2();
// }

// fun1();

// 当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，
// 就会将函数的执行上下文从栈中弹出。知道了这样的工作原理，让我们来看看如何处理上面这段代码：



// 伪代码

// fun1()
// ECStack.push(<fun1> functionContext);

// // fun1中竟然调用了fun2，还要创建fun2的执行上下文
// ECStack.push(<fun2> functionContext);

// // 擦，fun2还调用了fun3！
// ECStack.push(<fun3> functionContext);

// // fun3执行完毕
// ECStack.pop();

// // fun2执行完毕
// ECStack.pop();

// // fun1执行完毕
// ECStack.pop();

// // javascript接着执行下面的代码，但是ECStack底层永远有个globalContext
var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = (function (i) {
        return function(){
            console.log(i);
        }
  })(i);
}

data[0]();
data[1]();
data[2]();


