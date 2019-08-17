export default{ 
    getParam (state, Object) {
        state.START_PARMA = Object
    },
    //将state.token置为传入的值
    loginSuccess (state, Object){
        state.token = Object
    }
}
// 对改变state数据进行一个事件注册，第一个参数是拿到state对象，第二个是传入的参数
    // 可以是单个参数
    // 如果是多个参数，则用对象放入，如果写两个参数，会报错