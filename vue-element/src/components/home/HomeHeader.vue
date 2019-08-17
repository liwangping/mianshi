<template>
        <div class="home_header">
            <div class="title">
                <router-link to="/home" class="systemName left">客源分析管理系统</router-link>       
            </div>
            <div class="headerRight">
                <div class="headerRight_box">
                    <router-link to="/home/clientAnalyse" class="">                
                        <el-tooltip class="item" effect="dark" content="首页" placement="bottom">
                        <el-button class="headerRightBtn">
                            <i class="el-icon-s-home"></i>
                            <span class="systemName">首页</span>
                        </el-button>
                        </el-tooltip>
                    </router-link>
                </div>
                <div class="headerRight_box">
                    <router-link to="/home/clientAnalyse">                                
                        <el-tooltip class="item" effect="dark" content="反馈" placement="bottom">
                        <el-button class="headerRightBtn">                   
                            <i class="el-icon-s-comment"></i>
                            <span class="systemName">反馈</span>
                        </el-button>
                        </el-tooltip>
                    </router-link>                
                </div>
                <div class="headerRight_box">
                    <router-link to="/home/clientAnalyse">                                
                        <el-tooltip class="item" effect="dark" content="帮助" placement="bottom">
                        <el-button class="headerRightBtn">
                            <i class="el-icon-question"></i>
                            <span to="/home" class="systemName">帮助</span>
                        </el-button>
                        </el-tooltip>
                    </router-link>                                
                </div>         
                <div class="headerRight_box">
                    <router-link to="/login">                                
                        <el-tooltip class="item" effect="dark" content="退出" placement="bottom" >
                        <el-button class="headerRightBtn">
                            <i class="el-icon-question"></i>
                            <span class="systemName" @click="loginOut">退出</span>
                        </el-button>
                        </el-tooltip>
                    </router-link>                                
                </div>         
            </div>
        </div>
</template>
 
<script>
export default {
  name: 'HomeHeader',
  methods:{
      loginOut(){
        //   const userinfo = JSON.stringify(user)//JSON化才能将其加入localStorage中
        //   localStorage.setItem("userinfo", userinfo);
        console.log("删除")
        window.localStorage.removeItem('token');
      }
  }
}
</script>
<style scoped>
 
  .home_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .headerRightBtn{
      background-color: #0f2238;
      border: 0;
  }
  .systemName{
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    background-color: #0f2238;
  }
  .systemName.left{
    font-size: 25px;
  }
  .headerRight{
      display: flex;
  }
  .el-icon-s-home,.el-icon-s-comment,.el-icon-question{
      color: #fff;
  }
  router-link:hover{
      color: #5584ff
  }
</style>