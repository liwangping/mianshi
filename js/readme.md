1. 执行上下文栈是在执行函数之前进行准备活动时（执行上下文）创建的，可执行代码包括全局代码，函数代码，eval代码。
执行上下文栈，举个例子，解释执行代码时，先创建全局执行上下文然后压入栈，后函数的执行上下文压入栈中。然后完成后
将其弹出。

2. 执行上下文的三个重要属性： 1. 变量对象 2. 作用域链 3. this
只有到当进入一个执行上下文中，这个执行上下文的变量对象才会被激活，所以才叫 activation object 呐，而只有被激活的变量对象，也就是活动对象上的各种属性才能被访问。
到这里变量对象的创建过程就介绍完了，让我们简洁的总结我们上述所说：

全局上下文的变量对象初始化是全局对象
函数上下文的变量对象初始化只包括 Arguments 对象
在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值
在代码执行阶段，会再次修改变量对象的属性值


function foo() {
    console.log(a);
    a = 1;
}

foo(); // ???

function bar() {
    a = 1;
    console.log(a);
}
bar(); // ???


第一段会报错：Uncaught ReferenceError: a is not defined。

第二段会打印：1。

console.log(foo);

function foo(){
    console.log("foo");
}

var foo = 1;

会打印函数，而不是 undefined 


执行过程如下：
1.checkscope 函数被创建，保存作用域链到 内部属性[[scope]]
checkscope.[[scope]] = [
    globalContext.VO
];复制代码2.执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 函数执行上下文被压入执行上下文栈
ECStack = [
    checkscopeContext,
    globalContext
];复制代码3.checkscope 函数并不立刻执行，开始做准备工作，第一步：复制函数[[scope]]属性创建作用域链
checkscopeContext = {
    Scope: checkscope.[[scope]],
}复制代码4.第二步：用 arguments 创建活动对象，随后初始化活动对象，加入形参、函数声明、变量声明
checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: undefined
    }
}
5.第三步：将活动对象压入 checkscope 作用域链顶端
checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: undefined
    },
    Scope: [AO, [[Scope]]]
}复制代码6.准备工作做完，开始执行函数，随着函数的执行，修改 AO 的属性值
checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: 'local scope'
    },
    Scope: [AO, [[Scope]]]
}复制代码7.查找到 scope2 的值，返回后函数执行完毕，函数上下文从执行上下文栈中弹出

