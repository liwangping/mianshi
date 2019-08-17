//context的作用就是将requext,response对象挂载到ctx的上面。
// 让koa实例和代码能方便的使用到request,response对象中的方法
let proto = {}

//定义两个简单的set和get方法
function delegateSet(property, name){
    proto.__defineSetter__(name, function(val) {
        this[property][name] = val;
    });
}

//delegateGet('request', query)
//proto[request][query] = undefined
function delegateGet(property, name) {
    proto.__defineGetter__(name, function() {
        return this[property][name]
    })
}

let requestSet = [];        //请求
let requestGet = ['query'];

let responseSet = ['body', 'status'];
let responseGet = responseSet;

requestSet.forEach(ele => {
    delegateSet('request', ele);
})

requestGet.forEach(ele => {
    delegateGet('request', ele)
})
//delegateGet('request', query)

responseSet.forEach(ele => {
    delegateSet('response', ele);
})

responseGet.forEach(ele => {
    delegateGet('response', ele);
})

module.exports = proto