<template>
  <div class="home">
    <el-container height="93vh">
      <el-header height="90px">
        <!-- 导航栏头部 -->
        <HomeHeader />
      </el-header>
      <el-container>
          <!-- 导航左部 -->
           <HomeLeft />
          <el-container>
          <el-main>
            <!-- 主要内容 -->
            <router-view></router-view>
          </el-main>
          </el-container>
      </el-container>
    </el-container>
  </div>
</template>
  
<script>
import HomeHeader from '@/components/home/HomeHeader'
import HomeLeft from '@/components/home/HomeLeft'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeLeft
  },
  // created() {
    // const currentPath = this.$router.history.current.fullPath
    // console.log(this.$router.history.current.fullPath)
    // if (currentPath !== '/home/clientAnalyse'){
    //  this.$router.push('/home/clientAnalyse')
    // }
    //防止在路由中因为刷新而引起的当前路由中的路径没有跟页面同步刷新而报错
  // }
}
</script>
<style scoped>
 .el-header{
    background-color: #0f2238;;
    color: #fff;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  
</style>