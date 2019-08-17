/**
 * movieList模块接口列表
 */
import base from './base';//导入接口域名
import axios from '@/utils/http'; //导入http中创建的axios实例
import qs from 'qs'; //根据需求是否导入qs模块

const movieTimeList = {
   getmovieTimeList () {
    //一个总的数据，后期可以细化
    return axios.get(`${base.default}/movieTimeList`)
   }   
}

export default movieTimeList;