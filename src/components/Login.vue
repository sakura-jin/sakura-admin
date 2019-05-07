<template>
    <div class="login-wrap">
      <div class="sk-login">
        <h1>后台管理系统</h1>
        <el-form :model="formData" :rules="rules" ref="ruleForm" label-with="0px" class="sk-form">
            <el-form-item prop="username" size="small">
              <el-input v-model="formData.username" placeholder="username">
                <el-button slot="prepend" icon="el-icon-user"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item prop="password" size="small">
                <el-input type="password" placeholder="password" v-model="formData.password" @keyup.enter.native="submitForm('formData')">
                  <el-button slot="prepend" icon="el-icon-lock"></el-button>
                </el-input>
            </el-form-item>
            <div class="login-btn">
              <el-button type="primary" @click="submitForm('ruleForm')" size="small">登陆</el-button>
            </div>
            <p class="tip">Tips : 用户名和密码随便填。</p>
        </el-form>
      </div>
    </div>
</template>
<script>
    export default {
        name: "Login",
        data(){
          return{
            formData:{
              username:'sakura',
              password:'123456'
            },
            rules:{
              username:[{required:true,message:'请输入用户名',trigger:'blur'}],
              password:[{required:true,message:'请输入密码',trigger:'blur'}]
            }
          }
        },
        methods:{
          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                this.$router.push('/');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
        }
    }
</script>
<style scoped lang="scss">
.login-wrap{
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../assets/images/login-bg.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .sk-login{
    width: 350px;
    border-radius: 5px;
    background: rgba(16,43,106,0.3);
    overflow: hidden;
    h1{
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      color: #fff;
      border-bottom: 1px solid #ddd;
    }
    .sk-form{
      padding: 30px;
      .login-btn button{
        width: 100%;
        height: 36px;
        margin-bottom: 10px;
      }
      .tip{
        font-size: 12px;
        line-height: 30px;
        color: #fff;
      }
    }
  }
}
</style>
