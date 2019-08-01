event loop 事件队列
异步问题
JS单线程
setTimeout  async  promise
async task 进入event队列等待执行
宏任务  微任务 队列
回调函数加入事件队列中  task queue 执行栈
macrotask   setTimeout
microtask   setImmediate
I/O UI rending  一次执行一次

microtask

microtask Promise
process.nextTick 优先 一次执行完

1. macrotask ['A'],
2. macrotask ['A', 'B']
3. c
4. microtask ['D]
5. E

