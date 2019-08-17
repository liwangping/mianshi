<template>
  <div class="login">
    <div class="bgimage">
      <div class="login_box">
        <div class="login_box_input">
          <div class="loginBoxInput_container">
            <h4 class="title">
              登录
            </h4>
            <div class="login_input_box">
              <div class="login_input_detali">
                <div class="login_user">
                  <el-input
                    size="large"
                    placeholder="用户名"
                    prefix-icon="el-icon-user"
                    v-model="name">
                  </el-input>
                  </div>
                <div class="login_password">
                  <el-input
                    type="password"
                    size="large"
                    placeholder="密码"
                    prefix-icon="el-icon-lock"
                    v-model="password">
                  </el-input>
                </div>
                <div class="login_remember">
                  <el-radio v-model="radio" label="1">记住账号</el-radio>
                </div>
              </div>
              <div class="login_button">
                <el-button type="primary" class="login_btn" @click="login">登录</el-button>
                <p class="tipText">
                  <span>管理员登录：admin/admin</span> 
                  <!-- <span>用户登录：user/user</span> -->
                </p>
              </div>
              <div class="register">
                <router-link to="/login" class="registerBtn">立即注册</router-link>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
  
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Login',
  data () {
    return { 
      user:{},
      token:"",
      name :"",
      password : "",
      radio: ''
    }
  },
  created(){
        // console.log(this.title1,"111111111111");
        // console.log(this.changePeople,"22222222");
        // console.log(this.changeitem,"33333333");
        // const keyCode = "我是提交"
        // this.$store.commit('getParam', {
        //   keyCode
        // })
        // const keyCode1 = "我是异步提交"
        //  this.$store.dispatch('getParamSync',{
        //         keyCode1
        //     })
        //请求数据
         this.$api.guestAnalysis.guestAnalysisList().then(res => {
              console.log(res)
              const data  = res.data.data;
              this.user = data.user;
              this.token = data.token;
           }).catch( error =>{
           this.$message("网络连接失败")
           console.log(error)
         }    
         );
  },
  computed: mapState({
    // title1: state => state.some,
    // changePeople: 'some'
    // changePeople () {
    //   return this.$store.getters.changePeople
    // }
  }),
  methods: {
      login(){
        console.log("login method")
        if (this.user.name === this.name && this.user.password === this.password){
            this.$message({
              message: "登陆成功",
              type: 'success'
              })
            //将用户信息进行本地保存
            if(this.radio){
              console.log("已进行本地缓存");
              console.log(this.user)
              const userinfo = JSON.stringify(this.user)//JSON化才能将其加入localStorage中
              localStorage.setItem("userinfo", userinfo);
              localStorage.setItem("token", this.token)
            }         
            this.$router.push('/home/clientAnalyse')   
        }else if(this.name === ""){
          this.$message({
              message: "账号不能为空",
              type: 'warning'
          })}else if(this.password === ""){
          this.$message({
              message: "密码不能为空",
              type: 'warning'
          })
          }else{
           this.$message({
              message: "账号或者密码错误",
              type: 'warning'
          })
          this.name = "";
          this.password = ""
        }
      }
    }
}
</script>
<style scoped>
  .login{
    height: 100%;
    width: 100%;
  }
  .bgimage{
    position: relative;
    background-image: url("https://img.alicdn.com/tfs/TB1Gs8ssSzqK1RjSZFHXXb3CpXa-5322-3548.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    min-height: 600px;
  }
  .login_box{
    height: 100%;
    /* padding-top: 100px; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login_box_input{
    position: absolute;
    width: 600px;
    background: #ffffff;
    border-radius: 5px;
    margin: 0 auto;
    padding-bottom: 40px;
  }
  .loginBoxInput_container{
    display: flex;
    margin: 0 auto;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
  }
  .title{
    margin: 0;
    padding: 40px 0;
    color: rgba(0,0,0, .8);
    text-align: center;
    font-size: 40px;
    font-weight: 500;
  }
  .login_password{
    margin-top: 30px;
  }
  .login_remember{
    margin-top: 20px;
  }
  .login_button{
    margin-top: 20px;
  }
  .login_btn{
    width: 100%;
  }
  .tipText{
    color: #999;
    font-style: 13px;
    text-decoration: none;
  }
  .tipText span{
    margin-right: 20px;
  }
  .register{
    text-align: center;
  }
  .registerBtn{
    text-decoration: none;
    color: #5584ff;
  }
</style>