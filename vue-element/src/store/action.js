export default{
    getParamSync (context,Object) {
        setTimeout(()=>{
            context.commit('getParam',Object)
        },3000)
    }
}

// action.是用来解决异步流程来改变state数据的，matution是直接进行同步操作的
