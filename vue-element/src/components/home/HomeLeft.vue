<template>
        <div class="home_left">
            <el-aside width ="190px">
            <el-row class="tac">
              <el-col :span="24">
                <el-menu
                  default-active="/home/clientAnalyse"
                  class="el-menu-vertical-demo"
                  router
                  >
                  <el-menu-item index="/home/clientAnalyse">
                      <i class="el-icon-house"></i>
                      <span slot="title">客流分析</span>
                  </el-menu-item> 
                  <el-menu-item index="/home/movieTime">
                    <i class="el-icon-document-copy"></i>
                    <span slot="title">影片排期</span>
                  </el-menu-item>
                  <el-menu-item index="/home/saleTransformation">
                    <i class="el-icon-menu"></i>
                    <span slot="title">卖品转化</span>
                  </el-menu-item>
                </el-menu>
              </el-col>         
            </el-row>
          </el-aside>
        </div>
</template>
 
<script>
export default {
  name: 'HomeLeft',
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style scoped>
.el-menu-item{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120px;
}
.el-menu-item i{
  font-size: 30px;
}
.el-menu-item span{
  font-size: 20px;
}
/* .el-aside{
  height:100vh;
} */
</style>