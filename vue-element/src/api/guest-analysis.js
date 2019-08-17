/**
 * guestAnalysis模块接口列表
 */
 import base from './base';//导入接口域名
 import axios from '@/utils/http'; //导入http中创建的axios实例
 import qs from 'qs'; //根据需求是否导入qs模块

 const guestAnalysis = {
    guestAnalysisList () {
        //一个总的数据，后期可以细化
     return axios.get(`${base.default}/admin`)
    }   
 }

 export default guestAnalysis;

//  1.通过直接引入封装好的axios实例，然后定义接口、调用axios实例并返回，可以更灵活的使用axios，
//  可以对post请求时提交的数据进行一个qs序列化的处理等。
//  2.请求的配置更灵活，可以针对某个需求进行一个不同的配置。


