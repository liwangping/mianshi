let http = require('http');//创建http
let context = require('./context');
let request = require('./request');
let response = require('./response');

class Application {
    constructor() { //构造器
        this.callbackFunc;
    }
    listen(port) {
        let server = http.createServer(this.callback());//创建服务
        server.listen(port);
    }
    use(fn) {
        this.callbackFunc = fn;
    }
    callback() {
        return (req, res) => {
            this.callbackFunc(req, res)
        };
    }
    //用来将a
    createContext(req, res) {
        let ctx = Object.create(this.context);
        ctx.request = Object.create(this.request);
        ctx.response = Object.create(this.response);
        ctx.req = ctx.request.req = req;
        ctx.res = ctx.response.res = res;
        return ctx;
    }
    //中间件
    compose() {
        return async ctx => {
            function createNext(middleware, oldNext){//将上一个中间件的next当做参数传给下一个中间件，
                // 并且将上下文ctx绑定当前中间件，当中间件执行完，调用next()的时候，其实就是去执行下一个中间件
                return async ()=> {
                    await middleware(ctx, oldNext)
                }
            }
            let len = this.middlewares.length;
            let next = async () => {
                return Promise.resolve();
            }
            for(let i = len - 1; i >= 0; i--) {
                let currentMiddleware = this.middlewares[i];//把所有中间件弹出来
                next = createNext(currentMiddleware, next);//给每个中间件创立next()
            }
            // 上面这段代码其实就是一个链式反向递归模型的实现，i是从最大数开始循环的，将中间件从最后一个开始封装，
            // 每一次都是将自己的执行函数封装成next当做上一个中间件的next参数，这样当循环到第一个中间件的时候，只需要执行一次next()，
            // 就能链式的递归调用所有中间件，这个就是koa剥洋葱的核心代码机制。
            await next()
        } ;
    }
    callback() {
        return (req, res) => {
            let ctx = this.createContext(req, res);
            let respond = () => this.responseBody(ctx);
            let onerror = (err) => this.onerror(err, ctx);
            let fn = this.compose();
            return fn(ctx)
        }
    }  
}

// 到这里我们总结一下上面所有剥洋葱模型代码的流程，通过use传进来的中间件是一个回调函数，回调函数的参数是ctx上下文和next，next其实就是控制权的交接棒，
// next的作用是停止运行当前中间件，将控制权交给下一个中间件，执行下一个中间件的next()之前的代码，当下一个中间件运行的代码遇到了next()，
// 又会将代码执行权交给下下个中间件，当执行到最后一个中间件的时候，控制权发生反转，开始回头去执行之前所有中间件中剩下未执行的代码，
// 这整个流程有点像一个伪递归，当最终所有中间件全部执行完后，会返回一个Promise对象，因为我们的compose函数返回的是一个async的函数，
// async函数执行完后会返回一个Promise，这样我们就能将所有的中间件异步执行同步化，通过then就可以执行响应函数和错误处理函数。


module.exports = Application