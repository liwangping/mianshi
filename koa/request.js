let url = require('url');
module.exports = {
    //对原生的query进行封装，你在koa实例里使用ctx.query的时候，就会返回url.parse(this.req.url, true).query的值。
    get query(){
        return url.parse(this.req.url, true).query;
    }
}