/**
 * api接口的统一出口 
 */
//客流分析模块的输出
import guestAnalysis from '@/api/guest-analysis.js';
import movieTimeList from '@/api/movie-timeList.js';

export default {
    guestAnalysis,
    movieTimeList
}