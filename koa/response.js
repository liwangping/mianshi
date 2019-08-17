module.exports = {
    get body() {
        return this._body;
    },
    set body(data) {
        this._body = data
    },
    //因为会对body进行多次读写和操作，所以不使用原生的this.res.end.
    // 真正返回浏览器的操作是在application.js里进行封装和操作
    get status() {
        return this.res.statusCode;
    },
    set status(statusCode){
        if (typeof statusCode !== 'number'){
            throw new Error('something wrong')
        }
        this.res.statusCode = statusCode
    }
}
